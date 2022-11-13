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
const employees = []

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
        type:'list',
        name:'roleEmployee',
        message:"Specific the employee's role: ",
        choices: [
          'Manager',
          'Engineer',
          'Intern',
        ]
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
    }]).then(function(data) {
      let manager = new Manager(data.nameEmployee, data.idEmployee, data.emailEmployee, data.managerNumber);

      employees.push(manager);
        // console.log(data);
        // addEmployee = true;
        switch (data.another) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
            default:
              renderHtml();
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
      let engineer = new Engineer(data.nameEmployee, data.idEmployee, data.emailEmployee, data.gitusernameEngineer)
      employees.push(engineer);
      // console.log("you entered engineer questions");
      switch (data.another) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions()
        default:
          renderHtml();
      }
    })
  }
  
  function internQuestions() {
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
        name: "schoolIntern",
        message: "Enter attened school: ",
      }, {
      type: "list",
      name: "another",
      message: "Would you like to add another member?",
      choices: [
        "Engineer",
        "Intern",
        "No"
      ]
      }])
      .then(function (data) {
        let intern = new Intern(data.nameEmployee, data.idEmployee, data.emailEmployee, data.schoolIntern)
      employees.push(intern);
        switch (data.another) {
          case 'Engineer':
            engineerQuestions();
            case 'Intern':
              internQuestions();
            default:
              renderHtml();
        }
  
      })
  }

  function renderHtml() {
    fs.writeFileSync(outputPath, render(employees), "utf-8")
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
        
