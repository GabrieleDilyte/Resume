import Separator from "../separator";

function Education({ school, period, diploma, separator }) {
  return (
    <div className="school-info">
      <p> {school} </p>
      <p> {period} </p>
      <p> {diploma} </p>
      {separator && <Separator isShort></Separator>}
    </div>
  );
}

export default Education;
