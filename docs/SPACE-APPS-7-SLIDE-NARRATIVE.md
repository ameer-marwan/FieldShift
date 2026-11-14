# AgriPulse — fact-checked seven-slide judging story (NASA Space Apps 2026)
**Team: Dunia Al-Ajial Devs · Local event: Riyadh**
**Challenge: Field Shift: Adapting Farms with NASA Data**

The purpose of this narrative is to prevent unsupported claims in a pitch. The team must check the uploaded file on NASA independently: **a GitHub edit does not replace a submission attachment.**

## Slide 1 · AgriPulse — From Space to Soil
*Tagline:* Evidence-led crop rotation planning.
- Challenge: Field Shift: Adapting Farms with NASA Data.
- Team: Dunia Al-Ajial Devs; Riyadh.

## Slide 2 · Problem
Farmers need interpretable climate context alongside local soils, water resources and growing constraints.
- NASA data are public, but data literacy and field-level interpretation are hard.
- **Do not claim quantified water savings, yield gains or proven crop-risk reduction.**

## Slide 3 · Solution
AgriPulse is a web-based decision workspace.
- Choose a field, load NASA historical climate data and visual map layers, record local inputs.
- Compare **illustrative** family-diverse crop pathways, not agronomically validated recommendations.
- Keep source types and uncertainty visible (NASA history, modeled forecast, farmer measurements, scenario assumptions).

## Slide 4 · Workflow
1. NASA POWER Daily API history and NASA GIBS imagery.
2. Select location and enter local soil, water, crop and price context.
3. Explore three family-diverse crop planning pathways and transparent economic scenarios.
4. Export a planning report and caveats.

Tools include HTML/CSS/JavaScript, MapLibre, Node.js, Open-Meteo and Vercel.

## Slide 5 · NASA Data / Sources
- **NASA POWER Daily API** = historical regional weather/precipitation values used in app logic.
- **NASA GIBS** = visual Blue Marble / MODIS NDVI / SMAP / IMERG / SRTM raster tile layers, **not** sampled for field water or suitability calculations.
- **Open-Meteo** = separate, non-NASA modeled current forecast.
- Data sources: https://github.com/ameer-marwan/AgriPulse/blob/main/CREDITS-AND-SOURCES.md

## Slide 6 · Demo
**Working in checked code:** NASA API requests, GIBS map-layer configuration, farmer record entry, exploratory crop-family pathways and downloadable decision reports.
**Not validated:** automated irrigation prescriptions, agronomic crop suitability, measured water savings, pixel-derived SMAP values or live NDVI farm analysis.
- Proposed demonstration: choose field → load NASA climate → compare paths → export assumptions.
- A diagram is not a real product screenshot; **label diagrams**.

## Slide 7 · Impact and next steps
- Benefit: accessible, transparent information for rural communities and water-conscious agricultural planning.
- Next: locally approved suitability and planting calendars, crop-specific ET0/Kc water-demand models, field measurements and empirical validation.
- Roles: Ameer Marwan (development), Mostafa Bassieet (product/UX), Mr. Ahmed El-Khateeb (ICT mentor).

## Official judging and SI requirements

- NASA SI-generated visual content must carry a **visible watermark** and must not incorporate NASA brand elements in generated graphics.
- New visuals used in the website are labeled **SI-GENERATED VISUAL · ILLUSTRATION**.
- Reusing challenge-specific work from before the start date requires truthful organizer clarification; do not rewrite Git history.
- Team owner must ensure uploaded slides and public demo reflect the final reviewed changes.

**Source-of-truth:** actual GitHub implementation and the official Space Apps rules. The separate seven-slide PowerPoint/PDF prepared for the owner is not automatically uploaded to the NASA team page.
