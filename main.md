
Action: file_editor create /app/memory/PRD.md --file-text "# Portfolio — Alok Awasthi (Data Engineer)

## Problem statement
Sleek single-page portfolio with: Hero (name, role, contacts, SnowPro Core badge), Impact Metrics bar (4 cards), Experience in code-comment style for Amdocs, Skills in 4 categories (Snowflake/Databricks/PySpark in accent blue), Education.

## Architecture
- Frontend only — React (CRA + craco), Tailwind base, custom CSS.
- No backend logic needed; FastAPI default `/api/` left untouched.
- Fonts: Inter (headings/body) + JetBrains Mono (mono accents), loaded via Google Fonts.
- Theme: Neo-corporate / Vercel-style — off-white (#fafaf7) bg, near-black text, accent blue #2563eb.

## Implemented (Dec 2025)
- `/app/frontend/src/pages/Portfolio.jsx` — full single-page portfolio
- `/app/frontend/src/App.js` — single route `/` rendering Portfolio
- `/app/frontend/src/App.css` — full design system (light Vercel-style)
- `/app/frontend/public/index.html` — added Inter + JetBrains Mono, page title
- Code-comment-style experience block with line numbers and highlighted figures (30–35%, 40–60%, 8–10 hrs, 100% SLA, 5–10 TB/day, etc.)
- Snowflake / Databricks / PySpark chips highlighted in accent blue
- Resume PDF link wired to uploaded asset URL

## Tested
- iteration_1 (dark IDE template): all data-testids, content strings, contact links, and metrics verified by testing_agent_v3.
- Theme rebuilt to Vercel-style after user feedback; data-testids preserved.

## Backlog
- P1: Add Projects section (case studies of pipelines built) when content is provided
- P2: Add subtle scroll-reveal animations + meta OG tags for shareability
- P2: Add GitHub URL once user provides actual handle (currently placeholder)

## Next action items
- If user provides GitHub username + project case studies, plug them in.
- Add OG/social preview image + meta tags for richer LinkedIn shares.
"
Observation: Create successful: /app/memory/PRD.md