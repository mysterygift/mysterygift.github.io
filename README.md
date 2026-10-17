# mysterygift.github.io

The Albatross website. Plain static HTML, CSS and JS served by GitHub Pages. No build step. Read `CLAUDE.md` before changing it.

## Structure

| Path | What it is |
|------|------------|
| `index.html` | Home |
| `plan.html` `people.html` `money.html` `deliver.html` `tasks.html` | One topline page per category. Each function is a name and one headline |
| `assets/site.css` `assets/site.js` | Shared styles and scroll animations |
| `img/` | Hero screenshots (see below) |
| `mockups/` | The two design mockups (A Paper, B Ink). Kept for reference, not linked from the site |
| `script.html` `budget.html` and the other old page names | Tiny redirects to the category page, so old links keep working |

The look is the Albatross Yuzu theme, inverted: ink ground, acid lime `#d4ff3a`, lilac `#b9a6ff`, hairline borders, square corners, bold tight headings.

## Screenshots

Each category page has one hero screenshot slot, and the home page reuses them. If the PNG exists it is shown. If not, a mock of the app is shown. No code changes needed: drop the file in with the right name.

| Page | File |
|------|------|
| Plan | `img/plan-hero.png` |
| People | `img/people-hero.png` |
| Money | `img/money-hero.png` |
| Deliver | `img/deliver-hero.png` |
| Tasks | `img/tasks-hero.png` |

Capture the app in the Yuzu theme (Settings, Appearance). A window around 1600 px wide at 2x works well. PNG only, lowercase, as named above.

## Experimental features

Script Supervisor, Field Log, Send Edit Pack and Overtime are experimental in the app (Floor Plans and Send Day Pack are now stable). They are hidden there until you tick Show experimental features in Settings, under Developer. Documentary and Corporate productions show Script Supervisor, Field Log and Send Edit Pack without it. The site labels them Experimental.

## Style rules

Use `|` as a separator. No dots, no bullets.
