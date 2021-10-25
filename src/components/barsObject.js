const nBars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
const barObject = [];
nBars.forEach((i) => {
  if (i === 1) {
    barObject.push({
      id: barObject.length,
      value: i,
      className: `bars${i}`,
      style: {
        position: "absolute",
        width: " 6px",
        height: " 80px",
        top: " 205px",
        background: " #cecece",
        left: `${barObject.length * 21 + 18}px`,
      },
    });
  } else {
    barObject.push({
      id: barObject.length,
      value: i,
      className: `bars${i}`,
      style: {
        position: "absolute",
        width: " 6px",
        height: " 40px",
        top: " 225px",
        background: " #cecece",
        left: `${barObject.length * 21 + 18}px`,
      },
    });
  }
});

export default barObject;
