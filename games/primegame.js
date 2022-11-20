import basisOfGames from '../src/index.js';
import { getRandomIntenger } from '../src/utils.js';

const brainPrime = () => {
  const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = () => {
    const number = getRandomIntenger(1, 100);
    const question = `${number}`;
    let result = 'yes';

    for (let i = 2; i < number ** -2; i += 1) {
      if (number % i === 0) {
        result = 'no';
      }
    }
    return [question, result];
  };
  basisOfGames(desc, isPrime);
};

export default brainPrime;
