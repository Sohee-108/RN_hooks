import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("plz dont leave");
  useBeforeLeave(begForLife);
  return <div className="App"></div>;
};

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);