# AgriPulse — NASA-informed Crop Rotation Explorer (14 Nov 2026)

## Purpose and status

This is a **decision-support prototype** for **Field Shift: Adapting Farms with NASA Data**, not a validated agronomy service. The farmer can compare **three explicit, editable-choice pathways** using known botanical family relationships, a selected current crop, a chosen priority, water access and optional soil pH, with historical NASA POWER context where loaded.

**None of the following are claimed to be implemented:** an agronomically approved crop-suitability model, numeric crop-specific irrigation requirements, proven water savings, forecast yields, a production-ready rotation optimizer, field-scale SMAP soil-moisture extraction, or live NASA forecasts.

The code update is new hackathon-period work in the repository's recorded history. It does **not** cure or conceal any concerns about earlier project-specific work. Seek eligibility clarification from the organizers.

## Quick demonstration for judges (English)

1. Open the public website after deployment, choose a field location such as **Riyadh**, and note the coordinates.
2. Open **Reports** → **Load NASA climate context**. The app calls the **NASA POWER Daily API** for the **previous completed calendar year**. Observe the monthly data and its source/limitations.
3. Open **Crop planner**. Choose the current crop, water access (rainfed or irrigated), an optional **farmer-measured** soil pH, and planning priority.
4. Select **Compare paths**. Explore three distinct pathways and check each two-stage crop-family sequence:
   - **Soil-cover & diversity** — considers a grass/legume family alternation.
   - **Water-awareness** — considers crop-cover stages and asks the farmer to validate water availability; it **does not claim actual savings**.
   - **Diversification** — considers a third plant family to reduce repetition.
5. Each pathway displays the historical **NASA POWER rainfall total only when 12 monthly precipitation totals exist**. Partial data stays explicitly incomplete; the app does **not** invent missing rainfall.
6. Review the farmer-input notes and **local-validation warning**. The example stage positions are **not calendar planting dates**.
7. Save a chosen pathway as a **candidate for discussion**, not a planting instruction. Show the other modules (field map, local soil samples, scenario economics) separately.

## Rules used

- **Botanical family:** Poaceae for wheat, maize, sorghum, barley and cereal rye; Fabaceae for soybean, chickpea, cowpea and clover; Asteraceae for sunflower.
- **Diversity logic:** candidate sequences intentionally change crop families between successive stages. This is a general rotation principle, **not** a proof that a given crop is suitable at the selected coordinates.
- **Farmer priority:** controls which pathway appears first. It does not override crop biology, water needs, or local regulations.
- **Farmer water access:** shown as an explicit context statement; irrigation requirements are not inferred.
- **Farmer-entered pH:** echoed for provenance; there are no verified crop-specific thresholds integrated in this build.
- **NASA POWER:** descriptive annual historical regional-grid rainfall, **not** an irrigation forecast. When complete, the prototype reports the annual rainfall and number of zero-rainfall months. It does not score specific crops based on rainfall.
- **Water, yield and profit:** never inferred as gains from these rotation profiles.

## Evidence and limitations

- USDA NRCS soil health and crop rotation principles: https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-on-cropland
- USDA NRCS crop diversity (different plant families): https://www.nrcs.usda.gov/sites/default/files/2022-10/National-Agronomy-Manual.pdf
- NASA POWER scientific data: https://power.larc.nasa.gov/
- NASA challenge specification: https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/

**Sources above support the general soil-health rationale and historical climate evidence. They do not validate these proposed two-stage sequences for any specific farm.** Local expert review of crop variety, planting season, disease history, soil chemistry, crop-water demand and water availability remains essential.

## Implementation and verification

- `dist/data.js` — crop-family catalog, annual NASA rainfall completeness guard and three candidate pathways.
- `dist/app.js` — passes loaded `state.nasa` to rotation logic; refreshes after NASA history loads; removes artificial future planting dates; labels crop pH suitability as unverified.
- `tests/data.test.mjs` — regression checks for all ten current crops, profile priority, no consecutive same-family stages, NASA rainfall completeness and missing data behavior.
- Test locally: `npm run check && npm test`; then `npm run dev` and test in a browser. Browser/live API/hosted results require separate verification.

## Questions for a local agronomist / follow-up work

1. Which two or three commercially relevant crops and varieties are suitable for this farm's **actual soil, salinity, water access and seasons**?
2. What are crop-specific agronomic and irrigation thresholds from a documented regional source?
3. How can NASA historical data be combined with a **validated planting calendar and ET0/Kc irrigation model** without treating satellite grids as soil sensors?
4. How should the team communicate uncertainty and compare baseline versus alternatives with reproducible observations?

**This build is exploratory, with provenance and limitations visible by design.**
