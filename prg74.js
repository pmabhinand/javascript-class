class Parent{
    bike(){
        console.log('bullet');
    }
}

class Child extends Parent{

}

const obj = new Child()

obj.bike()