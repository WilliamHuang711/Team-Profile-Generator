const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = 'UC Berkeley';
    }

    getSchool() {
        return this.school;
    }

    getRole() {
  
        return "Intern";
    }
}

// const intern = new Intern()
module.exports = Intern;