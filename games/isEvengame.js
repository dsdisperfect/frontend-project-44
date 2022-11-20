import basisOfGames from '../src/index.js';
import { getRandomIntenger } from '../src/utils.js';

const brainEven = () => {
  const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = () => {
    const num = getRandomIntenger(1, 100);
    const question = `${num}`;
    let result;

    if (num % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }

    return [question, result];
  };
  basisOfGames(desc, isEven);
};

export default brainEven;
