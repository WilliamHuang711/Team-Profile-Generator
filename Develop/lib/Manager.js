const Employee = require("./Employee");
class Manager extends Employee {
    //set office number via constructor argument
    constructor(officeNumber) {
    super(officeNumber);
    this.officeNumber = officeNumber;
    }

    getRole() {
      return "Manager";
    //   console.log("The manager is ${this.name}");
    }

    getOffice() {
      // this.officeNumber = officeNumber;
      return Manager.officeNumber;
    }

 

  }

  module.exports = Manager