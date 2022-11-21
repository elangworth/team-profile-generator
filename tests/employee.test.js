const Employee = require('../lib/employee');

const name = "Emily Langworth";
const employeeId = '5342';
const email = 'elangworthtest@gmail.com';

const employee = new Employee(name, employeeId, email);

describe("Employee", () => {
    describe("Initialization", () => {
        test("Should set up the employee's name, employee id, and email", () => {
            expect(employee.name).toBe(name);
            expect(employee.employeeId).toBe(employeeId);
            expect(employee.email).toBe(email);
        });
    }) 
    describe("getName", () => {
        it("returns Name", () => {
            expect(employee.getName()).toBe(employee.name);
        })
    });
    describe("getId", () => {
        it("returns employeeId", () => {
            expect(employee.getId()).toBe(employee.employeeId);
        })
    });
    describe("getEmail", () => {
        it("returns Email", () => {
            expect(employee.getEmail()).toBe(employee.email);
        })
    });
    describe("getRole", () => {
        it("returns class Name", () => {
            expect(employee.getRole()).toBe(employee.constructor.name);
        })
    });
});