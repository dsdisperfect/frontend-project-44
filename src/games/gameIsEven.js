import runEngine from '../index.js';
import { getBrainAnswer } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const getBrainIsEven = () => getBrainAnswer(isEven);

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, getBrainIsEven);
};
