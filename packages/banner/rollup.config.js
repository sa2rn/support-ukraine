import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/banner.js',
  output: {
    file: 'lib/banner.min.js',
    plugins: [terser()],
  },
};
