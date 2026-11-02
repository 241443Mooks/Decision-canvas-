# Decision Canvas
An exploratory visual thinking tool, grown from [Open Licence Opportunity Radar OL-001](https://github.com/241443Mooks/Open-license-radar/blob/main/data/experiments.csv).

**Status (2 November 2026): scoped, not implemented or deployed.** This repository starts with a build-ready brief. The first aim is to get something tangible into SMooks' hands quickly and discover what is interesting. No fixed audience, business model or product direction is assumed.

## The first experiment
Can moving and connecting a handful of thoughts help someone see a choice, dependency or unresolved question more clearly?

Build one editable canvas with a useful ten-card example, plus a blank start. The sample explores "Which small idea should we try next?" with a question, three options, supporting considerations, a constraint, an unknown and a next action. Use invented, non-sensitive content.

The ten cards are a demonstration and acceptance test, **not a hard limit**.

## First playable scope
| Area | First version |
| --- | --- |
| Cards | Add, select, move, edit title/notes, duplicate and delete |
| Card kinds | Question, option, evidence, constraint, action; labels and colour are visual hints, not a rules engine |
| Connections | Three directed, visibly labelled relationships: supports, challenges, depends on |
| Editing connections | Create, change relationship and delete; provide a form-based way to connect selected cards as an alternative to dragging |
| Navigation | Pan, zoom, fit board; concise interaction hints |
| Persistence | One current board auto-saved in this browser, with visible save/error state |
| Portability | Download a versioned JSON file and import it with validation |
| Starting points | Ten-card example and blank canvas; confirm before replacing current work |
| Presentation | Readable, calm workspace with generous cards and a compact editor; canvas is the main screen |
| Devices | Desktop/tablet editing; usable phone layout with card list/editor and connection form |
| Recovery | Undo/redo for board edits; deleting a card removes attached connections |
| Privacy | Board contents stay in the browser unless exported; no analytics, account or backend in this experiment |

Browser storage is not a backup or cross-device sync. Make this clear in the UI. Handle storage failures without losing the working board. Reopening the app on another device does not bring the board with it.

## Delivery slices
1. **First touch:** rendered example, movable cards, editable text and connections. Make this available as a preview as soon as it runs; do not wait for every convenience.
2. **Usable experiment:** persistence, JSON round-trip, blank start, undo/redo, responsive controls and targeted checks.
3. **Web access:** connect this GitHub repository to Cloudflare, verify a deployment, record the actual URL here.

Planning budget: roughly **1–2 focused build days** for this deliberately bounded prototype, not a promised deadline. Get the first runnable slice out before optional additions. If polish or infrastructure expands the estimate, record the tradeoff and keep the core small.

## Technology proposal
- React + TypeScript + Vite.
- React Flow (`@xyflow/react`) for nodes, connections and viewport interaction.
- A versioned board data model with stable node/edge IDs and plain JSON; keep it independent of UI components.
- localStorage for the current board, plus explicit JSON download/import.
- Static frontend on Cloudflare Workers Static Assets; no database, model API or server logic required initially.
- Use current compatible stable versions at implementation time, commit the lockfile and document Node/runtime requirements.

React Flow is the reusable building block, not a finished decision-making product. Its core is MIT licensed; retain required notices and inspect dependency licences. Paid Pro examples/services are not necessary. A licence for this project's original code remains a deliberate owner choice; do not silently add one.

## Cloudflare route
Cloudflare currently recommends Workers for new projects. Use Workers Static Assets for the Vite build. Keep this repository as the source of truth.

After the first working implementation:
1. The owner signs into Cloudflare and authorises its GitHub integration for this repository.
2. Create/connect a Worker to this repository and select the intended production branch.
3. Configure the committed build/deploy scripts and Wrangler static-asset configuration; expected asset output is `dist`.
4. Enable the provided `workers.dev` URL. No custom domain is needed for the experiment.
5. Confirm a Git push builds/deploys and the live board loads. Verify persistence and import/export on the deployed origin, not just localhost.

The public app and each visitor's local board are different things: publishing the app must not publish a visitor's saved board. Browser-local data is tied to its origin; changing the hosting URL does not migrate it automatically. If a private app is desired, configure access separately.

Do not request passwords or paste API tokens into source, issues or chat. Owner sign-in/GitHub authorisation happens through provider UI. Hosting tiers/limits should be checked during setup; no paid plan is required by this architecture, but no blanket zero-cost promise is made.

## What we need from SMooks
**To start coding:** nothing further about audience, branding or final direction. The defaults above are enough.
**For Codex cloud:** ensure Codex can access this repository; a new repository may need to be enabled in its GitHub permissions/environment.
**For hosting:** Cloudflare account sign-in and repository authorisation when the app is ready.
**After first touch:** play for five minutes and tell us what felt useful, awkward, missing or unexpectedly interesting. A real example is welcome, not a prerequisite.

Working defaults: Decision Canvas as the temporary name; sample content first; public application with browser-local boards; no paid APIs; phone usability included.

## Acceptance checks
- Create and edit at least ten cards; add each of the three relationship types.
- Delete/duplicate cards without broken IDs or orphaned connections.
- Undo/redo a sequence including card edits and connection changes.
- Refresh and recover titles, notes, positions, connections and viewport.
- Export, clear, import and recover equivalent board content.
- Reject malformed/unsupported imports without replacing the current board; render imported text as text.
- Make failed storage visible while retaining the current in-memory work and allowing export.
- Use keyboard-accessible controls with visible focus and relationship labels that do not rely on colour.
- Complete a phone smoke test: view/edit a card and create a connection without a drag gesture.
- Run typecheck and production build; exercise persistence/import and board mutations with focused tests.
- Record browser checks and any unverified limitations. Do not describe unperformed checks as passing.

## Explore after using it
Choose at most one next experiment from observed interest:
| Direction | Small next experiment | What we learn |
| --- | --- | --- |
| Decision support | Compare two options with evidence and unresolved questions | Does structure help a choice? |
| Process/role clarity | Add owner labels and highlight an unresolved handoff | Does it reveal an ambiguity? |
| Idea exploration | Duplicate a board and try an alternative arrangement | Does rearrangement change understanding? |
| Story making | Sketch a branching scene with consequences | Is the canvas enjoyable creatively? |
| AI assistance | User requests suggested cards/links, reviews before adding | Is the suggestion useful enough to justify API setup/cost? |
| Collaboration | First try export/import handoff; consider live sync only if needed | Is sharing actually the missing value? |

These are possibilities, not backlog commitments. AI, live collaboration, cloud accounts/storage, automated scoring, complex layouts, integrations and payments are outside the first build.

## Learning test
First SMooks tries a real or playful question. Note:
- Something newly visible or clearer.
- Something frustrating.
- What they naturally try to do next.

Then, if useful, ask two people to map a real workflow ambiguity, matching the radar's original success test. Neither enjoyment nor a successful prototype establishes commercial demand.

## Codex implementation brief
Copy this into a Codex task with this repository selected:

> Read README.md and any applicable AGENTS.md. Implement the first playable Decision Canvas described here, in delivery slices. Start with React + TypeScript + Vite and React Flow, a ten-card worked example and a blank start. Get a runnable interactive canvas working first, then finish the bounded persistence, JSON round-trip, recovery and accessibility scope. Keep board data versioned and independent of view components. Include a concise run/deploy guide and Cloudflare Workers Static Assets configuration. Do not add backend services, accounts, AI calls, analytics or Pro dependencies. Run meaningful checks against the acceptance list and report verification limits. Open a reviewable PR with setup commands, completed scope and remaining work. Do not claim a live deployment without an actual successful deployment URL; owner Cloudflare authorisation can follow separately.

## Sources
- [Radar resource record](https://github.com/241443Mooks/Open-license-radar/blob/main/data/opportunities.csv) and [original experiment](https://github.com/241443Mooks/Open-license-radar/blob/main/data/experiments.csv).
- [React Flow docs](https://reactflow.dev/learn), [save/restore example](https://reactflow.dev/examples/interaction/save-and-restore), [core licence](https://github.com/xyflow/xyflow/blob/main/LICENSE).
- [Cloudflare platform guidance](https://developers.cloudflare.com/pages/framework-guides/), [static assets](https://developers.cloudflare.com/workers/static-assets/get-started/), [Git-backed builds](https://developers.cloudflare.com/workers/ci-cd/builds/).


## Running this implementation

Requires Node.js 20 or newer. From the repository directory:

```sh
npm install
npm run dev
```

Open http://localhost:5173. `npm test` runs model and import validation checks, `npm run typecheck` checks JavaScript syntax, and `npm run build` produces the static `dist` directory. There is no server-side application or data collection. Use Export for a backup: browser storage can be cleared and does not sync between devices.

This initial implementation uses dependency-free browser JavaScript rather than the proposed React, TypeScript, Vite and React Flow stack. It keeps the board format separate from the interface and provides a static build, but a future migration would be needed to use those proposed libraries. The connection form is the supported way to create links; dragging between cards is not implemented. The native canvas supports mouse and touch movement and buttons for zoom and fit.

### Cloudflare Workers Static Assets

The checked-in `wrangler.jsonc` serves `dist`. In Cloudflare, connect this repository to a Worker, use `npm run build` as the build command, and use `npx wrangler deploy` as the deploy command. The owner must authorize the GitHub integration and confirm the workers.dev deployment. No live deployment has been verified yet.
