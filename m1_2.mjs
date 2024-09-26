import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('\n Kies een artiest: ')
console.log('1. Sting ')
console.log('2. ABBA')
console.log('3. Rod Stewart')
console.log('4. Blof \n')

let num1 = parseFloat(await userInput.question('Geef je keuze in: '));


switch(num1){
case 1:
    console.log( 'Je koos voor `Sting` ')
    console.log( 'Ze zijn de artist achter de hit: Englishman In New York')
    break
case 2:
    console.log( 'Je koos voor `ABBA`')
    console.log( 'Ze zijn de artist achter de hit: The Winner Takes It All')
    break
case 3:
    console.log( 'Je koos voor `Rod Stewart` ')
    console.log( 'Ze zijn de artist achter de hit:  I Don`t Want to Talk About It')
    break
case 4:
    console.log( 'Je koos voor `Blof` ')
    console.log( 'Ze zijn de artist achter de hit: Aan de kust')
    break

default:
    console.log('Geef je keuze in  tussen 1-4:')

}

    process.exit()

