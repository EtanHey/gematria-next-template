"use client";
import React, { useState } from "react";
import NumbersInput from "./NumbersInput";

const LettersDisplay = () => {
  const [string, setString] = useState([""]);
  return (
    <div>
      <h1>
        {string.map((letter, index) => {
          if (index !== 0) {
            return <span key={index}> / {letter}</span>;
          }
          return <span key={index}>{letter}</span>;
        })}
      </h1>
      <NumbersInput {...{ setString }} />
    </div>
  );
};

export default LettersDisplay;
