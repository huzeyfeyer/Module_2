import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen: \n')

let correctAnswers = 0


let answer1 = await userInput.question('Vraag 1: Wat is de kleur van de lucht op een heldere dag?');
console.log('Jouw antwoord: ' + answer1 )
switch(answer1){
    case 'Blauw':
        console.log('Goed antwoord!\n')
        correctAnswers++;
        break
    default:
        console.log('Fout antwoord. Het juiste antwoord is: Blauw\n ')
}

let answer2 = await userInput.question('Vraag 2: Hoeveel dagen zitten er in een week? ');
console.log('Jouw antwoord: ' + answer2 )
switch(answer2){
    case 'Zeven':
        console.log('Goed antwoord!\n')
        correctAnswers++;
        break
    default:
        console.log('Fout antwoord. Het juiste antwoord is: Zeven \n')
}

let answer3 = await userInput.question('Vraag 3: Wat drinkt een koe? ');
console.log('Jouw antwoord: ' + answer3 )
switch(answer3){
    case 'Water':
        console.log('Goed antwoord!\n')
        correctAnswers++;
        break
    default:
        console.log('Fout antwoord. Het juiste antwoord is: Water\n')
}

let answer4 = await userInput.question('Vraag 4: Welk getal komt na 9? ');
console.log('Jouw antwoord: ' + answer4 )
switch(answer4){
    case '10':
        console.log('Goed antwoord!\n')
        correctAnswers++;
        break
    default:
        console.log('Fout antwoord. Het juiste antwoord is: 10 \n')
}

let answer5 = await userInput.question('Vraag 5: Hoe heet de grootste planeet in ons zonnestelsel? ');
console.log('Jouw antwoord: ' + answer5 )
switch(answer5){
    case 'Jupiter':
        console.log('Goed antwoord!\n')
        correctAnswers++;
        break
    default:
        console.log('Fout antwoord. Het juiste antwoord is: Jupiter\n ')
}

console.log('Je hebt ' + correctAnswers + ' van de 5 vragen juist beantwoord.')

process.exit()