
function Employee() {}

Employee.prototype.hello = function() {
    const greeting = 'hello';
    return greeting;
};

module.exports = Employee;

// export const hello = () => 'Hello';