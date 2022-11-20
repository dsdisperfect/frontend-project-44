import basisOfGames from '../src/index.js';
import { findGcd, getRandomIntenger } from '../src/utils.js';

const brainGcd = () => {
  const desc = 'Find the greatest common divisor of given numbers.';

  const gcd = () => {
    const num1 = getRandomIntenger(1, 100);
    const num2 = getRandomIntenger(1, 100);
    const question = `${num1} ${num2}`;

    const result = findGcd(num1, num2);

    return [question, String(result)];
  };
  basisOfGames(desc, gcd);
};

export default brainGcd;
