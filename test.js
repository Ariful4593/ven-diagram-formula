const arif = [
    {id: 1, name: 'Ariful Islam', roll: 171966, dept: 'Computer'},
    {id: 2, name: 'Shoriful Islam', roll: 171967, dept: 'Civil'},
    {id: 3, name: 'Karimul Islam', roll: 171968, dept: 'Civil'},
    {id: 4, name: 'Selim Islam', roll: 171969, dept: 'Textile'},
];


const normalPerson = {
    firstName: "Ariful",
    lastName: "Islam",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName: "Hero",
    lastName: "Alom",
    salary: 20000,
}

const friendlyPerson = {
    firstName: 'Sofiq',
    lastName: 'Khan',
    salary: 22000,
}
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// console.log(heroPerson.salary);

normalPerson.chargeBill.call(heroPerson, 1000);
console.log(heroPerson.salary);