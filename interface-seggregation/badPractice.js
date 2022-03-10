class Employee {
  developSoftware() {
    console.log('Developing software');
  }

  manageOthers() {
    console.log('Managing others');
  }

  maintainSecurity() {
    console.log('Maintaining security');
  }
}

// Here, we need to override all the methods in parent class/interface
class Developer extends Employee {
  developSoftware() {
    super.developSoftware();
  }

  manageOthers() {
    console.log('Developer cant manage others');
  }

  maintainSecurity() {
    console.log('Developer cant maintain security');
  }
}

let d1 = new Developer();
d1.developSoftware();
d1.manageOthers();
d1.maintainSecurity();
