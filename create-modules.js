const fs = require('fs');
const path = require('path');

const params = process.argv.slice(2)
const newfolder=params[0];

let basepath = path.join(__dirname, 'modules');
let newpath =path.join(basepath, newfolder);
let content="import path from 'path'; \n module.exports = function UserModule (moduleOptions) { \n  \t  this.extendRoutes((routes) => {  \n \t \t routes.unshift({ \n \t \t name: 'your_route_name', \n  \t \t path: '/your_route_url', \n \t \t component: path.resolve(__dirname, 'pages/your_view_name.vue') \n \t });}); }"

if (!fs.existsSync(newpath)){
    fs.mkdirSync(newpath, { recursive: true });
    fs.mkdirSync( path.join(newpath, '/pages'), { recursive: true });
    try {
      
       
        const data = fs.writeFileSync(path.join(newpath, "index.js"), content);
        //file written successfully
      } catch (err) {
        console.error(err)
      }
}

