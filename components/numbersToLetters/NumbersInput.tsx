import getWords from "@/helpers/words";
import React, { Dispatch, SetStateAction, cache } from "react";

const NumbersInput = ({
  setString,
}: {
  setString: Dispatch<SetStateAction<any>>;
}) => {
  const handleChange = cache((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = getWords(e.target.valueAsNumber);
    console.log(value);
    
    setString(value);
  });
  return (
    <>
      <label htmlFor="numbers_input">Input numbers:</label>
      <input
        type="number"
        name="numbers_input"
        id="numbers_input"
        onChange={handleChange}
      />
    </>
  );
};

export default NumbersInput;
