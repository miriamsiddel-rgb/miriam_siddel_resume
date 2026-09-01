# Professional Resume — Skills Portfolio

Three tailored versions of the same resume, sharing one set of styles and assets:

- **`index.html`** (root) — general/bridging version.
- **`im/index.html`** — Information Management–focused version (governance, records, metadata).
- **`it/index.html`** — IT, Cloud & AI Automation–focused version.

Each page links to the other two via the "Viewing:" switcher in the header.

## Structure

- `assets/styles.css` — shared stylesheet for all three pages.
- `assets/images/` — shared photos and diagrams.
- `script.js` — shared behaviour (gallery modal, footer year).
- `project-docs/` — supporting source material for the projects described on the IT page.

## Local preview

Open any of the three HTML files directly in a browser (double-click or right-click → Open). No build step required.

## Editing

- Update shared visuals in `assets/styles.css`.
- Update contact info, GPA, and any other fact that should be identical across versions in **all three** HTML files — nothing is templated, so duplicated facts need to be kept in sync by hand.
- Add new photos to `assets/images/` and reference them from the `Beyond Work` gallery in each page (`data-src` on a `.photo` button).

## Deployment

This site deploys to two separate live targets — intentionally:

1. **GitHub Pages** — serves from the `main` branch root (classic "deploy from a branch," no Pages-specific Actions workflow). Only updates when a branch is merged into `main`.
2. **Azure App Service** — via `.github/workflows/main_app-frontgate-tickets.yml`, deploying a second copy as a demonstration of cloud/Azure deployment skills.

If a change isn't showing up live, check both targets — a successful Pages deploy doesn't guarantee the Azure deploy also succeeded, and vice versa.
