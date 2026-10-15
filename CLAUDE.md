# Albatross website: rules for anyone editing it

## Keep it topline

- The site is the home page plus five category pages: Plan, People, Money, Deliver and Tasks. **No subpages.** Do not add a page for a feature.
- On a category page, each function gets its **name and one headline**. That is all. No paragraphs, no bullet lists, no per-function screenshots, no "connected" or "how it works" sections.
- One hero screenshot per category page (`img/<section>-hero.png`). Nothing else needs an image.
- New functionality in the app means one new row on the right category page, plus a card in the "What's new" strip on the home page if it is worth shouting about. Keep that strip to about eight cards.
- If something feels like it needs a page of its own, it does not. Write a better headline instead.

## Adding a function

Copy an existing row in the category page's `<section class="fns">` and change the `id`, the number, the name and the headline. Number rows in order. Experimental features get `<span class="expb">Experimental</span>` after the name. The home "What's new" cards live in `index.html` (`class="ncard"`) and link to a row with `page.html#id`.

## Voice and style

- Simple, direct, no-nonsense. Tagline: "No-nonsense production management."
- Separate things with `|`. Never dots, bullets or middots. No em dashes.
- Only claim what the app does. Source of truth is the Albatross repo (`mysterygift/albatross`, `dev` branch): `GUIDEBOOK/`, `RELEASE_NOTES.md` and the code. Features flagged `experimental` in the app's navigation must be labelled Experimental here.
- Look: the Yuzu theme inverted (ink ground, lime `#d4ff3a`, lilac `#b9a6ff`, hairlines, square corners, bold tight headings, scroll animations).

## Publishing

GitHub Pages serves `main`. Changes are expected to go live: open a pull request into `main` and merge it, then check the Pages deployment finished.

Old deep-page URLs (for example `budget.html`, `floor-plans.html`) are tiny redirect stubs to the category page. Leave them so shared links keep working.
