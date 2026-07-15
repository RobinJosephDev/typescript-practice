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
let bands = [];
bands.push("Van Halen");
//tuple
let myTuple = ["Robin", 37, true]; //type annotation
//object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = {};
myObj = bands;
const exampleObj = {
    prop1: "Robin",
    prop2: true,
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [44, 53, "Can you see me?"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: [44, 5673, "Can you see me too?"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}!`;
};
console.log(greetGuitarist(jp));
//enum
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["E"] = 4] = "E";
})(Grade || (Grade = {}));
console.log(Grade.A);
export {};
//# sourceMappingURL=main.js.map