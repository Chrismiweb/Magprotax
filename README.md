# Magpro Tax — Site Redesign (React + Tailwind)

## Run it
```
npm install
npm run dev
```
Then open the local URL it prints (usually http://localhost:5173).

## What's in here
A multi-page site built as one React app (`src/App.jsx`), with simple
state-based page switching instead of a router (kept dependency-free for
the prototype stage). Pages: Home, Services, About Us, Contact, File Your
Tax (calculator + document portal demo), Shop.

## What's REAL / working right now
- Tax calculator — actual math, simplified federal brackets, live updates
- Document portal flow — filing type selection → upload → status tracker
  (fully clickable, in-memory state only)
- Shop — product grid, cart, checkout UI with card/bank-transfer toggle
- Contact form (client-side only, no email actually sent yet)
- Fully responsive, all pages reachable from nav + footer

## What's DEMO-LEVEL — needs real backend before going live
1. **Owner photo** — currently a placeholder Unsplash image in the hero
   (`OWNER_PHOTO_URL` constant at the top of `App.jsx`). Swap with the
   real photo of the Magpro owner before this goes anywhere near production.
2. **Product photos** — placeholder stock images (`PRODUCT_IMAGES` array).
   Swap with his real clothing item photos. Will need an actual admin
   upload flow eventually since he manages this himself — not built yet.
3. **Document upload** — UI works, but files aren't actually stored
   anywhere. Needs real file storage (e.g. S3 / Supabase storage) with
   proper encryption and access control, since this will hold sensitive
   tax documents (SSNs, W-2s, etc.).
4. **Payments** — checkout UI is fully clickable but doesn't move real
   money. Card flow needs a real Stripe (or similar) integration. Bank
   transfer flow needs a real manual-confirmation backend (admin marks
   paid once they've verified the transfer).
5. **Status tracker** — currently static demo data. Needs to be driven
   by a real database tied to each client's actual filing.
6. **Routing** — currently simulated with React state (`page` /
   `setPage` in `App.jsx`). Recommend swapping to `react-router-dom`
   for real URLs (`/services`, `/shop`, etc.) before production —
   every nav link and button already calls `setPage('home' | 'services'
   | 'about' | 'contact' | 'file' | 'shop')`, so the swap is mechanical.

## Design system
Custom "ledger/paper" identity (not the original dark-SaaS theme) —
paper background, deep ink text, stamp-red accent, Fraunces serif +
Space Grotesk body + JetBrains Mono for numerals/data. Tokens are
inlined as Tailwind arbitrary values throughout; consider pulling them
into `tailwind.config.js` `theme.extend.colors` if the project grows.
