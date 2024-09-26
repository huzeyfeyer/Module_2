let minimum = 7 
let maximum = 35  

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num1 = parseFloat(await userInput.question('Geef mij een getal:  '));

if(minimum < num1 && num1 < maximum){
    console.log('Je getal ' + num1 + ' ligt tussen ' + minimum + ' en ' + maximum)
}
else if(num1 <= minimum || maximum <= num1 ){
    console.log('Je getal ' + num1 + ' ligt niet tussen ' + minimum + ' en ' + maximum)
}
else{
    console.log('Vul een getal in.')
}

process.exit()