"use strict";
/*
Additional config options part 1:

    // "allowJs": true,                             /* Allow javascript files to be compiled. */
// "checkJs": true,                             /* Report errors in .js files. */
// "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
// "declaration": true,                         /* Generates corresponding '.d.ts' file. */
// "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
/*
  First two make ts compiler check out js files (normally it only cares about ts ones). Can be useful to transpile into other js version
  or getting a free-check-up on them for some mistakes.

  jsx - plain and simple - if it's a react project you'll want to fiddle with this option.
  declaration and declartions maps are for typscript projects bundled as libraries - not in our scope of interest atm.
*/
console.log('read the comment in file');
