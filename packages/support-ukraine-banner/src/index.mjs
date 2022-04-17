/* eslint-disable max-classes-per-file */
import SupportUkraine from './SupportUkraine.mjs';

const WEBSITE = 'https://sa2rn.github.io/support-ukraine/';

window.customElements.define('support-ua', SupportUkraine);
window.customElements.define('support-ukraine', class extends SupportUkraine {}); // support legacy
window.customElements.define('support-ukraine-banner', class extends SupportUkraine {}); // support legacy

if ('console' in window) {
  // eslint-disable-next-line no-console
  console.info(`%c 🇺🇦 Support Ukraine! Install: ${WEBSITE}`, 'color: yellow; background: blue; font-size: 30px');
}
