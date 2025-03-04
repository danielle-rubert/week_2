"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Person;
}());
exports.Person = Person;
//const person = new Person("Pepe", 30, "Calle Alameda 40");
//person.printName();
//console.log(person.yearOfBirth(2025)); 
//person.setAddress("Calle Nueva 245");
//console.log(person.getAddress()); 
