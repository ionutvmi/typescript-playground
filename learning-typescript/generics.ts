// generic functions

function identity<T>(input: T): T {
    return input;
}

const n1 = identity(44);
const s1 = identity("Hi there");

// in an arrow function
const identityArrow = <T>(x: T) => x;

function logWrapper<T>(callback: (x: T) => void) {
    return (input: T) => {
        console.log("Input: ", input);
        callback(input);
    };
}

let logType = logWrapper(function (s1) {
    console.log(typeof s1);
});

logType("hi there");

let logTypeString = logWrapper<string>(function (s1) {
    console.log(s1.toLowerCase());
});

logTypeString("456"); // has to be string

function makeTuple<T, U>(first: T, second: U) {
    return [first, second] as const;
}

let t1 = makeTuple("Mihai", 29);
// t1[0] = 44; // not allowed

interface Box<T> {
    content: T;
}

let myBox: Box<string> = {
    content: "Hi there",
};

let myNumberBox: Box<number> = {
    content: 1234,
};

// K and V are types connected to the instance
// they cannot be used in static methods
class Secret<K, V> {
    key: K;
    value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    isValid(): boolean {
        return Boolean(this.key && this.value);
    }
}

// example of type discrimination
type Result<T> = FailedResult | SuccessResult<T>;

interface FailedResult {
    error: Error;
    success: false;
}

interface SuccessResult<T> {
    data: T;
    success: true;
}

function handleResult(result: Result<string>) {
    if (result.success) {
        console.log(result.data);
    } else {
        // it knows that it's FailedResult
        // due to the type narrowing
        console.log(result.error);
    }
}

// generics can have a default type in case nothing is provided
interface Quote<T = string> {
    value: T;
}

let q1: Quote<number> = { value: 42 };
let q2: Quote = { value: "something nice" };
// let q3: Quote = { value: 456 }; // detected as an error

interface WithLength {
    length: number;
}

// constrained generic types
function logLengthyTypes<T extends WithLength>(val: T) {
    console.log(val.length);
}

function getProp<T, K extends keyof T>(value: T, key: K) {
    return value[key];
}

let sec1 = new Secret("A", 1);
let res = getProp(sec1, "key"); // knows that res is a string *mind blown*
let res2 = getProp(sec1, "value"); // knows that res2 is a number *mind blown*

let p1 = new Promise<string>(function (resolve, reject) {
    setTimeout(() => resolve("Done !"), 5000);
});

p1.then((x) => console.log(x.toUpperCase()));

// async always returns a promise (Promise.resolve(value) for non thenable values)
async function getSomeData(): Promise<string> {
    await p1;
    return "Hi";
}

export {};
