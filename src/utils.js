const getRandomIntenger = (min, max) => Math.floor((Math.random() * (max - min) + 1) + min);

const getBrainResponse = (func) => {
  const number = getRandomIntenger(1, 100);
  const question = `${number}`;
  const answer = func(number) ? 'yes' : 'no';

  return [question, answer];
};

export { getRandomIntenger, getBrainResponse };
