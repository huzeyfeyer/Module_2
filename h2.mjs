import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let jaar = parseFloat(await userInput.question('Welke jaar wil je leren?  '));
let febDays = 28

if(jaar % 4 == 0 || jaar % 400 == 0 ){
    febDays++
}

console.log('Februari bevat ' + febDays + ' dagen.')

process.exit()