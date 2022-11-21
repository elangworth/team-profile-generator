const Manager = require('../lib/manager');

const name = "Emily Langworth";
const employeeId = '5342';
const email = 'elangworthtest@gmail.com';
const officeNumber = '(925)454-7317';

const manager = new Manager(name, employeeId, email, officeNumber);

describe("Manager", () => {
    describe("Initialization", () => {
        test("Should set up manager's name, employee id, email and office number", () => {
            expect(manager.name).toBe(name);
            expect(manager.employeeId).toBe(employeeId);
            expect(manager.email).toBe(email);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    })
    describe("getOfficeNumber", () => {
        it("returns officeNumber", () => {
            
            expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
        })
    });
    describe("getRole", () => {
        it("returns class Name", () => {
            expect(manager.getRole()).toBe(manager.constructor.name);
        })
    }); 
}); 






