interface Post {
    text: string;
    wordsCount: number;
}

let p1: Post;

interface ReadOnlyPost {
    readonly text: string;
    readonly wordsCount: number;
}

function printPost(post: ReadOnlyPost) {
    // post.text += ";";
    console.log(post.text);
}

export interface Readable {
    read: () => string;
    // alternative syntax
    hasContent(): boolean; // i like this more
    isOptional?(): boolean; // mixed feelings on this one
}

interface Writable {
    write(input: string): boolean;
}

// index signatures
interface WordsCounts {
    [i: string]: number;
}

let countsMap: WordsCounts = {};

countsMap.food = 4;
// countsMap.water = "4"; // not allowed

// nesting
interface App {
    settings: Settings;
}

interface Settings {
    theme?: string;
}

// interfaces and extend
interface CalculatorApp extends App {
    result: number;
}

function useApp(calc: CalculatorApp) {
    calc.settings.theme = "dark";
}

// this will be merged with the interface above
// could be interesting
interface Setting {
    fontSize: number;
}
// this is also what happens when we add properties to the Window interface

interface Window {
    myGlobalLib: any;
}
export {};
