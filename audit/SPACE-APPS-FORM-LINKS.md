# AgriPulse — ready-to-copy NASA Space Apps 2026 reference fields
**For the team owner to paste, verify, and submit — no NASA account was edited by this file.**

## A. NASA Data section (sources used in the current code)

| Link Text | Link URL | What AgriPulse actually uses |
|---|---|---|
| NASA POWER Daily API | https://power.larc.nasa.gov/ | Historical regional meteorology and annual rainfall context used in application logic. |
| NASA GIBS Earth Observation Map Tiles | https://gibs.earthdata.nasa.gov/ | Raster map visualization only. |
| NASA SRTM Terrain Map Layer | https://www.earthdata.nasa.gov/data/instruments/srtm | GIBS terrain layer, not a slope/erosion calculator. |
| NASA MODIS Terra NDVI Map Layer | https://worldview.earthdata.nasa.gov/ | Display-only vegetation index imagery. |
| NASA GPM / IMERG Precipitation Map Layer | https://gpm.nasa.gov/data | Display-only precipitation-rate imagery. |
| NASA SMAP L4 Surface Soil Moisture Map Layer | https://www.earthdata.nasa.gov/data/instruments/smap | Display-only modeled soil-moisture imagery. |

If the source is not listed on the official **Field Shift Resources** tab, Global Awards eligibility may require a different/additional challenge-listed NASA resource. Team owner must verify that criterion.

**Do not list Landsat, NASA ECOSTRESS, or VIIRS imagery as currently connected numerical data**. They appear as educational/future resources in the app, but are not evidenced as connected field measurements or calculations.

## B. Space Agency Partner & Other Data / tools

| Link Text | Link URL | Purpose |
|---|---|---|
| Open-Meteo Forecast API | https://open-meteo.com/en/docs | Current modeled weather and 7-day forecast; **not NASA**. |
| Open-Meteo Geocoding API | https://open-meteo.com/en/docs/geocoding-api | Place-name search for fields. |
| Open-Meteo Data License & Terms | https://open-meteo.com/en/license | Data attribution and usage conditions (CC BY 4.0; noncommercial free service limits). |
| MapLibre GL JS | https://github.com/maplibre/maplibre-gl-js | Interactive map rendering; the bundled license file is `dist/vendor/MAPLIBRE-LICENSE.txt`. |
| USDA NRCS Soil Health Principles | https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-on-cropland | Exploratory crop-family rotation rationale; **not local crop suitability validation**. |
| FFmpeg | https://ffmpeg.org/ | Used to render videos/animations in `scripts/`. |
| Node.js | https://nodejs.org/ | Development/build/server tooling. |
| Playwright | https://playwright.dev/ | Browser testing in the codebase. |
| GitHub — AgriPulse source code | https://github.com/ameer-marwan/AgriPulse | Public source repository and documented attribution. |
| Vercel | https://vercel.com/ | Web hosting infrastructure. |
| ChatGPT — AI-assisted code and documentation | https://chatgpt.com/ | Confirmed assistance with crop-rotation code/tests, documentation and submission-review text; **list other AI tools if used**. |
| AgriPulse — Full Credits and Media Rights Status | https://github.com/ameer-marwan/AgriPulse/blob/main/CREDITS-AND-SOURCES.md | Detailed credits, permissions still needed, and SI use. |
| AgriPulse — Media Assets Rights Register | https://github.com/ameer-marwan/AgriPulse/blob/main/audit/ASSET-PROVENANCE-REGISTER.csv | File-level media inventory; **not a certificate of clearance**. |

**Also include every third-party image/footage source with real creator/license once confirmed.** An unknown source must remain flagged as unresolved, not labeled as free or team-owned. NASA may ask for proof of permission.

## C. Candidate NASA photo credit, if confirmed by author

- **Link Text**: NASA Apollo 17 Blue Marble — NASA Johnson Space Center
- **Link URL**: https://science.nasa.gov/resource/the-blue-marble/
- **Asset under review**: `dist/assets/intro-earth.jpg`; appears visually related to AS17-148-22727, but original binary source/transform must be verified.

## D. Truthful SI-use selection

**Confirmed for ChatGPT work on this repo:** Coding, Debugging, or Troubleshooting; Writing, Editing, or Translation; technical research/review where actual. **Other categories require team confirmation**. Do not mark “Building SI/ML Into the Project” solely because the UI mentions “AI”; audited code does not show a working production model initialization. If the team used SI for visual/audio generation, select those purposes and apply NASA's visible watermark and disclosure requirements.

## E. Final submission action

After editing Project Details or reference links, **save** and check the **latest submitted** confirmation on the logged-in NASA Team Project page. Code changes on GitHub **do not** update NASA submission fields.

Space Apps submit dates: https://www.spaceappschallenge.org/2026/

**Status: source list ready for owner review; media clearance and actual Team Submission update NOT verified.**