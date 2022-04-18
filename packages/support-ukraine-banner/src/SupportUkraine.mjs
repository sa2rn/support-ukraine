import locales from './locales.mjs';
import urls from './urls.mjs';

const NAVIGATOR_LANGUAGE = navigator.language.slice(0, 2);
const FALLBACK_LANGUAGE = 'en';

export default class SupportUkraine extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._renderHtml();
  }

  static get observedAttributes() { return ['lang']; }

  set lang(language) {
    this.setAttribute('lang', language);
  }

  get lang() {
    return this.getAttribute('lang') || NAVIGATOR_LANGUAGE;
  }

  // eslint-disable-next-line no-unused-vars
  attributeChangedCallback(name, oldValue, newValue) {
    this._renderHtml();
  }

  __t(key) {
    const hasKey = locales[this.lang] && locales[this.lang][key];
    return hasKey ? locales[this.lang][key] : locales[FALLBACK_LANGUAGE][key];
  }

  _getSupportUrl() {
    const hasKey = urls[this.lang] && urls[this.lang].support;
    return hasKey ? urls[this.lang].support : urls[FALLBACK_LANGUAGE].support;
  }

  _renderHtml() {
    this._shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>
      <style>
        :host {
          display: block;
          font-family: var(--support-ua-font-family, 'Roboto', sans-serif);
          background-color: var(--support-ua-bg-color, #f5f5f5);
          font-weight: var(--support-ua-font-weight, normal);
          text-align: var(--support-ua-text-align, center);
          padding: var(--support-ua-padding, 15px);
          color: var(--support-ua-color, #00a8ff);
          font-size: var(--support-ua-font-size, 18px);
          line-height: 1.5;
        }
        .link {
          color: var(--support-ua-link-color, #000);
          text-decoration: var(--support-ua-link-text-decoration, none);
          transition: color 0.3s;
        }
        .link:hover {
          color: var(--support-ua-link-hover-color, #888);
          text-decoration: var(--support-ua-link-hover-text-decoration, none);
        }
      </style>
      <a class="link" target="__blank" href="${this._getSupportUrl()}">
        ${this.__t('support')}
      </a>
    `;
  }
}
