import { basisOfGames } from '../src/index.js';
import { randomIntenger } from '../src/randomIntenger.js';

export const brainCalc = () => {

    let desc = 'What is the result of the expression?';


    const calc = () => {
        let number1 = randomIntenger(1, 100);
        let number2 = randomIntenger(1, 100);
        let operands = ['+', '-', '*'];
        let operand = operands[randomIntenger(0,2)];
        let result;
        let question = `${number1} ${operand} ${number2}`;
        switch (operand) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
        }
        return [question, result];
    }
    basisOfGames(desc, calc)
}