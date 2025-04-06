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
  const mongoURI = askInput(chalk.blue.bold("Enter your MongoDB URI: "));
  fs.mkdirSync(`${projectName}/src`);
  fs.mkdirSync(`${projectName}/src/db`);
  fs.mkdirSync(`${projectName}/src/routes`);
  fs.mkdirSync(`${projectName}/src/controllers`);
  fs.mkdirSync(`${projectName}/src/models`);
  fs.mkdirSync(`${projectName}/src/middleware`);
  fs.mkdirSync(`${projectName}/src/utils`);
  fs.mkdirSync(`${projectName}/src/tests`);
  fs.mkdirSync(`${projectName}/src/docs`);

  switch (server) {
    case "ExpressJS":
      fs.writeFileSync(`${projectName}/index.js`, expressIndexJsContent);
      fs.writeFileSync(`${projectName}/src/app.js`, expressAppJsContent);
      switch (database) {
        case "MongoDB":
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
          fs.writeFileSync(`${projectName}/package.json`, expressPackageContent);
          break;
        case "PostgreSQL":
          break;
        case "MySQL":
          break;
      }
      break;
    case "NodeJS":
      fs.writeFileSync(`${projectName}/index.js`, nodeIndexJsContent);
      fs.writeFileSync(`${projectName}/src/app.js`, nodeAppJsContent);
      switch (database) {
        case "MongoDB":
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
          break;
        case "PostgreSQL":
          break;
        case "MySQL":
          break;
      }
      break;
    case "Django":
      switch (database) {
        case "MongoDB":
          break;
        case "PostgreSQL":
          break;
        case "MySQL":
          break;
      }
      break;
    case "Flask":
      switch (database) {
        case "MongoDB":
          break;
        case "PostgreSQL":
          break;
        case "MySQL":
          break;
      }
      break;
  }
};
