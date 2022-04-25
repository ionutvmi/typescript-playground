import { add } from "./math";

console.log("Hello from a typesafe world", add(11, 15));

// checking the debugger
const result = add(add(4, 70), 15);

console.log(`The computed result is ${result}`);
