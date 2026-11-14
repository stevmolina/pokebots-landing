# Pokebots landing

The public page at https://pokebots.xyz/.

`index.html` is the page. The four plush images sit next to it, and the mascot scenes and props are in `art/`. `sw.js` replaces the old app's service worker, clears its caches, and returns its tabs to the public landing page.

The two other designs we tried (Toy Box and Night Desk) are in commit 827ab62 on the `landing-options` branch.

On the OVH VPS the same files live in `/srv/stacks/pokebots/site`. The container `pokebots-landing-1` serves that folder through Traefik. Copy changed files there to publish them (`index.html`, `sw.js` and the `art/` folder). This repository is not part of the Pokebots app.

## Waitlist

All signup links open https://tally.so/r/Dqk8Xp, the Pokebots waitlist hosted on Tally. Manage the form and responses at https://tally.so/forms/Dqk8Xp. The form belongs to Steven's personal Tally account. Responses are stored in Tally and synced to the private Google Sheet at https://docs.google.com/spreadsheets/d/1mrIkkQj0md_vcxO-YZKOtfJ0bukUsAKxIQQAiS3jc2Q. The form requires an email and reCAPTCHA, and prevents duplicate email signups. No API keys or backend are needed on this site. Change the Tally links in `index.html` to replace the form. App access controls are managed separately in the app repository.
