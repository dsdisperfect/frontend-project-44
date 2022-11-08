import basisOfGames from '../src/index.js';
import randomIntenger from '../src/randomIntenger.js';

const brainCalc = () => {
  const desc = 'What is the result of the expression?';

  const calc = () => {
    const number1 = randomIntenger(1, 100);
    const number2 = randomIntenger(1, 100);
    const operands = ['+', '-', '*'];
    const operand = operands[randomIntenger(0, 2)];
    let result;
    const question = `${number1} ${operand} ${number2}`;
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
      default:
        result = 1;
    }
    return [question, String(result)];
  };
  basisOfGames(desc, calc);
};

export default brainCalc;
