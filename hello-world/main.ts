import { add } from "./math";

// this is a local package which is nice
import { multiply } from "@tsplayground/my-advanced-lib";

console.log("Hello from a typesafe world", add(11, 15));

// checking the debugger
const result = add(add(4, 70), 15);

console.log(`The computed result is ${result}`);

console.log(`This is multiplication from a local package ${multiply(4, 7)}`);
