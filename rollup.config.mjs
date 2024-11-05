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
