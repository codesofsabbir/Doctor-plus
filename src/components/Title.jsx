import React from "react";

function Title({ title, bg = "#F0DA6A", className }) {
  return (
    <span
      className={`rounded-full px-7 py-2 ${className}`}
      style={{ background: bg }}
    >
      {title}
    </span>
  );
}

export default Title;
