var fs = require('fs');
var molecules = require('./molecules.json');


console.log(molecules[2].c1[1].z);

fs.readFile('./molecules.json','utf-8' , (err, data) =>{
    //console.log(data);
})