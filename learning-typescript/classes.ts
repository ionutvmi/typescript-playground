import { Readable } from "./interfaces";

class Person {
    name: string;
    dob: Date;

    constructor(name: string, dob: Date) {
        this.name = name;
        this.dob = dob;
    }
}

const p1 = new Person("John Doe", new Date());

class Actions {
    // here ! allows the property to exist without being initialized in the constructor
    items!: string[];

    // optional
    isComplete?: boolean;

    readonly prop1: string = "some readonly value";
}

// classes create:
//    - a runtime value (the class itself)
//    - a type that can be used in annotations (the class itself)

let actions = new Actions();

actions.items.forEach((x) => console.log(x));

class ConsoleReader implements Readable {
    read() {
        return "Hi";
    }
    hasContent(): boolean {
        throw new Error("Method not implemented.");
    }
}

export {};
