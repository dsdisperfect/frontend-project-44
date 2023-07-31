import runEngine from '../index.js';
import getRandomIntenger from '../utils.js';

const isPrime = (num) => {
  if (num === 1) return false;
  if (num % 2 === 0 && num !== 2) return false;
  for (let i = 3; i < Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const getBrainIsPrime = () => {
  const number = getRandomIntenger(1, 100);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(description, getBrainIsPrime);
};
