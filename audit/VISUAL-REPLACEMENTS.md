# AgriPulse — Visual media replacement and rights ledger
**2026 NASA Space Apps · update 14 November 2026**

## Current deployed-source visuals (code-verified, not live-site verified)

16 **original SVG conceptual illustrations** were authored as new AI-assisted vector code. Every SVG contains a visible **“SI-GENERATED VISUAL · ILLUSTRATION”** watermark and an accessibility description explicitly saying it is not observational imagery. The images contain **no NASA insignia, logotype or mission patches**.

These drawings are **not** NASA Earth-observation data; real NASA POWER and GIBS data continue to come from their API/map services independently.

| New illustrated SVG assets | Role |
|---|---|
| `dist/assets/explore-{china,ksa,netherlands,kenya,brazil}.svg` | Five global agriculture illustrations (not actual country farm photos) |
| `dist/assets/field-landscape.svg` | Field context background |
| `dist/assets/intro-farmland.svg`, `intro-plant.svg`, `intro-soil.svg`, `intro-space.svg` | Onboarding/plant and soil illustrations |
| `dist/assets/earth-texture.svg` | Stylized Earth globe, not an actual NASA planet photograph |
| `dist/assets/forest.svg`, `sea.svg`, `sky-clear.svg`, `sky-clouds.svg`, `sky-storm.svg` | Background/meteorological illustrations, not actual current sky observations |

## Removed from current distribution (27 tracked files)

The prior images of unknown rights, NASA-insignia promo thumbnail, legacy pitch PDF, unverified MP4/GIF animations/videos and stale 19 MB portable HTML build have been **deleted from the branch tree**. They remain in the repository's historical commits, preserving the honest provenance trail.

The original [baseline asset register](ASSET-PROVENANCE-REGISTER.csv) remains as evidence of **what was present at the start of the audit**; consult its `current_status` column for the current tree.

The old `media/AgriPulse_Space_to_Soil.pdf` was an **eight-page conceptual raster deck**, not an accurate final seven-slide judging presentation. The uploaded NASA presentation and the live app should be verified separately.

## Outstanding identifiers not replaced automatically

- `dist/assets/logo-new.png` (AgriPulse team emblem) and `dist/assets/logo.svg`: team authorship/tool/rights unknown. Permission and any SI-generation status **must still be established**, or these identity assets should be replaced.
- `dist/assets/dunia-alajial-logo.jpg`: permission to publish the school emblem **not independently verified**. School representative must confirm use.
- The **official Space Apps template logos in a provided pitch template** may have separate organizer-provided rules; do not embed NASA logos in new SI-generated illustrations.

**IMPORTANT:** We did not falsely label unknown existing logos “human-created” or “fully licensed.” They are separately flagged for a decision. New code-generated SVG scenes are explicitly disclosed and watermarked.

## Public-facing integration

- Modular website JS/CSS now load the SVG art in place of the old JPG/WEBP.
- `scripts/package-final.mjs` embeds the exact same SVG artwork into its single-file HTML build.
- `tests/media-compliance.test.mjs` verifies watermark text and rejects runtime references to the older photos/old promotional pitch.
- Header and footers continue to cite NASA POWER, NASA GIBS and Open-Meteo and link to the detailed source disclosure.

## NASA rules

- Official 2026 SI policy: https://github.com/nasa/spaceapps/discussions/1849
- NASA brand guidance: https://www.nasa.gov/nasa-brand-center/brand-guidelines/

**Status:** old high-risk visual media removed from current tree, all *new* illustrated scenes watermarked, original logos and third-party identity rights still open. Do not describe the entire submission as fully cleared until the remaining evidence is confirmed.
