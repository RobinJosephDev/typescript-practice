//array
let stringArr = ["one", "hey", "Dave"];

//union
let guitars = ["strat", "les paul", 987];

let mixedData = ["EVH", 1984, true]; //type inference

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

//tuple
let myTuple: [string, number, boolean] = ["Robin", 37, true]; //type annotation

//object
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = {};
myObj = bands;

const exampleObj = {
  prop1: "Robin",
  prop2: true,
};

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [44, 53, "Can you see me?"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: [44, 5673, "Can you see me too?"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name.toUpperCase()}!`;
};

console.log(greetGuitarist(jp));

//enum
enum Grade {
  A,
  B,
  C,
  D,
  E,
}
console.log(Grade.A)