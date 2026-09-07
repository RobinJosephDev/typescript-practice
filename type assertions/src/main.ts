type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific

let d = <One>"world"; //not usable in react
let e = <string | number>"world";

let addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat",
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
let nextal: number = addOrConcat(2, 2, "add") as number;

//10 as string;
//10 as unknown as string;

//DOM
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("img") as HTMLImageElement;
const myImg = (<HTMLImageElement>(
  document.getElementById("img")
)) as HTMLImageElement;

img.src;
myImg.src;
