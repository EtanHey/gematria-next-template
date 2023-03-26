import { LettersToNumbers } from "@/types";

const getGematria = (hebrew: string): number => {
  const lettersArray = hebrew.split("");
  const resultsArray = lettersArray.map((character, letterIndex) => {
    const currentNumber = () => {
      for (let index in LettersToNumbers) {
        if (character === LettersToNumbers[index]) {
          if (letterIndex === 0 && character === "ה") return 5000;
          return Number(index);
        } else {
          continue;
        }
      }
      return 0;
    };
    return currentNumber();
  });
  const numbersArray = resultsArray.map((result) => {
    if (!result) return 0;
    return result;
  });
  const gematria = numbersArray.reduce((a, b) => {
    const roundedB = b > 20 ? Math.round(b / 10) * 10 : b;
    return a + roundedB;
  }, 0);
  return gematria;
};

export default getGematria;
