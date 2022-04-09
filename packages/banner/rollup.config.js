import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.mjs',
  output: [
    {
      file: 'dist/main.js',
    },
    {
      file: 'dist/main.min.js',
      plugins: [terser()],
    },
  ],
};
