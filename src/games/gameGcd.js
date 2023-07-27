import basisOfGames from '../index.js';
import getRandomIntenger from '../utils.js';

const playBrainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const findGcd = (x, y) => {
    if (y > x) return findGcd(y, x);
    if (!y) return x;
    return findGcd(y, x % y);
  };

  const gcd = () => {
    const num1 = getRandomIntenger(1, 100);
    const num2 = getRandomIntenger(1, 100);
    const question = `${num1} ${num2}`;

    const result = findGcd(num1, num2);

    return [question, String(result)];
  };
  basisOfGames(description, gcd);
};

export default playBrainGcd;
