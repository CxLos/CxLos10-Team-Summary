
// function Employee() {}

// Employee.prototype.hello = function() {
//     const greeting = 'hello';
//     return greeting;
// };

// module.exports = Employee;

class Employee {

    constructor(name, id, email, ) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return ("Employee");
    }
}

module.exports = Employee;