"use strict";
//*******************************CLASS AND SUB-CLASS***********************************
class Coder {
    name;
    music;
    age;
    lang;
    secondLang;
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hi im ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 35);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
class WebDev extends Coder {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I like ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        ((this.name = name), (this.instrument = instrument));
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
//*******************************STATIC CLASS MEMBERS***********************************
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Steve.id);
console.log(Peeps.count);
//*******************************GETTERS AND SETTERS***********************************
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zepplin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "zz top"];
console.log(MyBands.data);
MyBands.data = ["Van Helen"];
//# sourceMappingURL=main.js.map