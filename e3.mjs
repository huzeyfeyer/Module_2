import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let month = await userInput.question('welke maand wil je leren? ');

switch(month){
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        console.log('Er zijn 31 dagen in ' + month)
        break
    case 'februari':
        console.log('Er zijn 28/29 dagen in ' + month)
        break
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        console.log('Er zijn 30 dagen in ' + month)
        break

    default:
        console.log('Vul een geldig maand in. ')
}

process.exit()