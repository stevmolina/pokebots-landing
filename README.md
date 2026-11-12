# Pokebots landing

The public page at https://pokebots.xyz/.

`index.html` is the page. The four plush images sit next to it, and the mascot scenes and props are in `art/`. `sw.js` replaces the old app's service worker and sends its tabs to the app's new address, https://api.pokebots.xyz/app.

The two other designs we tried (Toy Box and Night Desk) are in commit 827ab62 on the `landing-options` branch.

On the OVH VPS the same files live in `/srv/stacks/pokebots/site`. The container `pokebots-landing-1` serves that folder through Traefik. Copy changed files there to publish them (`index.html`, `sw.js` and the `art/` folder). This repository is not part of the Pokebots app.
