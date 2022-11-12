const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeData = []

startQuestions();

let addEmployee = true;


function startQuestions() {
    inquirer.prompt([{
        type:'input',
        name:'nameEmployee',
        message:"Enter the employee's name: "
    },{
        type:'input',
        name:'idEmployee',
        message:"Enter the employee's ID number: "
    },
    {
        type:'input',
        name:'emailEmployee',
        message:"Enter the employee's email address: "
    },
    {
        type:'input',
        name:'roleEmployee',
        message:"Specific the employee's role: ",
    },
    {
        type:'input',
        name:'managerNumber',
        message:"Enter your office number: "
    },
    {
        type:'list',
        name:'another',
        message:'Would you like to add another member?',
        choices:[
            'Engineer',
            'Intern',
            'No'
        ]
    }]).then(function(date) {
        console.log(data);
        addEmployee = true;
        switch (data.another) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions()
        }
    })
}

function engineerQuestions() {
    inquirer.prompt([{
      type: "input",
      name: "nameEmployee",
      message: "Enter the employee's name: "
    }, {
      type: "input",
      name: "idEmployee",
      message: "Enter the employee's ID number: "
    }, {
      type: "input",
      name: "emailEmployee",
      message: "Enter the employee's email address: "
    }, {
      type: "input",
      name: "gitusernameEngineer",
      message: "Enter the employee's github username: ",
      // when: (answers) => answers.role === 'Engineer'
    }, {
      type: "list",
      name: "another",
      message: "Would you like to add another member?",
      choices: [
        "Engineer",
        "Intern",
        "No"
      ]
    }]).then(function (data) {
      console.log("you entered engineer questions");
      switch (data.another) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions()
      }
      // renderHtml();
    })
  }
  
  function internQuestions() {
    inquirer.prompt([{
        type: "input",
        name: "nameEmployee",
        message: "Enter employee's name:"
      }, {
        type: "input",
        name: "idEmployee",
        message: "Enter employee ID number: "
      }, {
        type: "input",
        name: "emailEmployee",
        message: "Enter employee email address: "
      }, {
        type: "input",
        name: "schoolIntern",
        message: "Enter school intern attends: ",
        // when: (answers) => answers.role === 'Intern'
      }, {
        type: "confirm",
        name: "another",
        message: "Enter another team member?",
        choices: ['Yes', 'No']
      }])
      .then(function (data) {
        if (data.choices === 'Yes') {
          startQuestions();
        } else {
          renderHtml();
        }
  
      })
  }

    // function startQuestions() {
    //     inquirer.prompt([
    //     {
    //         type:'input',
    //         name:'name',
    //         message:"Enter the employee's name: "
    //     },
    //     {
    //         type:'input',
    //         name:'id',
    //         message:"Enter the employee's ID number: "
    //     },
    //     {
    //         type:'input',
    //         name:'email',
    //         message:"Enter the employee's email address: "
    //     },
    //     {
    //         type:'list',
    //         name:'role',
    //         message:"Choose the employee's role: ",
    //         choice: ['Manager','Engineer','Intern'],
    //     },
    //     {
    //         type:'input',
    //         name:'school',
    //         message:"Enter attened school: ",
    //         when: (answers) => answers.role === 'Intern'
    //     },
    //     {
    //         type:'confirm',
    //         name:'another',
    //         message:'Would you like to add another member?',
    //         default: false
    //     })
    // }   
        
