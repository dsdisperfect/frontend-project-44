import basisOfGames from '../index.js';
import getRandomIntenger from '../utils.js';

const playBrainProgression = () => {
  const description = 'What number is missing in the progression?';

  const generateProgression = () => {
    let num = getRandomIntenger(1, 20);
    const step = getRandomIntenger(1, 10);
    const length = getRandomIntenger(5, 10);

    const col = [num];

    for (let i = 1; i < length - 1; i += 1) {
      col[i] = (num + step);
      num = col[i];
    }
    return col;
  };

  const progression = () => {
    const col = generateProgression();

    const indexHiddenNum = getRandomIntenger(0, col.length - 1);
    const result = col[indexHiddenNum];

    col[indexHiddenNum] = '..';

    const question = `${col.join(' ')}`;

    return [question, String(result)];
  };
  basisOfGames(description, progression);
};

export default playBrainProgression;
