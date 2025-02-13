import React from "react";

export default function TextBox({ text = "please enter text" }) {
  return <input placeholder={text}></input>;
}
