const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, employeeID, email, school) {
        super(name, employeeID, email);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;