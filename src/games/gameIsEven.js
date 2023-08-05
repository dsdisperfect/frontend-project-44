import runEngine from '../index.js';
import getRandomIntenger from '../utils.js';

const isEven = (num) => num % 2 === 0;

const getBrainIsEven = () => {
  const number = getRandomIntenger(1, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, getBrainIsEven);
};
