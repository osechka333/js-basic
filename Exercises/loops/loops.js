const arrayToFilter = Array.from(new Array(1000), () => {
  const randomValue = Math.random();
  const isNumericValue = randomValue >= 0.21;

  if (isNumericValue) {
    return Math.floor(Math.random() * 10);
  }

  if (randomValue < 0.07) {
    return NaN;
  }

  if (randomValue > 0.07 && randomValue < 0.17) {
    return undefined;
  }

  return null;
});
