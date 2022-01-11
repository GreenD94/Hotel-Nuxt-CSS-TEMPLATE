
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'modules');

let modulesPath=[];


fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        let newpath=path.join(directoryPath, file);
        fs.readdir(newpath, function (err2, files2) {
            if (err2) {
                return console.log('Unable to scan directory: ' + err);
            } 
            files2.forEach(function (file2) {

                if (file2=="index.js") {
                    let relativePath="modules"+"/"+file+"/"+ file2;
                    modulesPath.push("'"+"~"+relativePath+"'");
                    
                    try {
                        let content="export default ["+modulesPath.join()+"]";
                       
                        const data = fs.writeFileSync(path.join(__dirname, "modulePath.js"), content);
                        //file written successfully
                      } catch (err) {
                        console.error(err)
                      }
                }

            });
         });
        
    });
});
