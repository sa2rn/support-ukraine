import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.mjs',
  output: [
    {
      file: 'dist/support-ukraine.js',
    },
    {
      file: 'dist/support-ukraine.min.js',
      plugins: [terser()],
    },
  ],
};
