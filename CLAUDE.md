# Albatross website: rules for anyone editing it

## Keep it topline

- The site is the home page, six category pages (Plan, People, Money, On Set, Post and Tasks) and the Blog (`blog.html`). The pages follow the app's sidebar sections: On Set and Post are the app's On Set and Post (Deliver was renamed Post), and Tasks also holds the Dashboard and Documents, which sit at the top of the sidebar. When the app moves a feature between sections, move its row to match. **No subpages.** Do not add a page for a feature. Longer writing about a feature goes in a blog post, not a page.
- On a category page, each function gets its **name and one headline**. That is all. No paragraphs, no bullet lists, no per-function screenshots, no "connected" or "how it works" sections.
- One hero screenshot per category page (`img/<section>-hero.png`). Nothing else needs an image.
- New functionality in the app means one new row on the right category page, plus a card in the "What's new" strip on the home page if it is worth shouting about. Keep that strip to about eight cards.
- If something feels like it needs a page of its own, it does not. Write a better headline instead.

## Adding a function

Copy an existing row in the category page's `<section class="fns">` and change the `id`, the number, the name and the headline. Number rows in order. Experimental features get `<span class="expb">Experimental</span>` after the name. The home "What's new" cards live in `index.html` (`class="ncard"`) and link to a row with `page.html#id`.

## Voice and style

- Simple, direct, no-nonsense. Tagline: "No-nonsense production management."
- Separate things with `|`. Never dots, bullets or middots. No em dashes.
- **Do not link to the source code, and do not say Albatross is free or open source.** No "Source" or "View source" links, no "free", "open source", "no subscription", price or "no catch" claims, here or in meta descriptions. The Download button (the GitHub releases page) is fine.
- Only claim what the app does. Source of truth is the Albatross repo (`mysterygift/albatross`, `dev` branch): `GUIDEBOOK/`, `RELEASE_NOTES.md` and the code. Features flagged `experimental` in the app's navigation must be labelled Experimental here.
- Look: the Yuzu theme inverted (ink ground, lime `#d4ff3a`, lilac `#b9a6ff`, hairlines, square corners, bold tight headings, scroll animations).

## Blog

- A post is one Markdown file in `_posts/`, named `YYYY-MM-DD-short-title.md`, with front matter `title:` and optionally `tag:` (one word, such as News, Release or Guide) and `summary:` (one line, used for link previews). GitHub Pages builds it with Jekyll on push. No other file needs changing.
- Every post renders into `blog.html`, newest first. The list on the left picks which one shows, and `blog.html#short-title` links to one. `/posts/short-title/` is a redirect stub for link previews and the RSS feed (`feed.xml`).
- Post images go in `img/blog/`. Keep the short title unique: it is the post's address.
- Posts follow the voice and claims rules below. Write `-` or rephrase rather than `--` or `---`, which turn into dashes.
- Jekyll only processes files with front matter. Do not add front matter to the other pages.

## Publishing

GitHub Pages serves `main`. Changes are expected to go live: open a pull request into `main` and merge it, then check the Pages deployment finished.

Old deep-page URLs (for example `budget.html`, `floor-plans.html`) are tiny redirect stubs to the category page. Leave them so shared links keep working.
