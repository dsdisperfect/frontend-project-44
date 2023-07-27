import basisOfGames from '../index.js';
import getRandomIntenger from '../utils.js';

const calculate = (eqation) => {
  const [number1, operand, number2] = eqation;
  switch (operand) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 1;
  }
};

const playBrainCalc = () => {
  const description = 'What is the result of the expression?';

  const getBrainCalc = () => {
    const number1 = getRandomIntenger(1, 100);
    const number2 = getRandomIntenger(1, 100);
    const operands = ['+', '-', '*'];
    const operand = operands[getRandomIntenger(0, operands.length - 1)];
    const result = calculate([number1, operand, number2]);
    const question = `${number1} ${operand} ${number2}`;
    return [question, String(result)];
  };
  basisOfGames(description, getBrainCalc);
};

export default playBrainCalc;
