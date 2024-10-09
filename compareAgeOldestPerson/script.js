class Person {
    static oldestPerson = null;  
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        
        if (Person.oldestPerson === null || this.age > Person.oldestPerson.age) {
            Person.oldestPerson = this;
        }
    }

    static compareAge(person1, person2) {
        return Math.abs(person1.age - person2.age); 
    }
}


const person1 = new Person("Kate", "OLd", 30);
const person2 = new Person("Olga", "Jasmine", 40);
const person3 = new Person("Green", "Tea", 35);

console.log(`The oldest person: ${Person.oldestPerson.firstName} ${Person.oldestPerson.lastName}, age: ${Person.oldestPerson.age}`);
console.log(`Difference in age ${person1.firstName} and ${person2.firstName}: ${Person.compareAge(person1, person2)} years`);

