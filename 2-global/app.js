// globals
/*
1. __dirname : current dir
2. __filename : current filename
3. require : function to import modules
4. module : info about current module
5. process :
 */

const currentDirName = () => console.log(__dirname) // /Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/tutorial/2-global
currentDirName()

const currentFileName = () => console.log(__filename) //Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/tutorial/2-global/app.js
currentFileName();

const currentModule = () => console.log(module);
currentModule();
/*
Module {
  id: '.',
  path: '/Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/tutorial/2-global',
  exports: {},
  parent: null,
  filename: '/Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/tutorial/2-global/app.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/tutorial/2-global/node_modules',
    '/Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/tutorial/node_modules',
    '/Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/node_modules',
    '/Users/ravikanthm/PERS/repositories/node_modules',
    '/Users/ravikanthm/PERS/node_modules',
    '/Users/ravikanthm/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}

 */

const currentProcess = () => console.log(process)
currentProcess();