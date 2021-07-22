"use strict";
/*
TS core libs.

You'll notice that tsconfig.jsob as a commented "lib" entry.
This entry specifies libs needed for ts to work properly.
Having it commented  out means including 4 default ones:
"dom", "es6", "dom.iterable" and "scripthost".

These are needed for ts' basic functionality - recognizing js dom calls, methods (like console.log)
es6 syntax support and so on.

You can check this to be true by uncommenting the lib array and not passing it any value.
At that point ts will fail to recognize the most basic js objects or document object model methods and objects for example.
*/
console.log('');
