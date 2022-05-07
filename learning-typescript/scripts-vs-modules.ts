// type - describes the shape of a value
// infer - figure out the type
let someVal; // has type any
let n = 7; // type number inferred

// specify the type with an annotation
let name: string;
name = "Mihai";

// Module - a file that contains an import or export statement
// Script - a file with no import export
// Scripts share the variables between multiple files

// To force a file to be a module we add
export {};
