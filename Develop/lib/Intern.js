const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(name, email);
        this.school = school;
    }

    getSchool() {
        return " ";
    }

    getRole() {
        //overriden to return 'Intern'
        return "Intern";
    }
}

const intern = new Intern()
module.exports = Intern;