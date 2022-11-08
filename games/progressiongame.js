import { randomIntenger } from "../src/randomIntenger.js";
import { basisOfGames } from "../src/index.js";
import { progrGenerate } from "../src/progrGenerate.js";

export const brainProgression = () => {
    const desc = 'What number is missing in the progression?';

    const progression = () => {

        let col = progrGenerate();

        let indexHiddenNum = randomIntenger(0, col.length - 1);
        let result = col[indexHiddenNum];

        col[indexHiddenNum] = '..';

        let question = `${col.join(' ')}`;

        return [question, result];
    }
    basisOfGames(desc, progression);

}