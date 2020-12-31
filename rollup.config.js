// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import inject from 'rollup-plugin-inject'


export default [
  {
    input: 'src/server.js', // Take our source file
    output: {
      file: 'build/server.js', // Compile it into this file
      format: 'cjs', // Use the CommonJS format, which works with Node
    },
    plugins: [
        resolve(),
        babel({
          exclude: 'node_modules/**',
          babelHelpers: 'bundled'
        }),
        alias({
            entries: [
                { find: 'react', replacement: 'preact/compat' },
                { find: 'react-dom', replacement: 'preact/compat' }
            ]
        }),
        commonjs({
          include: "node_modules/**",
        }),
        postcss({
            extract: false,
            modules: false,
            use: ['sass'],
            plugins: [
              cssnano()
            ]
        }),
        inject({
            include: 'node_modules/webfontloader/**',
            window: 'global/window'
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
        babel({
          exclude: 'node_modules/**',
          babelHelpers: 'bundled'
        }),
        commonjs({
          include: "node_modules/**",
        }),
        alias({
            entries: [
                { find: 'react', replacement: 'preact/compat' },
                { find: 'react-dom', replacement: 'preact/compat' }
            ]
        }),
        terser(),
        postcss({
            extract: true,
            modules: false,
            use: ['sass'],
            plugins: [
              cssnano()
            ]
        }),
        inject({
            include: 'node_modules/webfontloader/**',
            window: 'global/window'
        })
    ]
  }
];
