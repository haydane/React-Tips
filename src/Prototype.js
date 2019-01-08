var name, yearOfBirth, position;
var dt = new Date();

var Person = function (name, yearOfBirth, position) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.position = position;
}

Person.prototype.calculateAge = function () {
  console.log(dt.getFullYear() - this.yearOfBirth);
}

var jonh = new Person("Dane", 1997, "developer");
jonh.calculateAge();

