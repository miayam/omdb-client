// rollup.config.js

import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/server.js', // Take our source file
    output: {
      file: 'build/server.js', // Compile it into this file
      format: 'cjs', // Use the CommonJS format, which works with Node
    },
    plugins: [resolve()], // Use the node-resolve plugin so dependencies get imported properly
  }
];
