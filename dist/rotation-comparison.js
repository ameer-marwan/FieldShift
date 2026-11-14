import { t, tFor, currentLanguage } from './i18n.js';

const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[ch]);
const finite = Number.isFinite;
const ready = finite;
const sum = values => values.every(ready) ? values.reduce((total, value) => total + value, 0) : null;
const seasons = [0, 1];
const planNames = ['Plan A', 'Plan B'];
const priorities = { soil: 'Soil cover and diversity', water: 'Water conservation', risk: 'Climate resilience', cost: 'Operating cost' };

export const exampleField = {
  name: 'Example field near Al Kharj',
  lat: 24.1444,
  lon: 47.2986,
  currency: 'SAR',
  soil: 'Example: medium-textured soil. Drainage and soil pH still need field verification.',
  water: 'Example: irrigation available. Confirm supply and delivery efficiency before planting.',
};

const examplePlans = [
  { crops: ['wheat', 'chickpea'], plantingMonths: [11, 2], water: [320, 190], cost: [4200, 3000] },
  { crops: ['barley', 'sunflower'], plantingMonths: [11, 3], water: [260, 220], cost: [3600, 4100] },
];
const blank = () => ({ priority: 'water', plans: planNames.map(() => ({ crops: ['', ''], plantingMonths: [null, null], water: [null, null], cost: [null, null] })) });

export function compareRotationPlans(plans, cropOptions) {
  return plans.map(plan => {
    const crops = plan.crops.map(id => cropOptions.find(crop => crop.id === id) ?? null);
    const groups = crops.filter(Boolean).map(crop => crop.type);
    return {
      ...plan,
      crops,
      irrigationMm: sum(plan.water),
      costPerHa: sum(plan.cost),
      distinctGroups: groups.length === seasons.length ? new Set(groups).size : null,
    };
  });
}

function numberInput(value) {
  if (String(value).trim() === '') return null;
  const numeric = Number(value);
  return ready(numeric) && numeric >= 0 ? numeric : null;
}

