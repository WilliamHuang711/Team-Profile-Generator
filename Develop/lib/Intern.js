const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(Intern, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
  
        return "Intern";
    }
}

const intern = new Intern()
module.exports = Intern;