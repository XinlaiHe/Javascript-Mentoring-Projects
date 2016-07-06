'use strict';
const fs = require('fs');

const zlib = require('zlib');
const gzlip = zlib.createGzip();
const fin = fs.createReadStream(process.argv[2]);
const fout = fs.createWriteStream(process.argv[3]);
fin.pipe(gzlip).pipe(fout);