function comparisonMarkup(record, context, options, language) {
  const tr = label => esc(tFor(language, label));
  const fmt = value => ready(value) ? esc(new Intl.NumberFormat(language, { maximumFractionDigits: 1 }).format(value)) : tr('Not available');
  const plans = compareRotationPlans(record.plans, options);
  const metric = record.priority === 'soil' ? 'distinctGroups' : record.priority === 'cost'
    ? 'costPerHa' : record.priority === 'water' ? 'irrigationMm' : null;
  const [first, second] = plans.map(plan => plan[metric]);
  const complete = plans.every(plan => plan.crops.every(Boolean));
  let summary = 'Enter both seasons for each plan to compare the selected priority.';
  if (metric && complete && ready(first) && ready(second)) {
    if (first === second) summary = 'The plans are tied on the selected indicator.';
    else if (metric === 'distinctGroups') summary = first > second ? 'Plan A includes more crop groups.' : 'Plan B includes more crop groups.';
    else if (metric === 'costPerHa') summary = first < second ? 'Plan A has lower entered operating costs.' : 'Plan B has lower entered operating costs.';
    else summary = first < second ? 'Plan A has a lower entered irrigation allocation.' : 'Plan B has a lower entered irrigation allocation.';
  }
  if (!metric) summary = 'Review seasonal weather and local planting windows for both plans before comparing climate resilience.';
  const climate = context.climate;
  const monthFormat = new Intl.DateTimeFormat(language, { month: 'short', calendar: 'gregory', timeZone: 'UTC' });
  const monthName = month => monthFormat.format(new Date(Date.UTC(2024, month - 1, 1)));
  const plannedMonth = (plan, season) => {
    const month = plan.plantingMonths?.[season];
    if (!month) return tr('Not selected');
    const rain = climate?.months.find(record => record.month === month)?.rain;
    return esc(monthName(month)) + ' · ' + fmt(rain) + (ready(rain) ? ' ' + tr('mm') : '');
  };
  const rows = [
    ['Season 1 crop', ...plans.map(plan => plan.crops[0]?.name ? tr(plan.crops[0].name) : tr('Not selected'))],
    ['Season 2 crop', ...plans.map(plan => plan.crops[1]?.name ? tr(plan.crops[1].name) : tr('Not selected'))],
    ['Season 1 planting month and historical precipitation', ...plans.map(plan => plannedMonth(plan, 0))],
    ['Season 2 planting month and historical precipitation', ...plans.map(plan => plannedMonth(plan, 1))],
    ['Crop groups represented', ...plans.map(plan => fmt(plan.distinctGroups))],
    ['Entered irrigation allocation', ...plans.map(plan => fmt(plan.irrigationMm) + (ready(plan.irrigationMm) ? ' ' + tr('mm') : ''))],
    ['Entered operating cost per hectare', ...plans.map(plan => fmt(plan.costPerHa) + (ready(plan.costPerHa) ? ' ' + esc(context.currency) : ''))],
  ];
  const months = climate?.months.filter(month => ready(month.rain)) || [];
  const annualRain = months.length === 12 ? sum(months.map(month => month.rain)) : null;
  const monthRows = months.map(month => monthName(month.month) +
    ' ' + new Intl.NumberFormat(language, { maximumFractionDigits: 1 }).format(month.rain) + ' ' + tFor(language, 'mm'));
  const climateEvidence = climate ? '<p>' + tr('Regional reference year') + ' · <bdi>' + fmt(climate.year) + '</bdi> · ' +
    tr('Months with complete rainfall data') + ' <bdi>' + fmt(months.length) + '/12</bdi>' +
    (ready(annualRain) ? ' · ' + tr('Annual precipitation') + ' <bdi>' + fmt(annualRain) + ' ' + tr('mm') + '</bdi>' : '') +
    '</p><p><bdi>' + esc(monthRows.join(' · ')) + '</bdi></p><p>' + tr('Use the monthly record to investigate seasonal timing for both plans. Crop water requirements still need local evidence.') +
    '</p><a href="' + esc(climate.sourceUrl) + '">' + tr('NASA POWER source') + '</a>'
    : '<p>' + tr(context.loading ? 'Loading regional history…' : 'Regional history unavailable. You can still compare your entered plans.') + '</p>';

  return '<section class="rotation-results"><h2>' + tr('Rotation comparison') + '</h2><p>' + tr('Planning priority') + ' · ' +
    tr(priorities[record.priority]) + '</p><p class="rotation-summary"><strong>' + tr(summary) + '</strong></p>' +
    '<div class="rotation-scroll"><table><thead><tr><th scope="col">' + tr('Indicator') + '</th>' +
    planNames.map(name => '<th scope="col">' + tr(name) + '</th>').join('') + '</tr></thead><tbody>' +
    rows.map(([label, ...values]) => '<tr><th scope="row">' + tr(label) + '</th>' + values.map(value =>
      '<td><bdi>' + value + '</bdi></td>').join('') + '</tr>').join('') + '</tbody></table></div>' +
    '<p>' + tr('Crop groups show variety in the selected sequence. Irrigation allocations and costs are planning inputs for both seasons.') + '</p>' +
    '<h3>' + tr('Field evidence') + '</h3><ul><li>' + esc(context.soil) + '</li><li>' + esc(context.water) + '</li></ul>' +
    '<h3>' + tr('Seasonal context from NASA POWER') + '</h3>' + climateEvidence +
    '<h3>' + tr('Before choosing a rotation') + '</h3><p>' + tr('Confirm planting windows, rotation restrictions, soil tests and seasonal water supply with local evidence.') + '</p></section>';
}

export function renderRotationReport(host, record, context, options) {
  host.innerHTML = comparisonMarkup(record, context, options, currentLanguage());
}

