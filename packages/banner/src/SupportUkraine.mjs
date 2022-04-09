import locales from './locales.mjs';

const FALLBACK_LANGUAGE = 'en';

export default class SupportUkraine extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.getHtml();
  }

  getLanguage() {
    const userLanguage = (this.getAttribute('lang') || navigator.language).slice(0, 2);
    return locales[userLanguage] ? userLanguage : FALLBACK_LANGUAGE;
  }

  __t(key) {
    return locales[this.getLanguage()][key];
  }

  getHtml() {
    return `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>
      <style>
        :host {
          display: block;
          font-family: var(--support-ua-font-family, #00a8ff);
          background-color: var(--support-ua-bg-color, #f5f5f5);
          font-weight: var(--support-ua-font-weight, normal);
          text-align: var(--support-ua-text-align, center);
          padding: var(--support-ua-padding, 15px);
          color: var(--support-ua-color, #00a8ff);
          font-size: var(--support-ua-font-size, 18px);
        }
        .link {
          color: var(--support-ua-link-color, #00a8ff);
          text-decoration: var(--support-ua-link-text-decoration, none);
          line-height: 1.5;
        }
        .link:hover {
          color: var(--support-ua-link-hover-color, #00a8ff);
        }
        .link::before {
          content: '🇺🇦';
        }
      </style>
      <a class="link" target="__blank" href="https://war.ukraine.ua/support-ukraine/">
        ${this.__t('support')}
      </a>
    `;
  }
}
