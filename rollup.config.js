// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/server.js', // Take our source file
    output: {
      file: 'build/server.js', // Compile it into this file
      format: 'cjs', // Use the CommonJS format, which works with Node
    },
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' }),
        commonjs(),
        alias({
            entries: [
                { find: 'react', replacement: 'preact/compat' },
                { find: 'react-dom', replacement: 'preact/compat' }
            ]
        })
    ]
  },
  {
    input: 'src/client.js',
    output: {
      file: 'build/client.js',
      format: 'es', // ES Module format for modern browsers
      name: 'client'
    },
    plugins: [
        resolve(),
        babel(),
        commonjs(),
        alias({
            entries: [
                { find: 'react', replacement: 'preact/compat' },
                { find: 'react-dom', replacement: 'preact/compat' }
            ]
        }),
        terser()
    ]
  }
];
