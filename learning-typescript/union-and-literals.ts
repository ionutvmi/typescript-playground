// a union is a special type that describes a value which can have multiple types
let val: number | string;

// we can use type to give an alias to a union
type NuStr = number | string;

let myVal: NuStr = Math.random() > 0.5 ? "Bob" : 1;

if (myVal) {
    myVal.toString(); // available
    // myVal.toUpperCase(); // not available
    // since it's not a method on number
}

// narrowing
if (typeof myVal == "string") {
    myVal.toUpperCase(); // now it works
}

// literal type
const role = "Admin";

// we can think of a primitive type is a union of all possible literal values
// number = 0 | 1 | 2 ... | 0.1 | ...

let status: "on" | "off" | "playing";

status = "on";
status = "off";
// status = "something else"; // not allowed

type PlayerStatus = "on" | "off" | "playing";

function printStatus(currentStatus: PlayerStatus) {
    let len = currentStatus.length;
    console.log(currentStatus, len);
}
