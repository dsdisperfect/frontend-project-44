import basisOfGames from '../index.js';
import getRandomIntenger from '../utils.js';

const playBrainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

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
  basisOfGames(description, isEven);
};

export default playBrainEven;
