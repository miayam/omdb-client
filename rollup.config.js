// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import inject from 'rollup-plugin-inject';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import json from '@rollup/plugin-json';

const path = require('path');

const commonPlugins = [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    json(),
    alias({
        entries: [
            { find: 'react', replacement: 'preact/compat' },
            { find: 'react-dom', replacement: 'preact/compat' },
            { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: 'atoms', replacement: path.resolve(__dirname, 'src/components/atoms') },
            { find: 'molecules', replacement: path.resolve(__dirname, 'src/components/molecules') },
            { find: 'organisms', replacement: path.resolve(__dirname, 'src/components/organisms') },
            { find: 'templates', replacement: path.resolve(__dirname, 'src/components/templates') },
            { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
            { find: 'store', replacement: path.resolve(__dirname, 'src/store') }
        ]
    }),
    commonjs({
      include: "node_modules/**",
    }),
    inject({
        include: 'node_modules/webfontloader/**',
        window: 'global/window'
    }),
    terser(),
    injectProcessEnv({ 
        NODE_ENV: "production"
    }),
];

export default [
  {
    input: 'src/server.js', // Take our source file
    output: {
      file: 'build/server.js', // Compile it into this file
      format: 'cjs', // Use the CommonJS format, which works with Node
    },
    plugins: [
       postcss({
            extract: false,
            modules: false,
            use: ['sass'],
            plugins: [
              cssnano()
            ]
        }),
        ...commonPlugins
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
        postcss({
            extract: true,
            modules: false,
            use: ['sass'],
            plugins: [
              cssnano()
            ]
        }),
        ...commonPlugins
    ]
  }
];
