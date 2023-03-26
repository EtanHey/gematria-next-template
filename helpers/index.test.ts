import getGematria from "./gematria";
import getWords from "./words";

describe("getGematria", () => {
  it("should return 0 for invalid input", () => {
    expect(getGematria("")).toBe(0);
  });
  it("should return 0 for invalid input", () => {
    expect(getGematria("t")).toBe(0);
  });
  it("should return 0 for invalid input", () => {
    expect(getGematria("5")).toBe(0);
  });
  it("should return 5000 for first letter ה input", () => {
    expect(getGematria("ה")).toBe(5000);
  });
  it("should return 1 for א input", () => {
    expect(getGematria("א")).toBe(1);
  });
  it("should return 2 for ב input", () => {
    expect(getGematria("ב")).toBe(2);
  });
  it("should return 3 for ג input", () => {
    expect(getGematria("ג")).toBe(3);
  });
  it("should return 4 for ד input", () => {
    expect(getGematria("ד")).toBe(4);
  });
  it("should return 5 for ה input", () => {
    expect(getGematria("אה") - 1).toBe(5);
  });
  it("should return 6 for ו input", () => {
    expect(getGematria("ו")).toBe(6);
  });
  it("should return 7 for ז input", () => {
    expect(getGematria("ז")).toBe(7);
  });
  it("should return 8 for ח input", () => {
    expect(getGematria("ח")).toBe(8);
  });
  it("should return 9 for ט input", () => {
    expect(getGematria("ט")).toBe(9);
  });
  it("should return 10 for י input", () => {
    expect(getGematria("י")).toBe(10);
  });
  it("should return 20 for ך input", () => {
    expect(getGematria("ך")).toBe(20);
  });
  it("should return 20 for כ input", () => {
    expect(getGematria("כ")).toBe(20);
  });
  it("should return 30 for ל input", () => {
    expect(getGematria("ל")).toBe(30);
  });
  it("should return 40 for ם input", () => {
    expect(getGematria("ם")).toBe(40);
  });
  it("should return 40 for מ input", () => {
    expect(getGematria("מ")).toBe(40);
  });
  it("should return 50 for ן input", () => {
    expect(getGematria("ן")).toBe(50);
  });
  it("should return 50 for נ input", () => {
    expect(getGematria("נ")).toBe(50);
  });
  it("should return 60 for ס input", () => {
    expect(getGematria("ס")).toBe(60);
  });
  it("should return 70 for ע input", () => {
    expect(getGematria("ע")).toBe(70);
  });
  it("should return 80 for ף input", () => {
    expect(getGematria("ף")).toBe(80);
  });
  it("should return 80 for פ input", () => {
    expect(getGematria("פ")).toBe(80);
  });
  it("should return 90 for ץ input", () => {
    expect(getGematria("ץ")).toBe(90);
  });
  it("should return 90 for צ input", () => {
    expect(getGematria("צ")).toBe(90);
  });
  it("should return 100 for ק input", () => {
    expect(getGematria("ק")).toBe(100);
  });
  it("should return 200 for ר input", () => {
    expect(getGematria("ר")).toBe(200);
  });
  it("should return 300 for ש input", () => {
    expect(getGematria("ש")).toBe(300);
  });
  it("should return 400 for ת input", () => {
    expect(getGematria("ת")).toBe(400);
  });
  it("should return 5783 for התשפ״ג input", () => {
    expect(getGematria("התשפ״ג")).toBe(5783);
  });
  it("should return 461 for איתן input", () => {
    expect(getGematria("איתן")).toBe(461);
  });
});
describe("getWords", () => {
  it("should return empty array for invalid input", () => {
    expect(getWords(0)).toEqual([]);
  });
  it("should return an array of כ or ך for 20 input", () => {
    expect(getWords(20)).toEqual(["כ", "ך"]);
  });
  it("should return an array of נ or ן for 50 input", () => {
    expect(getWords(54)).toEqual(["נ", "ן"]);
  });
});
