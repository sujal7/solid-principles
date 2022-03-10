class IDeveloper {
  developSoftware() {}
}

class IManager {
  manageOthers() {}
}

class ISecurity {
  maintainSecurity() {}
}

// Now, we have created seperate super class/interface for each of the roles
class Developer extends IDeveloper {
  developSoftware() {
    console.log('Developing software');
  }
}

class Manager extends IManager {
  manageOthers() {
    console.log('Managing others');
  }
}

class Security extends ISecurity {
  maintainSecurity() {
    console.log('Maintaining security');
  }
}

let d1 = new Developer();
d1.developSoftware();

let m1 = new Manager();
m1.manageOthers();

let s1 = new Security();
s1.maintainSecurity();
