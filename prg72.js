   // stname
   // stclass
   // strollno

   class Student{

    
    constructor(sname,sclass,srollno){
              this.stname=sname
              this.stclass=sclass
              this.strollno=srollno
              this.display()
    }

    display(){
        console.log('student name is:',this.stname);
    }
   }

   s=new Student('Abhinand','8th',1)
   
   s1=new Student('abhi','7th',2)
   
