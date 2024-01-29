//class creation

class Employee{
    //property - variables inside a class
    empId
    empName
    empDesig
    empSalary

    //constructor - to initialise property
    constructor(id,ename,desg,salary){ //instance variable - this.variable
               this.empId=id
               this.empName=ename
               this.empDesig=desg
               this.empSalary=salary
    }

    //method - function inside a class
    display(){
        console.log(`employee name is ${this.empName} employee salary is ${this.empSalary}`);
    }
}

//object creation
 emp1=new Employee(1000,"max","developer",25000)
 emp1.display()