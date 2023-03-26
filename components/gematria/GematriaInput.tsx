import getGematria from "@/helpers/gematria";
import React, { Dispatch, SetStateAction, cache } from "react";

const GematriaInput = ({
  setNumber,
}: {
  setNumber: Dispatch<SetStateAction<any>>;
}) => {
  const handleChange = cache((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = getGematria(e.target.value);
    setNumber(value);
  });
  return (
    <>
      <label htmlFor="gematria_input">Input hebrew:</label>
      <input
        name="gematria_input"
        id="gematria_input"
        onChange={handleChange}
      />
    </>
  );
};

export default GematriaInput;
