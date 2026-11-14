# AgriPulse — verified sources, rights register and SI disclosure
**NASA Space Apps Challenge 2026 • Evidence audit: 14 November 2026**

> **Status: PARTIALLY REMEDIATED — 16 original SI-watermarked illustrations have replaced uncertain media. Three retained identity-logo assets still require provenance/permission checks, and NASA submission attachment status must be verified.**
> This file records what can be checked against the public repository, and separately flags facts that require the creators' proof. It is not legal advice, a project eligibility ruling, a certification of live deployment, or evidence that NASA has approved the project.

See the complete **29-file** [asset-by-asset inventory](audit/ASSET-PROVENANCE-REGISTER.csv) (each path, size and Git blob SHA) and [review checklist](audit/MEDIA-AND-SUBMISSION-REVIEW.md).

## 0. Current media remediation

**After the 14 November compliance branch:** We replaced all unverified farm and weather photos in the running website with [16 new, visibly SI-watermarked SVG conceptual illustrations](audit/VISUAL-REPLACEMENTS.md), and removed 26 uncertain-origin photos/videos/PDF files from the current HEAD. The outdated 8-page concept deck and thumbnail with NASA insignia are no longer promoted or distributed from the latest tree. Historical versions remain in prior commits to preserve the provenance record.

**Still open:** team ownership and SI origin of `dist/assets/logo-new.png`/`logo.svg`, permission for the Dunia Al-Ajial school emblem, actual final judging deck uploaded to NASA, and the live Vercel deployment revision. Do not claim these have been independently certified.

## 1. Real data integrations, as observed in source code

| External resource | Verified code integration | What it is and is not | Reference / terms |
|---|---|---|---|
| **NASA POWER Daily API** | `dist/data.js` calls `https://power.larc.nasa.gov/api/temporal/daily/point` for recent and preceding-year records. | Historical **regional-grid** temperature, rainfall, humidity, wind and solar context. Not in-situ soil measurement or live forecast. | https://power.larc.nasa.gov/ |
| **NASA GIBS** | `dist/geo.js` configures WMTS raster tile URLs for Blue Marble, MODIS Terra NDVI, GPM/IMERG, SMAP L4 and SRTM. | **Map imagery only.** The app does not sample SMAP/IMERG/NDVI values into irrigation or crop-suitability calculations. | https://gibs.earthdata.nasa.gov/ |
| **Open-Meteo Forecast API** | `dist/data.js` calls `api.open-meteo.com/v1/forecast`. | Modeled present conditions and short-range forecast, **not NASA data** and not measured at the farm. | https://open-meteo.com/en/docs • https://open-meteo.com/en/terms |
| **Open-Meteo Geocoding** | `dist/data.js` calls `geocoding-api.open-meteo.com/v1/search`. | Search-by-place coordinate service. | https://open-meteo.com/en/docs/geocoding-api |
| **USDA NRCS soil health principles** | `dist/data.js` cites the principles for an illustrative crop-family rotation explorer. | Research basis **only**; these references do not validate crop choices at the selected farm. | https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-on-cropland |

**Accuracy:** Historical NASA rainfall can inform a comparison narrative; it does **not** validate seasonal crop suitability, irrigation timing, water savings or profit prediction. Local suitability and irrigation requirements remain unverified.

### NASA layers actually configured in `dist/geo.js`

- **Blue Marble shaded relief** — GIBS basemap, illustrative visualization.
- **SRTM Color Index** — GIBS terrain imagery, **not** a numeric slope calculation.
- **MODIS Terra NDVI 8-Day** — visual vegetation index layer, **not** sampled NDVI statistics.
- **IMERG Precipitation Rate** — visual rainfall-rate tiles, **not** a field rain gauge.
- **SMAP L4 Analyzed Surface Soil Moisture** — visual modeled soil-moisture layer, **not** a field soil sensor.

All GIBS imagery requests depend on availability of the provider tiles; the presence of URL strings alone does not certify a successful current tile response.

### Research links, not connected numerical inputs

