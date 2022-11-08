import randomIntenger from './randomIntenger.js';

const progrGenerate = () => {
  let num = randomIntenger(1, 20);
  const step = randomIntenger(1, 10);
  const length = randomIntenger(5, 10);

  const col = [num];

  for (let i = 1; i < length - 1; i += 1) {
    col[i] = (num + step);
    num = col[i];
  }
  return col;
};

export default progrGenerate;
