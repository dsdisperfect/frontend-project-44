import runEngine from '../index.js';
import getRandomIntenger from '../utils.js';

const generateProgression = (start, step, length) => {
  const col = [start];

  for (let i = 1; i < length - 1; i += 1) {
    col[i] = (col[i - 1] + step);
  }
  return col;
};

const getBrainProgression = () => {
  const num = getRandomIntenger(1, 20);
  const step = getRandomIntenger(1, 10);
  const length = getRandomIntenger(5, 10);

  const col = generateProgression(num, step, length);

  const indexHiddenNum = getRandomIntenger(0, col.length - 1);
  const answer = String(col[indexHiddenNum]);

  col[indexHiddenNum] = '..';

  const question = `${col.join(' ')}`;

  return [question, answer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  runEngine(description, getBrainProgression);
};
