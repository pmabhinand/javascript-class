//method overriding

class A{
    methoda(){
        console.log('inside class A');
    }
}

class B extends A{
    methoda(){
        console.log('inside class B');
    }
    methoda(){
        console.log('inside child');
    }
} 

const obj=new B

obj.methoda()