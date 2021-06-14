class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    fullname() {
        return this.name + ' ' + this.surname;
    }
}

class Employee extends Person {
    constructor (name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.fullName() + ' ' + this.salary;
    }
    getSalary() {
        return this.salary;
    }
    increaseSalary() {
        return this.salary + this.salary*10/100;
    }
}

class Developer extends Employee {
    constructor (name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }
    getSpecialization() {
        return this.specialization;
    }
}

class Manager extends Employee {
    constructor (name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
    changeDepartment(newDep) {
        return this.department = newDep;
    }
}


var employee1 = new Employee('Marko', 'Markovic', 'programmer', 5000);
//console.log(employee1.getData());
//console.log(employee1.getSalary());
console.log(employee1.increaseSalary ());
var developer1 = new Developer('Pera', 'Peric', 'developer', 6000, 'front-end');
//console.log(developer1.getSpecialization());
var manager1 = new Manager('Jovan', 'Jovanovic', 'manager', 7000, 'head front-end')
//console.log(manager1);
// console.log(manager1.getDepartment());
 console.log(manager1.changeDepartment('head back-end'));
 console.log(manager1.department);