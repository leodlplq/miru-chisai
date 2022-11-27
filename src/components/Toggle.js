import { useState } from "react";

export const ToggleItem = ({ id, chunk, children }) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div className="single-history" key={id}>
      <span
        className="h-head"
        onClick={() => setToggleThisElement((prev) => !prev)}
      >
        {toggleThisElement ? "▼" : "▶"} {chunk.start} - {chunk.end}
      </span>

      {toggleThisElement && <div className="list-toggle">{children}</div>}
    </div>
  );
};
