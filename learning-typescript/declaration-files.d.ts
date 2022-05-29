// no runtime code
// only declarations of interfaces, modules and general types

export interface Writer {
    write(input: string): void;
}

// we can later import this interface in a ts file
// import { Writer } from './declaration-files';

declare let APP_DATA: string;

interface ExcelFileHandle {}

// declare a function
function openExcelFile(filePath: string): ExcelFileHandle;

// interface merging
export interface Writer {
    hasWritingSpace(): boolean;
}

// even if we have an export in this file
// this is considered in the global scope
declare global {
    const SOME_CONSTANT: string;
}
