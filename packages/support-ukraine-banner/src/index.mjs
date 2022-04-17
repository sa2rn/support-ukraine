import SupportUkraine from './SupportUkraine.mjs';

window.customElements.define('support-ukraine', SupportUkraine);

const WEBSITE = 'https://github.com/sa2rn/support-ukraine/tree/main/packages/banner';

if ('console' in window) {
  // eslint-disable-next-line no-console
  console.info(`%c 🇺🇦 Support Ukraine! Install: ${WEBSITE}`, 'color: yellow; background: blue; font-size: 30px');
}
