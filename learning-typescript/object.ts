// object types are created when using the object literal syntax

let person = {
    name: "Mihai",
    job: "ProGamer",
};

// only these two properties are now available
person.job;
person.name;

// we can defined an object type with a particular shape
let job: {
    name: string;
    code: number;
};

// alias for an object type
type Job = {
    name: string;
    code: number;
};

let someJob: Job;

// most people prefer interfaces over type alias
// when working with object types
interface Printable {
    print(): void;
}

interface OtherJob {
    name: string;
    code: number;
}

// using a type for function signature
type NumberProcessor = (x: number) => number;

const double: NumberProcessor = function (x) {
    return x * 2;
};
// useful for callbacks

// JavaScript is duck typed whereas TypeScript is structurally typed.

// optional properties
type Book = {
    author?: string; // is allowed to be missing
    publishYear: number | undefined; // has to exist
    pages: number;
};

let b1: Book = {
    publishYear: 1990,
    pages: 352,
};

// intersection type - merges the two types into a new one
type PrintableBook = Book & Printable;

let b2: PrintableBook = {
    publishYear: 2000,
    pages: 100,
    print() {
        console.log(this.publishYear);
    },
};
