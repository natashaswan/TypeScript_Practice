class Department {
    departmentName: string;
    employees: string[] = [];

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
console.log(newDepartment)