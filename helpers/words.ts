import { NumbersToLetters } from "@/types";

const getWords = (number: number): string[] => {
  let words: string[] = [];
  Object.entries(NumbersToLetters).forEach(([key, value]) => {
    const index = +key > 20 ? Math.round(+key / 10) * 10 : +key;
    if (index === number) {
      words = [...words, value];
    } else {
      const roundNumber = number > 20 ? Math.round(number / 10) * 10 : number;
      if (roundNumber === index) {
        words = [...words, value];
      }
    }
  });
  return words;
};
export default getWords;
