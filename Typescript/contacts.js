"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.añadirPersona = function (people) {
        this.people.push(people);
    };
    Contacts.prototype.printCalendar = function () {
        this.people.forEach(function (person) {
            console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Address: ").concat(person.getAddress()));
        });
    };
    return Contacts;
}());
exports.Contacts = Contacts;
