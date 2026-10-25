# Silver Steps Dance Crew

A responsive four-section website for Silver Steps: About, Our Team, Community, and Join the Crew. Built with Vite, plain JavaScript, and locally bundled Nunito fonts.

## Develop

Use Node.js 22 or 24 and npm. In this checkout:

```sh
npm ci --cache /workspace/.npm-cache
npm run dev -- --port 5173
```

```sh
npm run build
npm run preview -- --port 4173
```

The production site is in `dist/` and can be deployed to a static hosting provider. No server-side credentials are required. The navigation uses URL fragments, so static hosting does not need route rewrites.

## Add your content

Edit `src/content.js`:

- `contactEmail` receives contact, booking, and application inquiries. Forms open a composed email in the visitor's email app; visitors must send it themselves. There is no backend, database, or automatic delivery/booking confirmation.
- `applicationLinks.chapter` and `applicationLinks.crew` can optionally point to HTTPS application forms instead of the email dialog.
- `founderPhoto` accepts a photo path, such as `/images/guneet.jpg`.
- `dancers` contains 24 entries. Add each real name and photo path. Until then, the website displays numbered placeholders, rather than invented identities.
- Each performance video has a `url` field. Paste a YouTube watch, Shorts, embed, or youtu.be URL. The site renders a privacy-enhanced YouTube embed. Empty or invalid URLs retain a labeled video placeholder. All nine requested video spaces are included.

Place photos in `public/images/`. Obtain permission before publishing portraits. The current dance imagery and vector logo artwork were extracted from the supplied brand style guide; the dance imagery is illustrative and does not identify the actual Silver Steps crew. The PNG mentioned in the request was not accessible as a local file, so the supplied guide's logo paths are used instead. The official ocean blue, aqua, and lavender palette comes from the guide. Nunito is the bundled rounded substitute for Ekamai and Sofia Pro Soft, which were not supplied as web font files.

The founder copy, dancer area, performance dates/titles, and joining information are in `src/main.js` and `src/content.js`. FAQ answers avoid promising an unconfirmed duration or price; update them once those details are confirmed.

## Accessibility

The site includes keyboard navigation, visible focus styles, a skip link, reduced-motion support, semantic sections, native accessible form validation, modal keyboard handling, and responsive layouts. No analytics or tracking scripts are installed. YouTube loads only for configured video URLs.
