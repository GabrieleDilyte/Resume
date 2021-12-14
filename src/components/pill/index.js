import "./index.css";
import cx from "classnames";

function Pill({ color, children }) {
  const className = cx(
    "pill",
    ["green", "yellow", "red"].includes(color) && `pill--${color}`
  );

  return <span className={className}>{children}</span>;
}

export default Pill;
