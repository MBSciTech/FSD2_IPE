const fs = require('fs');

fs.readFile('source.txt','utf-8',(err,data)=>{
    if (err) return console.log('Error : '+err);
    fs.writeFile('destination.txt',data,(err)=>{
        if (err) return console.log(err);
        console.log('File copying successful !');
    })
});