function downloadComparison(record, context, options) {
  const language = currentLanguage();
  const dir = ['ar', 'ur'].includes(language) ? 'rtl' : 'ltr';
  const title = esc(t('Rotation comparison'));
  const notice = context.demo ? '<p class="notice">' + esc(t('Example field · sample planning inputs')) + '</p>' : '';
  const html = '<!doctype html><html lang="' + language + '" dir="' + dir + '"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1"><title>' + title + '</title>' +
    '<style>body{color:#163b2c;background:#f0f6ef;font:1rem/1.6 Arial,sans-serif;margin:0}main{max-width:55rem;margin:auto;padding:1.2rem}' +
    'header{background:#123f30;color:#fff;padding:1.2rem;border-radius:1rem}h1,h2,h3,p{margin:.35em 0}.notice{font-weight:bold}' +
    '.rotation-results{background:white;padding:1rem;margin-top:1rem;border:1px solid #c9d9cc;border-radius:1rem}.rotation-summary{padding:.6rem;background:#e6f1dd}' +
    '.rotation-scroll{overflow:auto}table{width:100%;border-collapse:collapse}th,td{padding:.5rem;text-align:start;border-bottom:1px solid #c9d9cc}a{color:#245c3d}</style>' +
    '</head><body><main><header><p>AgriPulse</p><h1>' + esc(context.name) + '</h1>' + notice + '</header>' +
    comparisonMarkup(record, context, options, language) + '</main></body></html>';
  const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'AgriPulse-rotation-comparison.html';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function mountRotationComparison({ host, options, getContext, readRecord, writeRecord, demo = false }) {
  let demoRecord = { ...blank(), plans: structuredClone(examplePlans) };
  let activeKey;
  let record;
  const form = document.createElement('form');
  form.className = 'rotation-comparison-form';
  const results = document.createElement('div');
  const priority = '<label>Planning priority<select name="priority">' +
    Object.entries(priorities).map(([key, label]) => '<option value="' + key + '">' + esc(label) + '</option>').join('') + '</select></label>';
  const choices = '<option value="">Choose a crop</option>' + options.map(crop =>
    '<option value="' + esc(crop.id) + '">' + esc(crop.name) + '</option>').join('');
  const monthOptions = '<option value="">Not selected</option>' + Array.from({ length: 12 }, (_, index) => {
    const label = new Intl.DateTimeFormat('en', { month: 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(2024, index, 1)));
    return '<option value="' + (index + 1) + '">' + label + '</option>';
  }).join('');
  form.innerHTML = priority + '<div class="rotation-plan-editors">' + planNames.map((name, index) =>
    '<fieldset><legend>' + name + '</legend>' + seasons.map(season => {
      const suffix = index + '-' + season;
      const label = season === 0 ? 'Season 1' : 'Season 2';
      return '<div class="rotation-season"><h3>' + label + '</h3><label>Crop<select name="crop-' + suffix + '">' + choices + '</select></label>' +
        '<label>Planned planting month<select name="month-' + suffix + '">' + monthOptions + '</select></label>' +
        '<label>Irrigation allocation (mm)<input name="water-' + suffix + '" type="number" min="0" step="any"></label>' +
        '<label>Operating cost per hectare<input name="cost-' + suffix + '" type="number" min="0" step="any"></label></div>';
    }).join('') + '</fieldset>').join('') + '</div><button class="button secondary" type="button" data-rotation-export>Download comparison report</button>';
  const heading = document.createElement('h2');
  heading.textContent = 'Compare two crop rotations';
  const intro = document.createElement('p');
  intro.textContent = 'Enter the next two seasons for both plans. Leave unknown amounts blank.';
  host.replaceChildren(...(demo ? [] : [heading]), intro, form, results);

  function render() {
    const context = getContext();
    form.hidden = !context;
    if (!context) {
      results.textContent = t('Choose a field to compare two rotations.');
      return;
    }
    if (activeKey !== context.key || !record) {
      activeKey = context.key;
      record = demo ? demoRecord : readRecord(context.key) || blank();
      form.elements.priority.value = record.priority;
      record.plans.forEach((plan, index) => seasons.forEach(season => {
        const suffix = index + '-' + season;
        form.elements['crop-' + suffix].value = plan.crops[season];
        form.elements['month-' + suffix].value = plan.plantingMonths?.[season] ?? '';
        form.elements['water-' + suffix].value = plan.water[season] ?? '';
        form.elements['cost-' + suffix].value = plan.cost[season] ?? '';
      }));
    }
    results.innerHTML = comparisonMarkup(record, context, options, currentLanguage());
  }

  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('input', () => {
    const context = getContext();
    if (!context || context.key !== activeKey) return;
    record = {
      priority: form.elements.priority.value,
      plans: planNames.map((_, index) => ({
        crops: seasons.map(season => form.elements['crop-' + index + '-' + season].value),
        plantingMonths: seasons.map(season => numberInput(form.elements['month-' + index + '-' + season].value)),
        water: seasons.map(season => numberInput(form.elements['water-' + index + '-' + season].value)),
        cost: seasons.map(season => numberInput(form.elements['cost-' + index + '-' + season].value)),
      })),
    };
    if (demo) demoRecord = record;
    else writeRecord(activeKey, record);
    render();
  });
  form.querySelector('[data-rotation-export]').addEventListener('click', () => {
    const context = getContext();
    if (context && record) downloadComparison(record, context, options);
  });
  render();
  return render;
}
