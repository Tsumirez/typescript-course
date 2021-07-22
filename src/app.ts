/*
    Additional config options part 2

    outDir and rootDir are two fun options.
    outDir sets ts compiler to output compiled .js files into that directory.
    rootDir tells compiler that only ts files in this directory and below are to be compiled. 
    Files outside of it are ignored, as you can see with user.ts in user folder.
    If there is conflict between rooDir and include/files configuration, an error will be thrown.

    When compiling files into outDir, typescript will preserve folder structure. the login.ts file in src dir 
    (which is configured as rootDir) is inside the login subfolder. 

    Notice how the dist folder (which is set to be the outDir) also has a login folder and resulting login.js file inside.
    This was done automatically when compiling the login.ts file.

    // "removeComments": true,                       Do not emit comments to output. 
    
    Pretty obvious. It'll remove comments founds in ts files from the output .js files

    // "noEmit": true,                              Do not emit outputs. 

    This will make compiler check the ts files, but not output any .js files from them.
    This is useful if compilation is a drag (big projects) and you just want some error checking without 
    the hassle of producing a slew of new .js files over every single tiny bugfix.

    // "downlevelIteration": true,                   Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. 
    If your loops got assholed when compiling to older versions of js, activate this one to fix the problem. The code will be more more verbose but it'll work.
    If nothing is wrong, leave it incactive.
    
*/

console.log('read the comment in the app.ts file');