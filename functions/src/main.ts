//type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//Literal types
let myName: "Robin";

let userName: "Robin" | "Michael" | "Dave";
userName = "Robin";

//Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello");
logMsg(add(3, 2));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};
logMsg(multiply(2, 2));

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(3, 2, 4));
logMsg(addAll(3, 2));
logMsg(sumAll(3, 2));

//rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 3, 4));

//never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
