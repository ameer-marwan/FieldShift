# NASA Space Apps Challenge 2026 — AgriPulse submission checklist

**Status: working checklist, not proof of eligibility or submission.** Reviewed against the public repository on **14 November 2026**. Team members must confirm items requiring access to NASA Space Apps or the deployed browser app.

## Submission identity

- **Project:** AgriPulse — From Space to Soil
- **Intended challenge:** [Field Shift: Adapting Farms with NASA Data](https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/)
- **Intended local event:** Riyadh, Saudi Arabia — **team registration must be verified by the team**
- **Public source:** https://github.com/ameer-marwan/AgriPulse
- **Public demo candidate:** https://agripulse-1.vercel.app/
- **Submission page:** Team page → Project tab → Edit → complete the form and submit. **Not yet independently confirmed.**
- **Official global submission deadline:** **15 November 2026, 11:59 p.m.** in the Team Owner/local-event time zone. Follow any earlier local judging requirements.

## Evidence of functionality in this codebase (not a live-site certification)

| Capability | Evidence | Limitation |
|---|---|---|
| NASA POWER daily history | `dist/data.js`: `fetchWeather`, `fetchNasa` call `power.larc.nasa.gov` | Historical regional/grid values, **not live field sensors or future forecasts**. |
| NASA GIBS raster maps | `dist/geo.js` references Blue Marble, SRTM, MODIS NDVI, GPM/IMERG and SMAP map layers | **Visual map tiles only**; SMAP/IMERG/NDVI pixels are not sampled for agronomic calculations. |
| Current modeled weather | `dist/data.js`: `fetchLiveWeather` calls Open-Meteo | Not NASA forecasts and not local sensor observations. |
| Field outline and area | `dist/geo.js` | Geometric area only, not a remotely measured soil property. |
| Soil and farm context | Farmer-entered data in application workspace | Requires actual user evidence and provenance. |
| Farm economics | `calculateEconomics` in `dist/data.js` | Scenario estimates use user-entered prices, costs and yields. |
| Crop rotations | `recommendRotations` in `dist/data.js` | **Not an implemented validated rotation recommendation system**: suggested sequences are empty pending evidence. |

Do **not** describe proposed water savings, automated irrigation prescriptions, crop-yield forecasts, or field-level soil-moisture readings as measured or working outcomes without implementation and validation.

## Before judges see the project

- [ ] Confirm every participant has registered for Space Apps **2026** and joined the **Riyadh** Local Event.
- [ ] Confirm the team page lists the correct members and **Field Shift: Adapting Farms with NASA Data**.
- [ ] Confirm eligibility with the organizers regarding earlier project-specific development: **the repository contains work committed before 14 November 2026 at 09:00 Riyadh time**. Preserve history and disclose prior work; do not rewrite dates or imply all work was completed during the hackathon.
- [ ] Confirm public Vercel URL loads **without login** using a different device, browser or incognito session. Check phone and desktop.
- [ ] Select a known location (e.g. Riyadh) in the deployed app and verify live NASA POWER API requests, data dates, labels, and failure messages in browser Network/Console.
- [ ] Turn on each NASA GIBS map layer and verify imagery actually loads; distinguish image visualization from measurements.
- [ ] Test simple and complex flows, enter a soil sample, calculate a scenario, export and open a report.
- [ ] Capture a **real screenshot and a short backup video** of the deployed app for the demo.
- [ ] Update the **seven-slide English presentation** to show only implemented capabilities and candid limitations. The older 8-page presentation in `media/` is not automatically the required 7-slide deck.
- [ ] Review [CREDITS-AND-SOURCES.md](CREDITS-AND-SOURCES.md), obtain authorization/licenses for all reused images, video, code and text, and add the appropriate project source license **only after the rights holders approve**.
- [ ] Inventory and accurately disclose **all AI tools used** and the actual purposes (coding, design, image generation, writing, translation, testing, etc.). Do not report tool usage that did not occur, or omit tools that did.
- [ ] Complete all NASA Team Submission fields and references, upload the final presentation, and **confirm the submitted state** (save screenshot/confirmation).
- [ ] Verify the organizer's Discord room, local pitch time and any additional local submission requirements.

## Timing and earlier work — material eligibility question

The NASA GO Team guidance says **challenge-specific work must not start before Saturday 14 November 2026, 09:00 local time**. Prior unrelated code can be reused only under the conditions of proper attribution and appropriate licensing, but previous work developed **specifically for the 2026 challenge** can raise eligibility concerns. Republishing identical work in a fresh repository does not change its provenance.

- Guidance: https://github.com/nasa/spaceapps/discussions/1827
- Prior-work clarification: https://github.com/nasa/spaceapps/discussions/1924
- Official submission timing: https://www.spaceappschallenge.org/2026/
- Rules: https://www.spaceappschallenge.org/legal/

**Ask the Riyadh Local Lead or NASA GO Team to confirm your actual situation and retain their response.** If needed, email info@spaceappschallenge.org.

## Clarification request for organizers — customize only with truthful facts

> Our team intends to submit AgriPulse to Field Shift at the Riyadh 2026 event. A related codebase/project was developed before the official 14 November start time. Could you please confirm what, if anything, can be reused as documented prior work, and whether a new challenge-specific solution created during the official hackathon is required for eligibility? We will preserve all original dates, authorship and citations and follow your written guidance.

This document is **not** a representation that registration, eligibility, live app verification, or final submission has already been completed.
