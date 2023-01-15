// Importing

const Employee = require("../employee");
const Intern = require("../intern");
const Manager = require("../manager");

console.log("This test better fucking run.");

describe("Employee", () => {

    describe('hello', () => {
        it('should output hello', () => {

            // const hello = "hello";
            const hello = new Employee().hello();
            expect(hello).toEqual('hello');
        });
    });
});

describe("Intern", () => {

    describe('hello', () => {
        it('should output hellos', () => {

            const food = new Intern().food();
            expect(food).toBe('platano');
        });
    });
});

describe("Manager", () => {

    describe('hello', () => {
        it('should output helloss', () => {

            const games = new Manager().games();
            expect(games).toBe('pokemon');
        });
    });
});
