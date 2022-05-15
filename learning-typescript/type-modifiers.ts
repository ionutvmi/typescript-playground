let someLib: any; // Top Type
let someOtherLib: unknown; // Real Top Type

// type predicate
//  - applied to a function that returns a boolean and checks the type of a parameter
//  - used for narrowing the type

// val starts as the top type
function isValidFlag(val: unknown): val is number {
    if (typeof val == "number") {
        return true;
    }
    return false;
}

let someFlag: any;

if (isValidFlag(someFlag)) {
    // now we know that someFlag is a number
    someFlag.toFixed();
}

// keyof   -- create a type comprised by the union of the key names of the specified type
type StringProp = keyof string;

function getValue(val: string, prop: StringProp) {
    return val[prop];
}

getValue("hello", "length");

const someData = {
    name: "Mihai",
    age: 20,
    job: "progamer",
};

// typeof -- get the reference to a type if it doesn't have a name
function displayData(key: keyof typeof someData) {
    console.log(key);
}

displayData("job");

// type assertions
interface Profile {
    name: string;
}

let profileString = `{
    name: "Mihai"
}`;

let profile = JSON.parse(profileString) as Profile;

console.log(profile.name);

export {};
