import { useEffect, useState } from "react";
const useLoadingGrid = () => {
  const [text, setText] = useState("LOADING");

  const updateText = (text) => {
    if (text === "LOADING...") return setText("LOADING");
    setText(text + ".");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateText(text);
    }, 1000);

    return () => clearInterval(interval);
  }, [text]);

  return text;
};
export default useLoadingGrid;
