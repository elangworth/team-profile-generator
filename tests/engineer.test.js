const Engineer = require('../lib/engineer');

const name = "Isiah Durst";
const employeeId = '5349';
const email = 'idurst@gmail.com';
const github = 'IDurst';

const engineer = new Engineer(name, employeeId, email, github);

describe("Engineer", () => {
    describe("Initialization", () => {
        test("Should set up eningeer's name, employee id, email and office number", () => {
            

            expect(engineer.name).toBe(name);
            expect(engineer.employeeId).toBe(employeeId);
            expect(engineer.email).toBe(email);
            expect(engineer.github).toBe(github);
        });
    }) 
    describe("getGithub", () => {
        it("returns github username", () => {
            expect(engineer.getGithub()).toBe(engineer.github);
        })
    });
    describe("getRole", () => {
        it("returns class Name", () => {
            expect(engineer.getRole()).toBe(engineer.constructor.name);
        })
    });
}); 