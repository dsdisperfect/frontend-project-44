import runEngine from '../index.js';
import getRandomIntenger from '../utils.js';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const getBrainGcd = () => {
  const num1 = getRandomIntenger(1, 100);
  const num2 = getRandomIntenger(1, 100);
  const question = `${num1} ${num2}`;

  const answer = String(findGcd(num1, num2));

  return [question, answer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runEngine(description, getBrainGcd);
};
