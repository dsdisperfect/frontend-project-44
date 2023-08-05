import runEngine from '../index.js';
import { getBrainAnswer } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const getBrainIsPrime = () => getBrainAnswer(isPrime);

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(description, getBrainIsPrime);
};
