const normalPerson = {
    first: 'zubair',
    last:  'khan',
    salary: 12000 ,
    getFullName: function () {
        console.log(this.first, this.last);
    },
    charge: function (amount , tips , tax) {
        console.log(this)
        this.salary = this.salary - amount - tips - tax;
    }
}

console.log(normalPerson.first);
normalPerson.charge(500);
console.log(normalPerson.salary);


const heroParson = {
    fast: 'hero',
    last: "balam",
    salary: 20000,
}

const friendParson = {
    fast: 'hero',
    last: "kalam",
    salary: 10000,
}

// apply use

normalPerson.charge.apply(heroParson , [5000 , 2000 ,1000] );
console.log(heroParson.salary)

// use call *************

normalPerson.charge.call(heroParson , 5000 , 2000 ,1000 );
console.log(heroParson.salary)

// use bind ****************

normalPerson.charge();
const heroCharge = normalPerson.charge.bind(heroParson);
heroCharge(2000);
heroCharge(2000);
console.log(heroParson.salary)

const friendCharge = normalPerson.charge.bind(friendParson);
friendCharge(5000);
console.log(friendParson.salary)
