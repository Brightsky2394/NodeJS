const fs = require('fs'); // require the file system
const zlib = require('zlib'); // require zlib for compressing file

// read stream using utf8 encoding type in example.txt
const readStream = fs.createReadStream('example.txt', 'utf8');

//write stream into main.txt
const writeStream = fs.createWriteStream('main.txt');

// readStream.on('data', chunk => {
//     writeStream.write(chunk);
// })

// pipe usage in writing from source stream into destination stream
readStream.pipe(writeStream);

// compress a file
const gzip = zlib.createGzip();
const readStream1 = fs.createReadStream('example.txt', 'utf8');
const writeStream1 = fs.createWriteStream('index.txt.gz');

readStream1.pipe(gzip).pipe(writeStream1); // compress the source stream into the destination stream

const gunzip = zlib.createGunzip(); // uncompressed a file
const readStream2 = fs.createReadStream('index.txt.gz');
const writeStream2 = fs.createWriteStream('result.txt');

readStream2.pipe(gunzip).pipe(writeStream2); // uncompressed a file