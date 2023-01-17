
// function Intern() {}

// Intern.prototype.food = function() {
//     const food = 'platano';
//     return food;
// };

// module.exports = Intern;

const Employee = require("./employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        // allows us to take use of base constructor (employee)
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return ("Intern");
    }
}

module.exports = Intern;
