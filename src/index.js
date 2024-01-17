"use strict";
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
