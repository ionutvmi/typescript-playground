function withOptionalParams(first: string, second?: string) {
    console.log(`We always have the ${first}`);

    // we need the ?. operator because `second` might be missing
    console.log(second?.toLowerCase());
}

function showMessage(msg: string, prefix = "") {
    console.log(`${prefix} - ${msg}`);
}

export function printf(msg: string, ...args: any[]) {
    let finalMessage = msg;

    for (let i = 0; i < args.length; i++) {
        finalMessage = finalMessage.replaceAll(`{${i}}`, args[i]);
    }

    console.log(finalMessage);
}

// adding types to arrow functions
const add = (a: number, b: number): number => a + b;
const double = (x: number): number => x * 2;

// variable type is a function
let someCallback: (val: string) => number;

class Person {
    name: string;

    constructor(name = "") {
        this.name = name;
    }
}

let p1: Person;
let p2 = new Person();

// function overloads

// typescript calls these overload signatures
// they are not part of the final output
function createDate(timestamp: number): Date;
function createDate(year: number, month: number, day: number): Date;

function createDate(yearOrTimestamp: number, month?: number, day?: number) {
    return new Date();
}

let names: string[] = [];

// here the function returns a string and it's allowed
names.forEach((name) => "hi");

function returnSomething() {
    if (Math.random() > 0.5) {
        return;
    }

    return true;
}

// void in the return value indicates the the returned value is not used
// can be useful in scenarios like this
function calculate(startWith: number, callback: () => void) {}

calculate(5, returnSomething);

// never -> function that never returns
//      throws error or infinite loop
function fail(msg: string): never {
    throw new Error("Something");
}
