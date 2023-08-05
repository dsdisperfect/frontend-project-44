import readlineSync from 'readline-sync';
import hello from './cli.js';

const roundsCount = 3;

const textcolor = { red: '\x1b[31m%s\x1b[0m', green: '\x1b[32m%s\x1b[0m' };

const runEngine = (task, generateRound) => {
  const name = hello();
  console.log(task);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log(textcolor.green, 'Correct!');
    } else {
      console.log(textcolor.red, `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.; 
        Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
