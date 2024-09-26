import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num1 = parseFloat(await userInput.question('Geef een getal1 in:  '));
let num2 = parseFloat(await userInput.question('Geef een getal2 in:  '));
let num3 = parseFloat(await userInput.question('Geef een getal3 in:  '));
let num4 = parseFloat(await userInput.question('Geef een getal4 in:  '));
let num5 = parseFloat(await userInput.question('Geef een getal5 in:  '));

let highest = num1
let lowest = num1
let average = ((num1+num2+num3+num4+num5)/5) 

if(highest < num2){
    highest = num2    
}
if( lowest > num2){
    lowest = num2
}

if(highest < num3){
    highest = num3    
}
if( lowest > num3){
    lowest = num3
}

if(highest < num4){
    highest = num4    
}
if( lowest > num4){
    lowest = num4
}

if(highest < num5){
    highest = num5    
}
if( lowest > num5){
    lowest = num5
}

console.log('Het hoogste getal is: ' + highest)
console.log('Het laagste getal is: ' + lowest)
console.log('Het gemiddelde is: ' + average)

process.exit()