Landsat (https://landsat.gsfc.nasa.gov/data/), ECOSTRESS (https://ecostress.jpl.nasa.gov/), FAO GAEZ (https://gaez.fao.org/), USDA Web Soil Survey, Sentinel-2, USGS and other links displayed in the app/README are **research/reference material** unless the code actually connects them. Do not put them under the submission form's “used NASA data” without explaining that they were only consulted.

**Global Awards condition:** Check that at least one NASA source used above appears on the **Field Shift challenge's official Resources tab**. The NASA GO Team guidance says one of the challenge-listed NASA resources is required; simply using an unrelated NASA URL may not satisfy this.

## 2. Third-party software and licenses

| Material | Evidence | Rights/attribution status |
|---|---|---|
| **MapLibre GL JS** | `dist/vendor/maplibre-gl.js`, `dist/vendor/maplibre-gl.css`, full `dist/vendor/MAPLIBRE-LICENSE.txt` | License notice **present** (BSD-style and bundled notices). Preserve notices in redistributions; credit MapLibre. https://github.com/maplibre/maplibre-gl-js |
| **Open-Meteo data** | Forecast and geocoding API calls in `dist/data.js` | **CC BY 4.0 attribution required**. Free API subject to non-commercial-use and usage limits. https://open-meteo.com/en/license and https://open-meteo.com/en/terms. Commercial deployment needs a separate appropriate arrangement. |
| **FFmpeg** | `scripts/render-intro.mjs`, `scripts/render-plant-growth.mjs` | Used to render derivative animations; identify actual FFmpeg build/codec and license obligations if redistributing binaries. https://ffmpeg.org/legal.html |
| **Node.js / Playwright** | `package.json`, `scripts/`, `tests/` | Used for development/build/testing. License/compliance review of dependencies and releases still required. https://nodejs.org/ and https://playwright.dev/ |
| **Vercel hosting / hosted worker** | `vercel.json` links the public Vercel site and external API rewrite | Hosting is a service; verify live deployed revision, worker availability and third-party hosting policies. |
| **Original application code** | `dist/`, `worker/`, `scripts/` | **Ownership of pre-existing contributions and a repository-wide license have NOT been established.** Do not add a blanket LICENSE without author approval and compatibility assessment. |

## 3. Photos, logos, illustrations, animations and PDFs

The **baseline inventory contained 29 media assets** (see [CSV](audit/ASSET-PROVENANCE-REGISTER.csv)). In the current tree, **26 of those older assets have been removed** and replaced in runtime by **16 original SVG illustrations** with visible SI-generated watermarks. Three retained team/school logo assets still need rights and origin confirmation. [The full inventory](audit/ASSET-PROVENANCE-REGISTER.csv) contains each file's immutable Git blob SHA. In most cases there is **no source URL, author, generation-tool record or license grant in the repository**. Do not describe these as “cleared” or “AI-generated” solely from their appearance.

**Specific findings (historical, prior to 14 November replacement commit):**

1. `dist/assets/intro-earth.jpg` visually resembles the Apollo 17 **Blue Marble** photograph AS17-148-22727. Candidate official original and credit: https://science.nasa.gov/resource/the-blue-marble/ — **NASA Johnson Space Center**. The exact binary lineage/edition must still be verified.
2. `media/agripulse-introduction-thumbnail.jpeg` **visibly contains a NASA insignia embedded in composite artwork**. The designer and generation method are **unknown**. NASA GO Team specifically prohibits NASA branding in SI-generated content. If created with SI, replace the NASA badge with a non-NASA graphic in a new asset. Do not assume crediting it makes it permissible.
3. `media/AgriPulse_Space_to_Soil.pdf` and `dist/assets/agripulse-space-to-soil.pdf` are byte-identical in Git (same blob SHA) and contain **eight fully rasterized slides**. Visual review of the matching submitted source PDF found statements about automated irrigation alerts, NDVI/moisture ingestion, and a **30–40% water-saving target**. These are **not demonstrated by the reviewed source code**. Do not represent that PDF as the final, accurate seven-slide submission deck; revise or stop advertising it.
4. `dist/assets/intro-zoom.mp4` and `intro-zoom-mobile.mp4` are programmatically rendered from `intro-earth.jpg` and `intro-plant.jpg` by `scripts/render-intro.mjs`. Rendering in FFmpeg does **not** establish copyright or AI provenance of those inputs.
5. `dist/assets/agripulse-plant-growth.gif` and `agripulse-plant-growth.mp4` are renderer products from `scripts/render-plant-growth.mjs`; source imagery rights/AI origin remain unknown.
6. Five `explore-*.webp` visual country scenes, background photos, the school logo, the AgriPulse logo, presentation art, and the two videos under `media/` require an author-provided source/permission and AI-origin record.

**NASA media and brand conditions:** NASA factual media may be usable for education subject to correct source credit, but the NASA insignia/logo is protected and NASA sponsorship must not be implied. Official guidance: https://www.nasa.gov/nasa-brand-center/images-and-media/ and https://www.nasa.gov/nasa-brand-center/brand-guidelines/.

## 4. SI/AI assistance — what is CONFIRMED and what is UNKNOWN

NASA GO Team's 2026 submission guidance: https://github.com/nasa/spaceapps/discussions/1849

- **Confirmed:** OpenAI ChatGPT helped draft/modify the crop-rotation code in `dist/data.js`, its UI integration in `dist/app.js`, test cases in `tests/data.test.mjs`, and the repository's documentation and submission-review drafts **on 14 November 2026**. Humans must still inspect/scientifically validate that work. GitHub Actions validated syntax, automated tests and the build for PR #5.
- **Unknown until team confirms:** Every other coding assistant, text generator, slide generator, image/video generator, or research tool used previously by the students; exact inputs and dates; whether any of the visual assets or audio were SI-generated; any model used within the live website. Do not invent names or usage details.
- **Website model limitation:** Source includes rule-based assistant replies and a Gemma model identifier, but the audited `dist/app.js` does **not** prove functional on-device model initialization. Do not select “Building SI/ML into project” solely because the UI includes an AI label.

**NASA SI requirements:** SI-created images/video require a **visible SI-generated watermark**; SI-created audio requires disclosure in descriptive text and metadata; SI-assisted code/data requires disclosure in descriptions and metadata. NASA branding must not appear inside generated visuals. These requirements cannot be satisfied by checking a box alone. The image/video origin and watermarks in this repository **are not verified**.

### Accurate disclosure draft for submission (team must validate every clause)

> We used OpenAI ChatGPT to assist with documentation, code review, debugging and the development of an exploratory crop-rotation interface and associated tests during the hackathon. The results were checked using repository tests and a successful build. NASA POWER data are retrieved from a genuine scientific API, and NASA GIBS layers are map imagery only. We do not claim validated crop yields, irrigation savings or field-level soil-moisture measurements. The team will separately list any other AI tools used and attribute all SI-generated visual/audio assets.

If other AI tools were used, **add them before pasting**. Do not imply the authors are NASA employees or the project is endorsed by NASA.

## 5. Further required actions (NOT COMPLETE)

- [ ] Owner provides origin/rights/tool info for all media listed in the CSV.
- [ ] Review every video frame and PDF page for AI-produced elements, NASA branding, identifiable minors and inaccurate claims.
- [ ] Watermark **confirmed** SI-generated images/video visibly and attach metadata/disclosure; replace SI visuals containing NASA trademarks.
- [ ] Record school logo usage permission and license/source for all non-team images/graphics.
- [ ] Publish only accurate presentation/demo media and update old links.
- [ ] Confirm external API licenses and required attribution in production site and final submission.
- [ ] Confirm what code predates the hackathon and obtain organizer guidance about competition eligibility; preserve revision history.
- [ ] Owner confirms all source URLs and whether the latest NASA Team Submission remains “Project Submitted for Judging”.

## 6. References for the current audit

- NASA 2026 GO Team — sources, timing, permissions: https://github.com/nasa/spaceapps/discussions/1827
- NASA 2026 GO Team — SI transparency: https://github.com/nasa/spaceapps/discussions/1849
- NASA media guidelines: https://www.nasa.gov/nasa-brand-center/images-and-media/
- NASA insignia/brand guidelines: https://www.nasa.gov/nasa-brand-center/brand-guidelines/
- Open-Meteo license/terms: https://open-meteo.com/en/license • https://open-meteo.com/en/terms
- Original NASA Blue Marble media: https://science.nasa.gov/resource/the-blue-marble/
- Challenge: https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/

**Audit conclusion: incomplete provenance; do not label this project “fully licensed / fully SI-compliant” until the open actions are resolved.**
