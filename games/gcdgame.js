import { basisOfGames } from "../src/index.js";
import { randomIntenger } from "../src/randomIntenger.js";
import { gcdFind } from "../src/gcdFind.js";

export const brainGcd = () => {
    const desc = 'Find the greatest common divisor of given numbers.';

    const gcd = () => {
        let num1 = randomIntenger(1, 100);
        let num2 = randomIntenger(1, 100);
        let question = `${num1} ${num2}`;

        let result = gcdFind(num1, num2);

        return [question, result]
    }
    basisOfGames(desc, gcd)
}
