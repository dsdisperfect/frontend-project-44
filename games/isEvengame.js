import basisOfGames from '../src/index.js';
import randomIntenger from '../src/randomIntenger.js';

const brainEven = () => {
  const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = () => {
    const num = randomIntenger(1, 100);
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
