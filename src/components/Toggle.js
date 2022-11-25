import { useState } from "react";

export const ToggleItem = ({ id, chunk, children }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div className="single-history" key={id}>
      <span
        className="h-head"
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        ▶ {chunk.start} - {chunk.end}
      </span>

      {toggleThisElement && <div className="h-info">{children}</div>}
    </div>
  );
};
