#!/usr/bin/env node
import chalk from "chalk";
import { askInput, askChoice } from "./readline.js";
import { createStructure } from "./createStructure.js";
import { DJANGO, EXPRESS_JS, GO, MONGO_DB, MYSQL, NODE_JS, POSTGRE_SQL } from "./constant.js";

const main = async () => {
  console.log(chalk.blue.bold("Welcome to ZIPPI!"));

  // Ask for the project name using prompt-sync
  const projectName = askInput("Enter your project name: ");
  console.log(`Project Name: ${projectName}`);

  // Ask user to select a server
  const servers = [NODE_JS, EXPRESS_JS, DJANGO, GO];
  const selectedServer = await askChoice("Select an option to create a server:", servers);
  console.log(`Selected Server: ${selectedServer}`);

  // Ask user to select a database
  const databases = [MONGO_DB, POSTGRE_SQL, MYSQL];
  const selectedDatabase = await askChoice("Select a database:", databases);
  console.log(`Selected Database: ${selectedDatabase}`);
  
  // fs.writeFileSync(`${projectName}/${projectName}.js`, `console.log("Hello World");`);
  createStructure(projectName, selectedServer, selectedDatabase);
  // console.log(chalk.green.bold(`Created project structure for ${selectedServer} with ${selectedDatabase}`));
  console.log("Thank you for using zippi!");
};

main();
