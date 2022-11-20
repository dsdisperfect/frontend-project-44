import basisOfGames from '../src/index.js';
import { getRandomIntenger, generateProgression } from '../src/utils.js';

const brainProgression = () => {
  const desc = 'What number is missing in the progression?';

  const progression = () => {
    const col = generateProgression();

    const indexHiddenNum = getRandomIntenger(0, col.length - 1);
    const result = col[indexHiddenNum];

    col[indexHiddenNum] = '..';

    const question = `${col.join(' ')}`;

    return [question, String(result)];
  };
  basisOfGames(desc, progression);
};

export default brainProgression;
