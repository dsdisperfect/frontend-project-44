import basisOfGames from '../index.js';
import getRandomIntenger from '../utils.js';

const playBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = () => {
    const number = getRandomIntenger(1, 100);
    const question = `${number}`;
    let result = 'yes';

    for (let i = 2; i < Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        result = 'no';
      }
    }
    return [question, result];
  };
  basisOfGames(description, isPrime);
};

export default playBrainPrime;
