import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num1 = parseFloat(await userInput.question('Geef mij getal1:  '));

if( num1%2==0){
    console.log(num1+ ' is even.')
}
else if( num1%2!=0){
    console.log(num1+ ' is oneven.')
}
else{
    console.log('Vul een getal in.')
}

process.exit()