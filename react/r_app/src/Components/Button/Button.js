import "./button.css";

export default function Btn({ text, style }) {
  return <button className={style}>{text}</button>;
}
