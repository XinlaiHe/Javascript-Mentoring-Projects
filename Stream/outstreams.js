'use strict';
const fs = require('fs');
const fin = fs.createReadStream(process.argv[2]);
fin.setEncoding('utf-8');

let numSpaces = 0;
/*Floating*/
// fin.on('data', (chunk)=>{
//   chunk.splite('').forEach((c)=>{
//       if(c ===' '){
//         numSpaces++;
//       }
//   })
// })
/*Non-floating*/
fin.on('readable', () => {
  const chunk = fin.read();
  if(chunk === null){
    return;
  }
  chunk.split('').forEach((c)=>{
    if(c === ' '){
      numSpaces++;
    }
  })
})
fin.on('end', ()=>{
  console.log("There is " +  numSpaces + " spaces");
})
