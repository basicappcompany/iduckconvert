---
name: docs-sync
description: End-of-day (or on request) sync of iDuckConvert's docs and status page with what actually shipped and was verified. Use when the user says "docs-sync", "update the docs", "sync the docs", or at the end of a work session.
---

# docs-sync for iDuckConvert

Bring `docs/status.html`, `PROGRESS.md`, `CLAUDE.md` and `README.md` in line with reality, in one pull request. Never write a claim you have not verified in this session or in the repo.

## 1. Work out what changed
- `git log --oneline main` since the last "Docs" commit, plus `gh pr list --repo basicappcompany/iDuckConvert --state merged --limit 20` and any open PRs.
- Things done outside the repo, in dashboards (Cloudflare, GoDaddy, Search Console, Bing, AdSense, payment provider). Take these from the conversation, not from guesses.
- Anything still open or newly discovered (a failed attempt, a quota, a decision waiting on the user).

## 2. Re-measure what the docs quote
Do not copy numbers from old docs. Also re-check the sister sites (iduckpdf.com, iduckimg.com) for tools they gained since the last sync: a converter that now exists there becomes a link card here, not a rebuild. Re-read them from the source:
- Tools: the registry in `src/lib/tools.ts` once it exists. Until then the tool table is the `TOOLS_DATA` array in `docs/status.html`, which is hand-edited: a row is "ready" only if the page exists on `main` and is live.
- Tests: run `pnpm test` (Vitest) and, once they exist, `pnpm test:e2e` (Playwright). Quote the real pass counts.
- Pages: `pnpm build` and count the built pages and sitemap URLs from `dist/`.
- Performance: quote Lighthouse numbers only if measured this session, and say they are mobile and on which URL. Otherwise write "Not measured".
- Live checks when relevant: `curl -sI https://iduckconvert.com/...` for status codes and redirects, and the deploy status in Cloudflare Pages.
- Dependency versions: from `package.json`, never from memory.

## 3. Update, in this order
1. `docs/status.html`: the `PHASES` array (set each item's state `done | progress | todo | waiting | later`, owner `me | you | both | none | external`, `when`, an honest `note`, and numbered `steps` for anything the owner must do), then `DECISIONS`, `TIMELINE` (newest entry last), `SCORECARD`, `TOOLS_DATA` and `VERIFIED`. Add new items rather than stretching old ones. Item ids are `phase.number`; never reuse one.
2. `PROGRESS.md`: tick or untick every checklist line to match the status page; the two must never disagree.
3. `CLAUDE.md`: stack, versions, conventions, commands and milestones, only where they changed. Record new verified facts there (for example which AI providers allow browser CORS calls).
4. `README.md`: only if setup, development, test or deploy commands, the layout or the release flow changed.
5. Sweep stale values: `grep -rn` for old counts (tools, pages, tests), "planned", "coming soon", old versions and old URLs across `README.md CLAUDE.md docs src public .github`. Anything that now disagrees gets fixed, unasked.

## 4. Verify
- `pnpm verify` and `pnpm build` pass.
- Open `docs/status.html` in a browser (light and dark, phone width and desktop): every item renders, the "Pending from you" and "What I can do" counts equal their cards, the tool table row count equals `TOOLS_DATA`, no console errors, no horizontal overflow.

## 5. Ship it (the repo's workflow rules apply)
- Never push to `main`. New branch (for example `docs-sync-YYYY-MM-DD`), commit, push, open a PR, wait for green CI, squash-merge, delete the branch, pull `main`, and confirm the deploy succeeded once deploys exist.
- Docs-only changes are batched: leave them uncommitted during the day and do one commit, push and PR at the end of the day, unless the user asks for it sooner.
- The status page is one self-contained file with no external requests so it opens straight from disk. Keep it that way.
- Commit and PR bodies end with the attribution lines the harness gives for the session.
- Run commands with exact pinned versions; `pnpm-lock.yaml` is committed.

## 6. Report
List what changed in the docs, the verified numbers, and what is still waiting on the user, split into "needs you" and "I can do". Say plainly what was not checked. Update the project memory only with facts that matter to later sessions.

## Boundaries
- Link-out cards (tools that live on iDuckIMG or iDuckPDF) have status `link` in `TOOLS_DATA` and are not counted as built.
- Do not mark an item done on the user's word alone if it can be checked (a redirect, a deploy, a page); check it. If it cannot be checked (a mail landing in the inbox, a real phone), say so and leave the item open with the exact next step.
- Do not enter passwords, keys or tokens anywhere, and do not change DNS or security settings: list them as owner steps.
