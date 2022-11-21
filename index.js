//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/template.js');
//class modules

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//array for prompt responses
const newEmployeeData = [];


const questions = async () => {
    const responses = await inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the employee's name?",
            name: 'name',
            validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
        },
        {
            type: 'input',
            message: "Enter employee id",
            name: 'employeeId',
            validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
        },
        {
            type: 'input',
            message: "Enter email address",
            name: 'email',
            validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
        },
        {
            type: 'list',
            message: 'What type of employee is being added?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
     ]);
     if (responses.role === 'Manager') {
        const managerResponses = await inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter office number",
                name: "officeNumber",
                validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
            },
        ])
        const newManager = new Manager(
            responses.name,
            responses.employeeId,
            responses.email,
            managerResponses.officeNumber
        );
        newEmployeeData.push(newManager);
     } else if (responses.role === "Engineer") {
        const engineerResponses = await inquirer 
        .prompt([
            {
                type: 'input',
                message: 'Enter GitHub username',
                name: 'username',
                validate: (value)=>{if(value){return true} else{return "I need a value to continue"}}
            },
        ])
        const newEngineer = new Engineer(
            responses.name,
            responses.employeeId,
            responses.email,
            engineerResponses.username
        );
        newEmployeeData.push(newEngineer);
     } else if (responses.role === "Intern") {
        const internResponses = await inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter intern's school",
                name: 'school',
                validate: (value)=>{if(value){return true} else{return "I need a value to continue"}},
            }
        ])
        const newIntern = new Intern(
            responses.name,
            responses.employeeId,
            responses.email,
            internResponses.school
        );
        newEmployeeData.push(newIntern);
     }
};

async function promptQuestions() {
    await questions();
    const addTeamMember = await inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'addAnotherTeamMember'
        }
    ])
    if (addTeamMember.addAnotherTeamMember) {
        console.log(addTeamMember.addAnotherTeamMember)
        return await promptQuestions();
    }
    return createTeam(); 
}

promptQuestions();

//let templateHTML = fs.readFileSync(generateHTML, 'utf-8');

function createTeam() {
    fs.writeFileSync('./dist/index.html', generateHTML(newEmployeeData), "utf-8");
};