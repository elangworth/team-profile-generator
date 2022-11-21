const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor (name, employeeId, email, github) {
        super(name, employeeId, email)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
};
module.exports = Engineer;