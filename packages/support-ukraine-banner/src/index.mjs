import SupportUkraine from './SupportUkraine.mjs';

window.customElements.define('support-ukraine', SupportUkraine);
window.customElements.define('support-ukraine-banner', SupportUkraine);
window.customElements.define('support-ua', SupportUkraine);

const WEBSITE = 'https://sa2rn.github.io/support-ukraine/';

if ('console' in window) {
  // eslint-disable-next-line no-console
  console.info(`%c 🇺🇦 Support Ukraine! Install: ${WEBSITE}`, 'color: yellow; background: blue; font-size: 30px');
}
