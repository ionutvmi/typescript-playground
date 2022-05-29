import { Writer } from "./declaration-files";
import { MAGIC, useMagic } from "some-external-lib";

let fileWriter: Writer = {
    write: function (input: string): void {},
    hasWritingSpace: function (): boolean {
        return true;
    },
};

console.log(fileWriter.hasWritingSpace);
console.log(fileWriter.write);

console.log(SOME_CONSTANT);

// right click -> go to type definition
let number: Number;

console.log("here is some magic ", MAGIC);
console.log("here is some magic ", useMagic());

// packages can define their types in package.json > types property
// for native js packages there is usually a type mapping in https://aka.ms/types
