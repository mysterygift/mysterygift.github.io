# mysterygift.github.io

The Albatross website. Plain static HTML, CSS and JS served by GitHub Pages. No build step.

## Structure

| Path | What it is |
|------|------------|
| `index.html` | Home |
| `plan.html` `people.html` `money.html` `deliver.html` `tasks.html` | One page per section of the app |
| `assets/site.css` `assets/site.js` | Shared styles and scroll animations |
| `img/` | Screenshots (see below) |
| `mockups/` | The two design mockups (A Paper, B Ink). Kept for reference, not linked from the site |
| `budget.html` `schedule.html` `crew-tracker.html` | Redirects to the new Money, Plan and People pages |

The look is the Albatross Yuzu theme, inverted: ink ground, acid lime `#d4ff3a`, lilac `#b9a6ff`, hairline borders, square corners, bold tight headings.

## Adding screenshots

Every screenshot slot looks for a PNG in `img/`. If the file exists it is shown. If not, a placeholder is shown. No code changes needed: drop the file in with the right name.

Names are `<section>-hero.png` for the big shot at the top of a page and the home page, and `<section>-<feature>.png` for each feature.

| Section | Files |
|---------|-------|
| Plan | `plan-hero` `plan-script-import` `plan-shot-lists` `plan-stripboard` `plan-calendar` `plan-locations` `plan-equipment` |
| People | `people-hero` `people-cast-manager` `people-crew-manager` `people-bookings` `people-booking-gaps` `people-day-out-of-days` `people-person` |
| Money | `money-hero` `money-budget` `money-log-spend` `money-cost-report` `money-vendors` `money-receipts` `money-floats` |
| Deliver | `deliver-hero` `deliver-call-sheets` `deliver-distribution` `deliver-movement-orders` `deliver-documents` `deliver-deliverables` `deliver-wrap` |
| Tasks | `tasks-hero` `tasks-task-list` `tasks-filters` `tasks-templates` `tasks-reminders` `tasks-departments` `tasks-dashboard` |

Capture the app in the Yuzu theme (Settings, Appearance). A window around 1600 px wide at 2x works well. Add `.png` files only, lowercase, as named above.

## Style rules

Use `|` as a separator. No dots, no bullets.
