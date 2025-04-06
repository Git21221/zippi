// readline.js
import promptSync from "prompt-sync";
import inquirer from "inquirer";

const prompt = promptSync();

/**
 * Ask for simple user input (text-based)
 * @param {string} question - The question to ask
 * @returns {string} User input
 */
export const askInput = (question) => {
  return prompt(question);
};

/**
 * Show a list selection using inquirer
 * @param {string} message - The message for the selection
 * @param {Array} choices - List of options
 * @returns {string} The selected choice
 */
export const askChoice = async (message, choices) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "selectedOption",
      message: message,
      choices: choices,
    },
  ]);
  return answer.selectedOption;
};
