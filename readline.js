const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 } \n`, 
    (userInput) => {
        if (Number(userInput.trim()) === answer) {
            rl.close();
        } else {
            rl.setPrompt("The provided response is wrong please try again \n");
            rl.prompt();
            rl.on('line', (userInput) => {
                if (Number(userInput.trim()) === answer) {
                    rl.close()
                } else {
                    rl.setPrompt(`The provided response of ${ userInput } is incorrect \n`);
                    rl.prompt();
                }
            })
        }
    }
)

rl.on('close', () => {
    console.log('Correct!!!');
})