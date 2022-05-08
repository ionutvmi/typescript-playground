import { printf } from "./functions";

async function main() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Name = ", (name: string) => {
        printf("Hello {0}, welcome to the team", name);
        rl.close();
    });
}

main().catch((e) => console.error(e));
