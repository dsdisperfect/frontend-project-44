const gcdFind = (a, b) => {
  let result;
  for (let i = 1; i <= 100; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return result;
};

export default gcdFind;
