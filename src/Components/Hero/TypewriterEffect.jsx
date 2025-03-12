import React, { useEffect, useState } from "react";

const TypewriterEffect = ({ text = "", speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (text[index] !== undefined) {
        setDisplayedText((prev) => [...prev, text[index]]);  
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText.join("")}</span>;  
};

export default TypewriterEffect;
