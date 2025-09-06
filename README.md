# ochi design

**A compact, motion-first clone of ochi.design** — rebuilt to explore scroll-driven interactions, parallax, and performance-friendly animation patterns using React, Tailwind CSS, Locomotive Scroll and framer motion. For learning and portfolio use only (not the official site).

---

## Tech

* HTML
* CSS
* JavaScript

## Live demo

Live demo: [Open live demo](https://sayanindra83.github.io/Weather-app/)

## Repo

Repo: [Source code on GitHub](https://github.com/SayanIndra83/Weather-app/tree/main)


## Quick start

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev # or npm start
```

## Notes

* Initialize Locomotive inside `useEffect` and wrap the scrollable container with `data-scroll-container`.
* Use `data-scroll-section`, `data-scroll`, `data-scroll-speed` on animated elements and call `scroll.update()` after layout changes.
* Respect `prefers-reduced-motion` and consider disabling heavy motion on mobile.

## Troubleshooting

* Locomotive not working → ensure `data-scroll-container` exists and you imported `locomotive-scroll` CSS.
* Tailwind missing classes → check `tailwind.config.js` `content` paths and restart the dev server.

---

*This project has been created for javascript practice.*

## Contact
indrasayan176@gmail.com
