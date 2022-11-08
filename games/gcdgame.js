import basisOfGames from '../src/index.js';
import randomIntenger from '../src/randomIntenger.js';
import gcdFind from '../src/gcdFind.js';

const brainGcd = () => {
  const desc = 'Find the greatest common divisor of given numbers.';

  const gcd = () => {
    const num1 = randomIntenger(1, 100);
    const num2 = randomIntenger(1, 100);
    const question = `${num1} ${num2}`;

    const result = gcdFind(num1, num2);

    return [question, String(result)];
  };
  basisOfGames(desc, gcd);
};

export default brainGcd;
