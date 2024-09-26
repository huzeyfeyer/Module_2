import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num1 = parseFloat(await userInput.question('Geef een getal1 in:  '));
let num2 = parseFloat(await userInput.question('Geef een getal2 in:  '));

console.log('\n 1. optellen ')
console.log('2. aftrekken')
console.log('3. vermenigvuldigen')
console.log('4. delen \n')
let num3 = parseFloat(await userInput.question('Kies een operatie:  '));

switch(num3){
    case 1:
        console.log('Optellen is: ' + (num1+num2))
        break
    case 2:
        console.log('Aftrekken is: ' + (num1-num2))
        break
    case 3:
        console.log('Vermenigvuldigen is: ' + (num1*num2))
        break
    case 4:
        console.log('Delen is: ' + (num1/num2))
        break
    default:
        console.log('Geef een getal in tussen 1-4')
        
}

process.exit()