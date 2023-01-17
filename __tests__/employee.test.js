// vairables
// const { it } = require("node:test");
const Employee = require("../js/employee");

console.log("This test better run.");

describe("Employee", () => {
    it('Get name should return name', () => {
        
        const employee = new Employee("test name");

        expect(employee.getName()).toBe("test name");
    });

    it('Get ID should return ID', () => {

        const employee = new Employee(null, 1);

        expect(employee.getId()).toBe(1);
    });

    it('Get Email should return email', () => {

        const emp = new Employee();

        expect(emp.getEmail()).toBe(this.email);
    });

    it("Get role should return role", () => {

        const emp = new Employee();

        expect(emp.getRole()).toBe("Employee");
    });
});