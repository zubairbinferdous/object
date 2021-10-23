class person {
    constructor (firstName , lastName , salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('hero','balam', 3000);
const friendPerson = new person('hero','balam', 3000);
console.log(heroPerson);
console.log(friendPerson);

