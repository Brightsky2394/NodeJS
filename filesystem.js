// require the file system module
const fs = require('fs');

// read the content of readline.js using the utf8 encoding type
fs.readFile('readline.js', 'utf8', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log (data);
    }

});

// create a file with name example.js and write text into it
fs.writeFile('example.js', 'Welcome to the world of NodeJS', (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File is successfully created");
    }
})

// append and create the file and add text to it if it does not exist before 
fs.appendFile('example.js', ' a single threaded, non blocking and asynchronous programming', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('example.js is successfully modified');
    }
})

// rename example.js to example1.js
fs.rename('example.js', 'example1.js', err => {
    if (err) {
        throw err;
    } else {
        console.log('File is successfully renamed');
    }
})

// delete a file from the file system
fs.unlink('example1.js', err => {
    if (err) {
        throw err
    } else {
        console.log('example1.js is successfully deleted');
    }
})

// create a new folder or directory called main.js and create a file called index.txt inside it
// fs.mkdir('main.js', (err) => {
//     if (err)
//         console.log(err)
//     else {
//         fs.writeFile('./main.js/index.txt', 'Hello dev, welcome to the world of NodeJS', err => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log('index.txt is successfully created');
//             }
//         })
//     }
// })

// delete the file index.txt inside main.js folder and then delete the main.js folder
// fs.unlink('./main.js/index.txt', err => {
//     if (err) {
//         throw err;
//     } else {
//         fs.rmdir('main.js', err => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log('main.js is successfully deleted');
//             }
//         })
//     }
// })

fs.readdir('main.js', (err, files) => {
    if (err) {
        throw err;
    } else {
        files.forEach(function(file) {
            fs.unlink('main.js/' + file, err => {
                if (err) {
                    throw err;
                } else {
                    console.log('Files are successfully deleted');
                }
            })
        })
    }
})