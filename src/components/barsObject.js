const nBars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
const barObject = [];
nBars.forEach((i) => {
  if (i === 1) {
    barObject.push({
      id: barObject.length,
      value: i,
      className: `bars${barObject.length}`,
    });
  } else {
    barObject.push({
      id: barObject.length,
      value: i,
      className: `bars${barObject.length}`,
    });
  }
});

export default barObject;
