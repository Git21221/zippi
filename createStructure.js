import { indexjsContent as expressIndexJsContent } from "./createFilesAndFolder/expressjs/withMongo/index.js";
import { indexjsContent as nodeIndexJsContent } from "./createFilesAndFolder/nodejs/withMongo/index.js";
import { appjsContent as expressAppJsContent } from "./createFilesAndFolder/expressjs/withMongo/src/app.js";
import { appjsContent as nodeAppJsContent } from "./createFilesAndFolder/nodejs/withMongo/src/app.js";
import { connectMongoDBContent as expressConnectMongoDBContent } from "./createFilesAndFolder/expressjs/withMongo/src/db/connectMongoDB.js";
import { connectMongoDBContent as nodeConnectMongoDBContent } from "./createFilesAndFolder/nodejs/withMongo/src/db/connectMongoDB.js";
import { packageContent as expressPackageContent } from "./createFilesAndFolder/expressjs/withMongo/package.js";
import { packageContent as nodePackageContent } from "./createFilesAndFolder/nodejs/withMongo/package.js";
import fs from "fs";
import chalk from "chalk";
import { askInput } from "./readline.js";

export const createStructure = (projectName, server, database) => {
  // Check if directory exists, if not create it
  const createFolder = () => {
    if (!fs.existsSync(projectName)) {
      fs.mkdirSync(projectName);
      console.log(chalk.green.bold(`Created project folder: ${projectName}`));
    } else {
      console.log(
        chalk.yellow(
          `Folder '${projectName}' already exists. Please choose a different name.`
        )
      );
      return;
    }
    // Create server folder and files
    fs.mkdirSync(`${projectName}/src`);
    fs.mkdirSync(`${projectName}/src/db`);
    fs.mkdirSync(`${projectName}/src/routes`);
    fs.mkdirSync(`${projectName}/src/controllers`);
    fs.mkdirSync(`${projectName}/src/models`);
    fs.mkdirSync(`${projectName}/src/middleware`);
    fs.mkdirSync(`${projectName}/src/utils`);
    fs.mkdirSync(`${projectName}/src/tests`);
    fs.mkdirSync(`${projectName}/src/docs`);
  };

  switch (server) {
    case "ExpressJS":
      switch (database) {
        case "MongoDB":
          createFolder();
          fs.writeFileSync(`${projectName}/index.js`, expressIndexJsContent);
          fs.writeFileSync(`${projectName}/src/app.js`, expressAppJsContent);
          const mongoURI = askInput(
            chalk.blue.bold("Enter your MongoDB URI: ")
          );
          if (mongoURI) {
            fs.writeFileSync(
              `${projectName}/.env`,
              `PORT=8000\nMONGODB_URI=${mongoURI}`
            );
          } else
            fs.writeFileSync(
              `${projectName}/.env`,
              `PORT=8000\nMONGODB_URI=mongodb://localhost:27017`
            );
          fs.writeFileSync(
            `${projectName}/src/db/connectMongoDB.js`,
            expressConnectMongoDBContent
          );
          fs.writeFileSync(
            `${projectName}/package.json`,
            expressPackageContent
          );
          console.log(chalk.green.bold("Project created successfully!"));
          console.log(chalk.blue.bold("Try these commands:"));
          console.log("cd " + projectName);
          console.log("npm install");
          console.log("npm start");
          break;
        case "PostgreSQL":
          console.log(chalk.yellow.bold("PostgreSQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
        case "MySQL":
          console.log(chalk.yellow.bold("MySQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
      }
      break;
    case "NodeJS":
      switch (database) {
        case "MongoDB":
          createFolder();
          fs.writeFileSync(`${projectName}/index.js`, nodeIndexJsContent);
          fs.writeFileSync(`${projectName}/src/app.js`, nodeAppJsContent);
          const mongoURI = askInput(
            chalk.blue.bold("Enter your MongoDB URI: ")
          );
          if (mongoURI) {
            fs.writeFileSync(
              `${projectName}/.env`,
              `PORT=8000\nMONGODB_URI=${mongoURI}`
            );
          } else
            fs.writeFileSync(
              `${projectName}/.env`,
              `PORT=8000\nMONGODB_URI=mongodb://localhost:27017`
            );
          fs.writeFileSync(
            `${projectName}/src/db/connectMongoDB.js`,
            nodeConnectMongoDBContent
          );
          fs.writeFileSync(`${projectName}/package.json`, nodePackageContent);
          console.log(chalk.green.bold("Project created successfully!"));
          console.log(chalk.blue.bold("Try these commands:"));
          console.log("cd " + projectName);
          console.log("npm install");
          console.log("npm start");
          break;
        case "PostgreSQL":
          console.log(chalk.yellow.bold("PostgreSQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
        case "MySQL":
          console.log(chalk.yellow.bold("MySQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
      }
      break;
    case "Django":
      switch (database) {
        case "MongoDB":
          console.log(chalk.yellow.bold("MongoDB is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
        case "PostgreSQL":
          console.log(chalk.yellow.bold("PostgreSQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
        case "MySQL":
          console.log(chalk.yellow.bold("MySQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
      }
      break;
    case "Flask":
      switch (database) {
        case "MongoDB":
          console.log(chalk.yellow.bold("MongoDB is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
        case "PostgreSQL":
          console.log(chalk.yellow.bold("PostgreSQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
        case "MySQL":
          console.log(chalk.yellow.bold("MySQL is not supported yet."));
          console.log(
            chalk.blue(
              "You can contribute to this project! - https://github.com/git21221/zippi"
            )
          );
          break;
      }
      break;
  }
};
