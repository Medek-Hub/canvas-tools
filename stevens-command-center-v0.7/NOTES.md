# Steven's Instructor Command Center v0.7 Notes

## Fixed / rebuilt

- Rebuilt the prototype into an organized static package:
  - `index.html`
  - `assets/css/styles.css`
  - `assets/js/app.js`
- Moved the visual direction much closer to the dashboard reference:
  - dark navy left sidebar
  - clean white workspace
  - clinical blue/teal accents
  - separate center activity card and handout/activity card
  - right dashboard column with Room Energy, Upcoming Agenda, Quick Pivot, Printable Materials, and Encouragement
- Preserved the A/B rotation:
  - Group A = Monday/Tuesday
  - Group B = Wednesday/Thursday
  - Day 1 and Day 2 repeat the same lesson flow for both groups
- Preserved the required tabs:
  - Instructor View
  - Student View
  - Print & Prep
  - Games
  - Pivot Menu
  - Resources
  - Debrief
- Improved worksheet previews so they look like actual printable course assignments with:
  - paper-style headers
  - name/date/squad fields
  - clinical reasoning boxes
  - compact tables
  - lined writing areas
- Rebuilt the games tab into an ADME-style classroom mode:
  - colorful arcade surface
  - large touch targets
  - stage progression
  - squad score
  - boss health
  - retro WebAudio sounds
  - JSON metrics payload download
- Added interactive Room Energy behavior:
  - green, yellow, and red state buttons
  - gauge needle movement
  - state-specific help prompt
  - red-state pivot help action
- Improved responsive behavior for laptop, classroom display, and large fullscreen widths.

## Verification performed

- `node --check assets/js/app.js` passed.
- Browser checked at 1536x960 and 1920x1080 dashboard-style viewports.
- Browser checked at 1366x768 laptop viewport.
- Confirmed no horizontal overflow in instructor, student, games, and print-prep views.
- Confirmed Group B changes day labels to Wed/Thu and Day 2 loads the second-day flow.
- Confirmed the game stage answer loop updates score, locks choices, and creates a metrics row.
- Confirmed Room Energy yellow/red selections change status and help text.

## Still needs improvement

- Course content was intentionally not rewritten yet; v0.7 focuses on visual fidelity, stability, and UX.
- The in-app browser does not support file downloads, so the metrics JSON save dialog should be verified in a normal browser.
- The right dashboard column can still scroll on shorter screens because it keeps all required widgets visible and intact.
- Future versions should connect real printable PDFs or source-of-truth course documents if those exist outside this prototype.
