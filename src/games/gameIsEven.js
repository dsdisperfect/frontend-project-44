import runEngine from '../index.js';
import getRandomIntenger from '../utils.js';

const isEven = (num) => num % 2 === 0;

const getBrainIsEven = () => {
  const num = getRandomIntenger(1, 100);
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, getBrainIsEven);
};
