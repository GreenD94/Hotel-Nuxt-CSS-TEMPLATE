import path from 'path';
import _routes from './routes';
const fs = require('fs');
module.exports = function UserModule(moduleOptions) {

  
 
  this.extendRoutes((nuxtRoutes) => {
    _routes.forEach((route) => {
      const componentPath = path.resolve(__dirname, 'pages', route.component);
      if (!fs.existsSync(componentPath)) { throw 'invalid path to component  path: ' + componentPath; }
      let fixedRoute=Object.assign({}, route);
      fixedRoute.component = componentPath;
      nuxtRoutes.unshift(fixedRoute);
    }); 

  });
  


  const routesStorePath=path.resolve(__dirname, 'routes_store.js');
  if (!fs.existsSync(routesStorePath)) { throw 'invalid path to routes_store.js  path: ' + routesStorePath; }
  this.addPlugin({
    src: path.resolve(__dirname, 'routes_store.js'),
    fileName: 'routesStore.js',
  });


}