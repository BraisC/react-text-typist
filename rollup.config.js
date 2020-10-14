import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [sass({ insert: true }), typescript({ objectHashIgnoreUnknownHack: true })],
  external: ['react', 'react-dom'],
};
