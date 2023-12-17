import LinkedList from "./LinkedList.js";
import readlineSync from "readline-sync";
import chalk from "chalk";

const log = console.log;
const list = new LinkedList();
const getMenu = () => {
  return `
${chalk.white.bgBlue("-- LinkedList Options --")}
${chalk.bold("Actual List")}: ${chalk.blue(list.toString())}
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
};

let exit = false;
const optionsMap = {
  0() {
    exit = true;
    console.log("Bye!");
  },
  1() {
    const value = readlineSync.question("Value: ");
    list.append(value);
    log(chalk.yellow("Item Added"));
  },
  2() {
    const value = readlineSync.question("Value: ");
    list.prepend(value);
    log(chalk.yellow("Item Added"));
  },
  3() {
    log(chalk.yellow(list.size()));
  },
  4() {
    log(chalk.yellow(list.head().value));
  },
  5() {
    log(chalk.yellow(list.tail().value));
  },
  6() {
    const index = readlineSync.question("Node index: ");
    const numberIndex = Number(index);
    if (Number.isNaN(numberIndex)) {
      log(chalk.red("Invalid index"));
      return;
    }
    const node = list.at(numberIndex);
    node === null
      ? log(chalk.red("Invalid index"))
      : log(chalk.yellow(node.value));
  },
  7() {
    list.pop();
    log(chalk.yellow("Item Removed"));
  },
  8() {
    const value = readlineSync.question("Node value: ");
    list.contains(value)
      ? log(chalk.yellow("The item exists in the list"))
      : log(chalk.red("The item doesn't exists in the list"));
  },
  9() {
    const value = readlineSync.question("Node value: ");
    const index = list.find(value);
    index === null
      ? log(chalk.red("Item not found"))
      : log(chalk.yellow(`The item is at index: ${index}`));
  },
  10() {
    log(chalk.yellow(list.toString()));
  },
};

while (exit === false) {
  log(getMenu());
  const option = readlineSync.question("Option: ");
  if (!optionsMap[option]) {
    log(chalk.red("Invalid option"));
    continue;
  }
  optionsMap[option]();
}
