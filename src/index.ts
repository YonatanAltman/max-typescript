import {initUser} from "./user";

class Address {
    street?: string;
    city: string | null;
    zip: number | null;

    constructor() {
        this.city = null;
        this.zip = null;
    }
}

class Person {
    name: string;
    lastName: string;
    age: number;
    address: Address;

    constructor(name: string,
                lastName: string,
                age: number,
                address: Address) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.address = address;

    }

    get Name() {
        return this.name + ' ' + this.lastName
    }

    updateLastName(str: string) {
        this.lastName = str;
    }
}

function getPersonAddress() {

}

let person: Person;
person = new Person('yonatan','altman',33,
    {zip:3,city:''});
person.updateLastName('altman');


console.log(person);


const user = initUser({});

console.log('just init',user); // user.name = 'אורח'
const user2 = initUser({age:18,name:'Golan'})
console.log('with parameters',user2); // user.name = 'Golan'