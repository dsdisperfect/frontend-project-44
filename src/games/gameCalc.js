import runEngine from '../index.js';
import getRandomIntenger from '../utils.js';

const calculate = (number1, operand, number2) => {
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

const getBrainCalc = () => {
  const number1 = getRandomIntenger(1, 100);
  const number2 = getRandomIntenger(1, 100);
  const operands = ['+', '-', '*'];
  const operand = operands[getRandomIntenger(0, operands.length - 1)];
  const answer = String(calculate(number1, operand, number2));
  const question = `${number1} ${operand} ${number2}`;
  return [question, answer];
};

export default () => {
  const description = 'What is the result of the expression?';
  runEngine(description, getBrainCalc);
};
