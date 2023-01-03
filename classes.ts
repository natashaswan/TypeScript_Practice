class Department {
    departmentName: string;
    id: string;
    private employees: string[] = [];

    constructor(id: string, name: string){
        this.id = id;
        this.departmentName = name;
    }

    addEmployee(obj: {name: string; lastName: string}){
        this.employees.push(obj);
    }

}
const newDepartment = new Department('129', 'Accounting');
newDepartment.addEmployee({name: 'Max', lastName: 'Jonson'})
newDepartment.addEmployee({name: 'John', lastName: 'Jonson'})
//this.employees.push({name: 'Test', lastName: 'Test'}) brings error as it should
console.log(newDepartment)

//Inheritance
class ITDepartment extends Department{
    private administrators: string[] = [];
    constructor(id: string){
        super(id, 'IT Department')
    }
    addAministrator(obj: {name: string; lastName: string}): void{
        this.administrators.push(obj);
    }
}
const ourIT = new ITDepartment('1346');
ourIT.addAministrator({name: 'Ann', lastName: 'Smith'});

class AccountingDepartment extends Department{
    reports: string[] = [];
    constructor(id: string){
        super(id, 'Accounting Department')
    }
}

const ourAccounting = new AccountingDepartment('136');

console.log(ourIT)
console.log(ourAccounting)