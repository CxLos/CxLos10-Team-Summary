// variables
const Manager = require("../js/manager");

console.log("This test better run.");

describe("Manager", () => {
    it('Get name should return name', () => {
        
        const man = new Manager("name");

        expect(man.getName()).toBe("name");
    });

    it('Get role should return role', () => {
        
        const man = new Manager("Manager");

        expect(man.getRole()).toBe("Manager");
    });

    it('Get office should return office', () => {
        
        const man = new Manager();

        expect(man.getOffice()).toBe(this.office);
    });

    it('Get ID should return ID', () => {

        const man = new Manager(null, 1);

        expect(man.getId()).toBe(1);
    });
});