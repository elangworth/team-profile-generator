const Manager = require("../lib/manager");
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const generateTeam  = (team) => {
    debugger
    //empty array for pushing team data to
    const teamHTML = [];
    const generateManager = manager => {
        const managerHTML = `
        <div class="card rounded m-2 col-sm" style="width: 18rem;" id="manager-container">
            <div class="card-header rounded mt-1">
                <p id="manager-name">Name: ${manager.name}</p>
                <p>Role: ${manager.getRole() } <i class="fas fa-mug-hot"></i></p>
            </div>
            <div class="card-body">
                <p id="manager-employee-id">Employee ID: ${manager.employeeId}</p>
                <p id="manager-email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p id="manager-office-num">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
        teamHTML.push(managerHTML);
    }
    const generateEngineer = engineer => {
        const engineerHTML = `
        <div class="card rounded m-2 col-sm" style="width: 18rem;" id="employee-container">
            <div class="card-header rounded mt-1">
                <p class="engineer-name">Name: ${engineer.name}</p>
                <p>Role: ${engineer.getRole() }<i class="fas fa-glasses"></i></p>
            </div>
            <div class="card-body">
                <p class="engineer-id">EmployeeID: ${engineer.employeeId}</p>
                <p class="engineer-email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">github: <a href="http://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
        `;
        teamHTML.push(engineerHTML);
    }
    const generateIntern = intern => {
        const internHTML = `
        <div class="card rounded m-2 col-sm" style="width: 18rem;" id="intern-container">
            <div class="card-header rounded mt-1">
                <p class="intern-name">Name: ${intern.name}</p>
                <p>Role: ${intern.getRole() } <i class="fas fa-user-graduate"></i></p>
            </div>
            <div class="card-body">
                <p class="intern-id">Employee ID: ${intern.employeeId}</p>
                <p class="intern-email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
        `;
        teamHTML.push(internHTML);
    }
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i])
        } else if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i])
        } else if (team[i].getRole() === "Intern") {
            generateIntern(team[i])
        }
    }
    return teamHTML.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="jumbotron ">
            <h1 class="text-center">Team Awesome</h1>
        </header>
        <div class="row m-1">
            ${generateTeam(team)}
        </div>
    </body>
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    </html>
    `
};
