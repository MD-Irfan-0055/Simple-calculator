#! /usr/bin/env node
let calculator = "Welcome to the simple calculator";
console.log(calculator);
import inquirer from "inquirer";
const result = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "enter your first number"
    },
    {
        name: "operator",
        message: "select one of the operator to perform operation",
        type: "list",
        choices: ["addition", "subtraction", "maltiplication", "division"],
    },
    {
        name: "secondNumber",
        type: "number",
        message: "enter your second number"
    },
]);
if (result.operator === "addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "maltiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("please select a valid operator");
}
let thanks = "Thank you for using a simple calculator";
console.log(thanks);
