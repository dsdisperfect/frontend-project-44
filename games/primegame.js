import { basisOfGames } from '../src/index.js';
import { randomIntenger } from '../src/randomIntenger.js';

export const brainPrime = () => {
    const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    const isPrime = () => {
        let number = randomIntenger(1, 100);
        let question = `${number}`;
        let result = 'yes';

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result = 'no'; 
            }
        }
        return [question, result];
        
    }
    basisOfGames(desc, isPrime);
}