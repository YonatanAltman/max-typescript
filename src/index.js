"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class Address {
    constructor() {
        this.city = null;
        this.zip = null;
    }
}
class Person {
    constructor(name, lastName, age, address) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    get Name() {
        return this.name + ' ' + this.lastName;
    }
    updateLastName(str) {
        this.lastName = str;
    }
}
function getPersonAddress() {
}
let person;
person = new Person('yonatan', 'altman', 33, { zip: 3, city: '' });
person.updateLastName('altman');
console.log(person);
const user = (0, user_1.initUser)({});
console.log('just init', user); // user.name = 'אורח'
const user2 = (0, user_1.initUser)({ age: 18, name: 'Golan' });
console.log('with parameters', user2); // user.name = 'Golan'
