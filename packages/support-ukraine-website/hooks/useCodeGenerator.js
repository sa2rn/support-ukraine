import { useCallback, useMemo, useState } from 'react';
import { set, get, cloneDeep } from 'lodash';
import { html } from 'js-beautify';
import { diff } from 'deep-object-diff';

const INITIAL_STATE = {
  style: {
    '--support-ua-font-family': '\'Roboto\', sans-serif',
    '--support-ua-bg-color': '#f5f5f5',
    '--support-ua-font-weight': 'normal',
    '--support-ua-text-align': 'center',
    '--support-ua-padding': '15px',
    '--support-ua-font-size': '18px',
    '--support-ua-link-color': '#000000',
    '--support-ua-link-hover-color': '#888888',
  },
  attributes: {
    lang: '',
  },
};

export default function useCodeGenerator() {
  const [state, setState] = useState(INITIAL_STATE);

  const setValue = useCallback((name, value) => {
    setState((prevState) => set(cloneDeep(prevState), name, value));
  }, []);

  const getValue = useCallback((name) => {
    const value = get(state, name);
    return typeof value === 'string' && value.endsWith('px') ? parseInt(value, 10) : value;
  }, [state]);

  const handleChange = useCallback(({ target }) => {
    setValue(target.name, target.type === 'number' ? `${target.value}px` : target.value);
  }, [setValue]);

  const connect = useCallback((name) => ({
    name,
    value: getValue(name),
    onChange: handleChange,
  }), [handleChange, getValue]);

  const codeString = useMemo(() => {
    const cleanedStyle = diff(INITIAL_STATE.style, state.style);
    const cleanedAttributes = diff(INITIAL_STATE.attributes, state.attributes);
    const styleStr = Object.entries(cleanedStyle).map(([name, value]) => `${name}: ${value};`).join('\n');
    const attributesStr = Object.entries(cleanedAttributes).map(([name, value]) => `${name}="${value}"`).join(' ');

    return html(`
      <!-- insert into the head: -->
      <script src="https://unpkg.com/support-ukraine-banner/dist/main.min.js" defer></script>
      ${styleStr ? `<style>:root {${styleStr}}</style>` : ''}
      <!-- insert into the body: -->
      <support-ua ${attributesStr}></support-ua>
    `);
  }, [state]);

  return { codeString, connect, ...state };
}
