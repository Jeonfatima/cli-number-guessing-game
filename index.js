#! /user/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number 
// 2) user input for guessing number
// 3) compare both numbers and give results
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guessed the right number");
}
else {
    console.log("Dang! you Guessed the wrong number . Try Again");
}
