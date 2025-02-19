import React from "react";
import "./btn.css";
export const LText = ({ text, style }) => {
  return (
    <div>
      <h3 className={style}>{text}</h3>
    </div>
  );
};
