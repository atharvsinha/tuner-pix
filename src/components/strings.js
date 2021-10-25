const stringList = ["E", "A", "D", "G", "B", "E1"];

const temp = [];

stringList.forEach((string) => {
  temp.push({
    id: string,
    text: string.charAt(0),
    className1: "strings",
    className2: "random",
  });
});

export const stringObject = temp;

export default String = ({ id, text, className1, className2 }) => {
  return (
    <div className={className1} id={id}>
      <div className={className2}>{text}</div>
    </div>
  );
};
