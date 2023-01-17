// variables 
const Engineer = require("../js/engineer");

console.log("This test better run.");

describe("Engineer", () => {
    it('Get name should return name', () => {
        
        const eng = new Engineer("name");

        expect(eng.getName()).toBe("name");
    });

    it('Get role should return role', () => {
        
        const eng = new Engineer("Engineer");

        expect(eng.getRole()).toBe("Engineer");
    });

    it('Get git should return git', () => {
        
        const eng = new Engineer();

        expect(eng.getGit()).toBe(this.git);
    });

    it('Get ID should return ID', () => {

        const eng = new Engineer(null, 1);

        expect(eng.getId()).toBe(1);
    });
});