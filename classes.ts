class Department {
    departmentName: string;
    private employees: string[] = [];

    constructor(n: string){
        this.departmentName = n;
    }

    addEmployee(obj: {name: string; lastName: string}){
        this.employees.push(obj);
    }

}
const newDepartment = new Department('Accounting');
newDepartment.addEmployee({name: 'Max', lastName: 'Jonson'})
newDepartment.addEmployee({name: 'John', lastName: 'Jonson'})
//this.employees.push({name: 'Test', lastName: 'Test'}) brings error as it should
console.log(newDepartment)

//Inheitance
class ITDepartment extends Department{
    private administrators: string[] = [];

    addAministrator(obj: {name: string; lastName: string}): void{
        this.administrators.push(obj);
    }
}
const ourIT = new ITDepartment('IT Department');
ourIT.addAministrator({name: 'Ann', lastName: 'Smith'});

console.log(ourIT)