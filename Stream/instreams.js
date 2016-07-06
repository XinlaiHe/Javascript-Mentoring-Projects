'use strict';
const fs = require('fs');
const fout = fs.createWriteStream(process.argv[2]);

/*Floating*/
// process.stdin.on('data', (chunk)=>{
//   fout.write(chunk);
//   //process.stdout.write(chunk);
// })
//use cat test.txt to get info

/*Non-floating*/
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    fout.write(chunk);
    process.stdout.write(chunk);
  }
});