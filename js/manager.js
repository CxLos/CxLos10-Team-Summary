
// function Manager() {}

// Manager.prototype.games = function() {
//     const game = 'pokemon';
//     return game;
// };

// module.exports = Manager;

const Employee = require("./employee");
// syntax fluff on top vanilla js
class Manager extends Employee {

    constructor(name, id, email, office) {
        // allows us to take use of base constructor (employee)
        super(name, id, email);
        this.office = office;
    }
    // this is a method. a function in object or class
    getOffice() {
        return this.office;
    }
    getRole() {
        return ("Manager");
    }
}

module.exports = Manager;