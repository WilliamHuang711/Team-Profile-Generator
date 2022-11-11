const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//inquirer to gather information about the development team members

const employeeData = async (employees = []) => {

    function questions() {
        inquirer.prompt(
        {
            type:'input',
            name:'name',
            message:"Enter the employee's name: "
        },
        {
            type:'input',
            name:'id',
            message:"Enter the employee's ID number: "
        },
        {
            type:'input',
            name:'email',
            message:"Enter the employee's email address: "
        },
        {
            type:'list',
            name:'role',
            message:"Choose the employee's role: ",
            choice: ['Manager','Engineer','Intern'],
        },
        {
            type:'input',
            name:'school',
            message:"Enter attened school: ",
            when: (answers) => answers.role === 'Intern'
        },
        {
            type:'confirm',
            name:'another',
            message:'Would you like to add another member?',
            default: false
        }
        )
    }}