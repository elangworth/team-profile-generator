const Intern = require('../lib/intern');

const name = "Braxton Waxdeck";
const employeeId = '5398';
const email = 'bwaxdeck@gmail.com';
const school = 'UC Berkeley Extension';

const intern = new Intern(name, employeeId, email, school);

describe("Intern", () => {
    describe("Initialization", () => {
        test("Should set up intern's name, employee id, email and school", () => {
            expect(intern.name).toBe(name);
            expect(intern.employeeId).toBe(employeeId);
            expect(intern.email).toBe(email);
            expect(intern.school).toBe(school);
        });
    }) 
    describe("getSchool", () => {
        it("returns school", () => {
            expect(intern.getSchool()).toBe(intern.school);
        })
    });
    describe("getRole", () => {
        it("returns class Name", () => {
            expect(intern.getRole()).toBe(intern.constructor.name);
        })
    });
}); 