import randomIntenger from '../src/randomIntenger.js';
import basisOfGames from '../src/index.js';
import progrGenerate from '../src/progrGenerate.js';

const brainProgression = () => {
  const desc = 'What number is missing in the progression?';

  const progression = () => {
    const col = progrGenerate();

    const indexHiddenNum = randomIntenger(0, col.length - 1);
    const result = col[indexHiddenNum];

    col[indexHiddenNum] = '..';

    const question = `${col.join(' ')}`;

    return [question, String(result)];
  };
  basisOfGames(desc, progression);
};

export default brainProgression;
