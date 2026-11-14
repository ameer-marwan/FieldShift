# Space Apps 2026 — media rights and submission evidence review
**Dunia Al-Ajial Devs / AgriPulse • 14 November 2026**

## Outcome: NOT fully cleared

The code/source-data documentation is substantially stronger, but the media copyright chain and NASA SI watermark compliance **cannot be certified** solely by examining GitHub assets. The team must confirm provenance and complete the actions below.

## Evidence actually reviewed

| Checked | Result | Severity |
|---|---|---|
| GitHub recursive tree | 29 image/video/PDF/SVG media entries under `dist/assets/` and `media/`; exact blob SHA and bytes in [CSV register](ASSET-PROVENANCE-REGISTER.csv). | Completed inventory |
| Representative images | Inspected `intro-earth.jpg`, `intro-plant.jpg`, `intro-farmland.jpg`, `field-landscape.jpg`, all five `explore-*.webp`, AgriPulse logo and the promotional video thumbnail. Images alone cannot reliably establish AI origin or source license. | Unresolved copyright |
| Intro thumbnail | `media/agripulse-introduction-thumbnail.jpeg` contains visible **NASA badge/insignia** inside an illustrated composite. No proof of source or AI provenance. | **High** |
| Old concept PDF | `media/AgriPulse_Space_to_Soil.pdf` was matched to a supplied 12 MB document; **8 rasterized pages** with no selectable text. Page 6 portrays automated irrigation alerts / NDVI & moisture ingestion; page 7 describes 30–40% less irrigation as an aspiration (not tested). Content does not match current verified calculations. Same binary also at `dist/assets/agripulse-space-to-soil.pdf`. | **High** |
| `intro-earth.jpg` | Looks like NASA Apollo 17 **AS17-148-22727** (Blue Marble); official source link recorded. Exact image origin, derivative editing and attribution still need author verification. | Medium |
| Video derivation | `scripts/render-intro.mjs` uses FFmpeg and `intro-earth.jpg`/`intro-plant.jpg`; `scripts/render-plant-growth.mjs` creates GIF/MP4. Dependency rights carry through derived files. | Medium |
| `media/agripulse-introduction.mp4` and `media/how-nasa-data-solves-farming.mp4` | Frame-by-frame content, soundtrack licensing, AI-generation methods and presence of NASA insignia **not inspected/verified**. | **High** |
| NASA and Open-Meteo connections | Real provider code in `dist/data.js`, GIBS map tiles in `dist/geo.js`. Map imagery is visualization, not numeric soil/irrigation data. | Documented (not live-site certified) |
| MapLibre | Existing BSD-style license and third-party notices in `dist/vendor/MAPLIBRE-LICENSE.txt`. | Documented |
| ChatGPT code assistance | Confirmed 14 Nov modifications to rotation explorer and related tests/docs. | Disclosed in docs |

## Next human-led clearance steps in urgency order

1. **Stop promoting the eight-page concept deck as the final submitted slide deck.** Verify the actual uploaded seven-slide presentation and replace unsupported claims about alerts, pixel-derived NDVI/soil moisture, and measured savings.
2. **Inspect promotional thumbnail provenance.** Ask the author whether SI was involved. If SI-created, remove NASA insignia **from the source design** and replace the asset; attribution alone is insufficient. Check the 2 introduction/concept videos for similar problems.
3. List **all SI-made visual/audio assets** and generation tools. Permanently show **“SI-generated visual”** or equivalent conspicuous watermark **within each confirmed SI image or video**, not just in a hidden Markdown doc. Audio and AI-authored code/data need descriptive and metadata disclosures.
4. Ask whoever sourced each `explore-*.webp`, `intro-*.jpg`, background image, logo and video for original URL/files, author, license or written permission, AI tool name and generation method, and whether recognizable people (especially minors) appear. Record links/permission evidence in [the CSV](ASSET-PROVENANCE-REGISTER.csv). **Do not infer AI creation from appearance**.
5. Credit the candidate Apollo 17 image to **NASA Johnson Space Center** if source is verified: https://science.nasa.gov/resource/the-blue-marble/ . NASA content does not confer rights to its protected insignia.
6. Record full license for reused library code and rights to original application code. Do not randomly assign a license where third-party copyright may exist.
7. Verify public website in private/incognito browser and confirm the *deployed* source revision; test real NASA POWER response, GIBS tiles and Open-Meteo requests.
8. Re-check the NASA Team Submission after changing copy/files; confirm the latest submitted state, **not** just “Save Progress”. The current code repository cannot inspect the logged-in NASA account state.
9. Confirm earlier project-specific development before Nov 14 with local host/GO Team. **Do not hide previous work** by renaming/re-uploading the repo.

### Copy into the rights register once author verified

For each asset set **origin_kind** = team-made / NASA original / third-party licensed / SI-created / SI-assisted / unknown; **creator/source_url**; **license_text/permission_url**; **tool & prompt metadata if SI**; **watermark evidence**; **where used**; **reviewer and date**. Keep the original asset immutable and reference by Git blob SHA.

### Current submitted file versus repository media

The uploaded NASA Space Apps **presentation** may not be identical to the old `media/AgriPulse_Space_to_Soil.pdf`. We did not access the team's private submission file attachment directly; therefore we cannot certify which PDF NASA received.

## Official references

- NASA GO Team 2026 data and third-party source rules: https://github.com/nasa/spaceapps/discussions/1827
- NASA GO Team 2026 SI watermark and branding rules: https://github.com/nasa/spaceapps/discussions/1849
- NASA imagery/media: https://www.nasa.gov/nasa-brand-center/images-and-media/
- NASA branding: https://www.nasa.gov/nasa-brand-center/brand-guidelines/

**Final status: evidence compiled; rights/visual SI compliance remains OPEN.**