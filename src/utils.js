import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomIntenger = (min, max) => Math.floor((Math.random() * (max - min) + 1) + min);

export const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

export const generateProgression = () => {
  let num = getRandomIntenger(1, 20);
  const step = getRandomIntenger(1, 10);
  const length = getRandomIntenger(5, 10);

  const col = [num];

  for (let i = 1; i < length - 1; i += 1) {
    col[i] = (num + step);
    num = col[i];
  }
  return col;
};
