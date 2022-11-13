const Employee = require("./Employee");
class Manager extends Employee {
    //set office number via constructor argument
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }

    getRole() {
      return "Manager";
    
    }

    getOfficeNumber() {
 
      return this.officeNumber;
    }

 

  }

  module.exports = Manager