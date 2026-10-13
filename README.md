# mysterygift.github.io

The Albatross website. Plain static HTML, CSS and JS served by GitHub Pages. No build step.

## Structure

| Path | What it is |
|------|------------|
| `index.html` | Home |
| `plan.html` `people.html` `money.html` `deliver.html` `tasks.html` | One page per section of the app |
| `script.html` `script-breakdown.html` `script-supervisor.html` `shot-lists.html` `floor-plans.html` `risk-assessments.html` | Deeper pages under Plan, linked from the Plan page |
| `cast-and-crew.html` `release-forms.html` | Deeper pages under People, linked from the People page |
| `budget.html` | Budget in depth, linked from the Money page |
| `day-pack.html` | Send Day Pack, linked from the Deliver page |
| `assets/site.css` `assets/site.js` | Shared styles and scroll animations |
| `img/` | Screenshots (see below) |
| `mockups/` | The two design mockups (A Paper, B Ink). Kept for reference, not linked from the site |
| `schedule.html` `crew-tracker.html` | Redirects to the Plan and Cast and Crew pages |

Pages marked Experimental on the site (Floor Plans, Script Supervisor, Send Day Pack, and Overtime on the People page) are experimental in the app too. They are hidden there until you tick Show experimental features in Settings, under Developer.

The look is the Albatross Yuzu theme, inverted: ink ground, acid lime `#d4ff3a`, lilac `#b9a6ff`, hairline borders, square corners, bold tight headings.

## Adding screenshots

Every screenshot slot looks for a PNG in `img/`. If the file exists it is shown. If not, a placeholder is shown. No code changes needed: drop the file in with the right name.

Names are `<section>-hero.png` for the big shot at the top of a page and the home page, and `<section>-<feature>.png` for each feature.

| Section | Files |
|---------|-------|
| Plan | `plan-hero` `plan-script-import` `plan-script-breakdown` `plan-shot-lists` `plan-stripboard` `plan-calendar` `plan-floor-plans` `plan-locations` `plan-equipment` `plan-risk-assessments` `plan-script-supervisor` |
| People | `people-hero` `people-cast-manager` `people-crew-manager` `people-bookings` `people-booking-gaps` `people-day-out-of-days` `people-person` `people-release-forms` `people-overtime` |
| Money | `money-hero` `money-budget` `money-log-spend` `money-cost-report` `money-revisions` `money-vendors` `money-receipts` `money-floats` |
| Deliver | `deliver-hero` `deliver-call-sheets` `deliver-logo` `deliver-distribution` `deliver-movement-orders` `deliver-day-pack` `deliver-documents` `deliver-deliverables` `deliver-wrap` |
| Tasks | `tasks-hero` `tasks-task-list` `tasks-filters` `tasks-templates` `tasks-reminders` `tasks-departments` `tasks-dashboard` |
| Risk Assessments | `risk-assessments-hero` `risk-assessments-list` `risk-assessments-hazards` `risk-assessments-matrix` `risk-assessments-floor-plans` `risk-assessments-contacts` `risk-assessments-sign-off` `risk-assessments-pdf` `risk-assessments-call-sheet-check` |
| Script | `script-hero` `script-import` `script-locations` `script-sections` `script-coverage` `script-link-shots` `script-revisions` `script-shoot-day` `script-sides` |
| Script Breakdown | `script-breakdown-hero` `script-breakdown-tag` `script-breakdown-suggest` `script-breakdown-sheet` `script-breakdown-elements` `script-breakdown-sourcing` `script-breakdown-lists` `script-breakdown-drafts` |
| Script Supervisor | `script-supervisor-hero` `script-supervisor-slating` `script-supervisor-takes` `script-supervisor-tramlines` `script-supervisor-notes` `script-supervisor-progress` `script-supervisor-dpr` `script-supervisor-exports` `script-supervisor-drafts` |
| Shot Lists | `shot-lists-hero` `shot-lists-scenes` `shot-lists-table` `shot-lists-manage` `shot-lists-cast` `shot-lists-estimates` `shot-lists-sections` `shot-lists-storyboard` `shot-lists-export` |
| Floor Plans | `floor-plans-hero` `floor-plans-draw` `floor-plans-setups` `floor-plans-library` `floor-plans-colour` `floor-plans-power` `floor-plans-truss` `floor-plans-dmx` `floor-plans-kit` `floor-plans-sun` `floor-plans-safety` `floor-plans-pdf` |
| Release Forms | `release-forms-hero` `release-forms-forms` `release-forms-sign` `release-forms-under-18` `release-forms-filed` `release-forms-terms` |
| Send Day Pack | `day-pack-hero` `day-pack-documents` `day-pack-recipients` `day-pack-email` `day-pack-drafts` `day-pack-watermark` |
| Cast and Crew | `cast-and-crew-hero` `cast-and-crew-cast-manager` `cast-and-crew-cast-details` `cast-and-crew-unavailable` `cast-and-crew-crew-manager` `cast-and-crew-setup` `cast-and-crew-structure` `cast-and-crew-connected` |
| Budget | `budget-hero` `budget-templates` `budget-apply-template` `budget-accounts` `budget-reports` `budget-derived` `budget-revisions` `budget-vendors` `budget-match` `budget-tax` |

Capture the app in the Yuzu theme (Settings, Appearance). Turn on Show experimental features (Settings, Developer) for the Floor Plans, Script Supervisor, Overtime and Send Day Pack shots. A window around 1600 px wide at 2x works well. Add `.png` files only, lowercase, as named above.

## Style rules

Use `|` as a separator. No dots, no bullets.
