import { useMemo, useReducer } from 'react';
import { html } from 'js-beautify';
import { diff } from 'deep-object-diff';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default function useCodeGenerator(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function connect(name) {
    return {
      name,
      value: state[name].endsWith('px') ? parseInt(state[name], 10) : state[name],
      onChange: ({ target }) => {
        dispatch({
          type: 'set',
          name: target.name,
          value: target.type === 'number' ? `${target.value}px` : target.value,
        });
      },
    };
  }

  const codeString = useMemo(() => {
    const stateDiff = diff(initialState, state);
    const styleStr = Object.entries(stateDiff).map(([name, value]) => `${name}: ${value};`).join('\n');
    const styleCode = styleStr ? `<style>:root {${styleStr}}</style>` : '';

    return html(`
      <!-- insert into the head: -->
      <script src="https://unpkg.com/support-ukraine-banner/dist/main.min.js" defer></script>
      ${styleCode}
      <!-- insert into the body: -->
      <support-ukraine></support-ukraine>
    `);
  }, [state, initialState]);

  return { connect, codeString, style: state };
}
