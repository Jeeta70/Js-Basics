//This is way to add proto in all Objects
Object.prototype.addName = "Ajeet"



let users = {
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getAge: function () {
    return new Date().getFullYear() - this.birth;
  },
};

let student = {
  firstName: "Anil",
  lastName: "Sidhu",
  birth: 1999,
  // getAge:users.getAge
};

let teacher = {
  firstName: "Jaipal",
  lastName: "Sharmas",
  birth: 1995,
  getAge:users.getAge
};


//This to the way to add proto

// student.__proto__=users;
// teacher.__proto__=users;

console.log(student);
