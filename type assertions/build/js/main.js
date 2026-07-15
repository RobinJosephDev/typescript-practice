let a = "hello";
let b = a; //less specific
let c = a; //more specific
let d = "world"; //not usable in react
let e = "world";
let addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let nextal = addOrConcat(2, 2, "add");
export {};
//10 as string;
//10 as unknown as string;
//DOM
//# sourceMappingURL=main.js.map