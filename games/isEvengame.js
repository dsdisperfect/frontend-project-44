import { basisOfGames } from '../src/index.js';
import { randomIntenger } from '../src/randomIntenger.js';

export const brainEven = () => {
    let desc = 'Answer "yes" if the number is even, otherwise answer "no".';

    let isEven = () => {
        let num = randomIntenger(1, 100);
        let question = `${num}`;
        let result;

        num % 2 === 0 ? result = 'yes' : result = 'no';

        return [question, result];
    }
    basisOfGames(desc, isEven);
}