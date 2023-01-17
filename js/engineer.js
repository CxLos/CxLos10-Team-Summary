
// function Engineer() {}

// Engineer.prototype.body = function() {
//     const body = 'arm';
//     return body;
// };

// module.exports = Engineer;

const Employee = require("./employee");
// syntax fluff on top vanilla js
class Engineer extends Employee {

    constructor(name, id, email, git) {
        // allows us to take use of base constructor from (employee)
        super(name, id, email);
        this.git = git;
    }
    // this is a method. a function in object or class
    getGit() {
        return this.git;
    }
    getRole() {
        return ("Engineer");
    }
}

module.exports = Engineer;