import runEngine from '../index.js';
import { getBrainResponse } from '../utils.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, getBrainResponse(isEven));
};
