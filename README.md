# mysterygift.github.io

The Albatross website. Plain static HTML, CSS and JS served by GitHub Pages. No build step, except the blog: GitHub Pages builds `_posts/` into `blog.html` with Jekyll on push. Read `CLAUDE.md` before changing it.

## Structure

| Path | What it is |
|------|------------|
| `index.html` | Home |
| `plan.html` `people.html` `money.html` `on-set.html` `post.html` `tasks.html` | One topline page per category. Each function is a name and one headline |
| `blog.html` | The Blog. Every post on one page, picked from a list on the left |
| `_posts/` | Blog posts, one Markdown file each (see below) |
| `_config.yml` `_layouts/post.html` | Jekyll settings for the blog, and the redirect each post's own URL uses |
| `assets/site.css` `assets/site.js` | Shared styles, scroll animations and the blog reader |
| `img/` | Hero screenshots (see below) |
| `mockups/` | The two design mockups (A Paper, B Ink). Kept for reference, not linked from the site |
| `deliver.html` `script.html` `budget.html` and the other old page names | Tiny redirects to the category page, so old links keep working |

The look is the Albatross Yuzu theme, inverted: ink ground, acid lime `#d4ff3a`, lilac `#b9a6ff`, hairline borders, square corners, bold tight headings.

## Writing a blog post

Add one file to `_posts/` and push to `main`. GitHub Pages builds it.

File name: `_posts/YYYY-MM-DD-short-title.md`, for example `_posts/2026-11-02-call-sheets-in-one-click.md`. The date is the post date, the short title is its address (`blog.html#call-sheets-in-one-click`).

```markdown
---
title: Call sheets in one click
tag: Guide
summary: One line for link previews.
---

Write the post in Markdown. **Bold**, [links](https://example.com), lists, quotes, tables and code all work.

## A heading

![Alt text](/img/blog/call-sheet.png)
```

`tag` and `summary` are optional. Images go in `img/blog/`. To preview locally: `gem install jekyll jekyll-feed kramdown-parser-gfm`, then `jekyll serve` and open `localhost:4000/blog.html`.

## Screenshots

Each category page has one hero screenshot slot, and the home page reuses them. If the PNG exists it is shown. If not, a mock of the app is shown. No code changes needed: drop the file in with the right name.

| Page | File |
|------|------|
| Plan | `img/plan-hero.png` |
| People | `img/people-hero.png` |
| Money | `img/money-hero.png` |
| On Set | `img/on-set-hero.png` |
| Post | `img/post-hero.png` |
| Tasks | `img/tasks-hero.png` |

Capture the app in the Yuzu theme (Settings, Appearance). A window around 1600 px wide at 2x works well. PNG only, lowercase, as named above.

## Experimental features

Overtime is the only experimental feature in the app. It is hidden there until you tick Show experimental features in Settings, under Experimental features. The site labels it Experimental.

## Style rules

Use `|` as a separator. No dots, no bullets.
