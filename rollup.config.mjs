import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import rollupPluginLicense from 'rollup-plugin-license';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    typescript({ tsconfig: 'tsconfig.build.json' }),
    nodeResolve(),
    commonjs(),
    rollupPluginLicense({
      sourcemap: true,
      banner: {
        content: {
          file: 'LICENSE',
        },
      },
    }),
  ],
};
