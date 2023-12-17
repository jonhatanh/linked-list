import Readline from "node:readline";
import LinkedList from "./LinkedList.js";

const input = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = `
-- LinkedList Options --
1.- append.
2.- prepend.
3.- size.
4.- head.
5.- tail.
6.- at(index).
7.- pop.
8.- contains(value).
9.- find.
10.- toString.
11.- insertAt.
12.- removeAt.
13.- clear.
0.- exit.
`;

let exit = false;
const list = new LinkedList();
const optionsMap = {
  0() {
    exit = true;
  },
  1() {
    console.log("eppe");
  },
};

function printMenu() {
    input.question(menu, (selected) => {
        processInput(selected);
    });
}

function processInput(selected) {
  if (!optionsMap[selected]) {
    console.log("Invalid option");
    return;
  }
  optionsMap[selected]();

  if (!exit) {
    printMenu();
  } else {
    console.log("Bye!");
    input.close();
  }
}

printMenu();