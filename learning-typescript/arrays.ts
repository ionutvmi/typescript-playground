let names = ["John", "Mary"];

names.push("Hi"); // only accepts strings
// names.push(123);

let validStatuses: (number | string)[] = [];

validStatuses.push(44);
validStatuses.push("Array using union");

type Status = number | string;
let statusList: Status[];

// alternative syntax
let myStatuses: Array<Status>;

// list of functions
let callbacks: (() => number)[];

type ResultProcessor = () => number;

let callbacksAlternative: ResultProcessor[];

// multi dimensional arrays
let matrix: number[][];

matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

export {};
