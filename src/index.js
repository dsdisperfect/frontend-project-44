import readlineSync from 'readline-sync';
import hello from './cli.js';

const basisOfGames = (desc, task) => {
  let answer; let correctAnswer; let
    question;
  const name = hello();

  console.log(desc);

  for (let i = 0; i < 3; i += 1) {
    [question, correctAnswer] = task();

    console.log(`Question: ${question}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.;
            Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}!`);
};
export default basisOfGames;
