import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let month = await userInput.question('welke maand wil je leren? ');

switch(month){
    case 'januari':
        console.log( 'Januari heeft 31 dagen.')
        break
    case 'februari':
        console.log( 'februari heeft 28/29 dagen.')
        break
    case 'maart':
        console.log( 'maart heeft 31 dagen.')
        break
    case 'april':
        console.log( 'april heeft 30 dagen.')
        break
    case 'mei':
        console.log( 'mei heeft 31 dagen.')
        break
    case 'juni':
        console.log( 'juni heeft 30 dagen.')
        break
    case 'juli':
        console.log( 'juli heeft 31 dagen.')
        break
    case 'augustus':
        console.log( 'augustus heeft 31 dagen.')
        break
    case 'september':
        console.log( 'september heeft 30 dagen.')
        break
    case 'oktober':
        console.log( 'oktober heeft 31 dagen.')
        break
    case 'november':
        console.log( 'november heeft 30 dagen.')
        break
    case 'december':
        console.log( 'december heeft 31 dagen.')
        break
    default:
        console.log('Vul een geldig maand in. ')
}

process.exit()