export default value => {
  const formattedValue = Array.from(value.toString())
    .reverse()
    .reduce((accumulator, current, index) => {
      accumulator.unshift(current);
      if (value >= 1000 && (index + 1) % 3 === 0) {
        accumulator.unshift('.');
      }
      return accumulator;
    }, [])
    .join('');

  return `$${formattedValue}`;
};
