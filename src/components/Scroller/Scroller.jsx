import React, { Children } from "react";
import "./Scroller.css";

export default function Scroll({ children }) {
  return (
    <div className="scroller">
      {Children.map(children, (child) => Children.only(child))}
    </div>
  );
}
