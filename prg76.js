class A{
    methoda(){
        console.log('inside class A');
    }
}

class B extends A{
    methodb(){
        console.log('inside class B');
    }
}

class C extends B{
    methodc(){
        console.log('inside class C');
    }
}

const obj = new C 

obj.methodc()
obj.methodb()
obj.methoda()