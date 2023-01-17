// variables 
const Intern = require("../js/intern");

console.log("This test better run.");

describe("Intern", () => {
    it('Get name should return name', () => {
        
        const int = new Intern("name");

        expect(int.getName()).toBe("name");
    });

    it('Get role should return role', () => {
        
        const int = new Intern("Intern");

        expect(int.getRole()).toBe("Intern");
    });

    it('Get school should return school', () => {
        
        const int = new Intern();

        expect(int.getSchool()).toBe(this.school);
    });

    it('Get ID should return ID', () => {

        const int = new Intern(null, 1);

        expect(int.getId()).toBe(1);
    });
});