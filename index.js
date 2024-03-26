#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter 1st number: ",
        type: "number",
        name: "FirstNumber",
    },
    {
        message: "Select one of these operators to perform the operation: ",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Modulus"]
    },
    {
        message: "Enter 2nd number: ",
        type: "number",
        name: "SecondNumber",
    }]);
// Conditional Statements
if (answer.Operator === "Addition") {
    console.log("Your answer is : " + (answer.FirstNumber + answer.SecondNumber));
}
else if (answer.Operator === "Subtraction") {
    console.log("Your answer is : " + (answer.FirstNumber - answer.SecondNumber));
}
else if (answer.Operator === "Multiplication") {
    console.log("Your answer is : " + (answer.FirstNumber * answer.SecondNumber));
}
else if (answer.Operator === "Division") {
    console.log("Your answer is : " + (answer.FirstNumber / answer.SecondNumber));
}
else if (answer.Operator === "Exponentiation") {
    console.log("Your answer is : " + (answer.FirstNumber ** answer.SecondNumber));
}
else if (answer.Operator === "Modulus") {
    console.log("Your answer is : " + (answer.FirstNumber % answer.SecondNumber));
}
else {
    console.log("Select a valid Operator.");
}
