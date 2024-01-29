class Bank{
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000},
    }
      
    //method to validate account

     ValidateAccount(acno){
         return acno in this.accountDetails?true:false
     }

    //method to authendicate account

    AuthendicateAccount(acno,pswd){
         if(this.ValidateAccount(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log('authentication successfull');
            }
            else{
                console.log('invalid password');
            }
         }
         else{
            console.log('invalid account');
         }
    }

    //method to check the balance of a given account
     getBalance(acno,pswd){
          if(this.ValidateAccount(acno)){
               if(this.accountDetails[acno].password==pswd){
                    console.log(`current balance of account number ${acno} is ${this.accountDetails[acno].balance}`);
               }
               else{
                  console.log('invalid password');
               }
          }
          else{
            console.log('invalid account');
          }
     }

    //method to transfer fund
    transfer(fromacc,toacc,amount){
        if(fromacc in this.accountDetails && toacc in this.accountDetails){
             if(this.accountDetails[fromacc].balance>=amount){
                console.log(`initial balance of account no ${fromacc} is ${this.accountDetails[fromacc].balance}`);
                 this.accountDetails[toacc].balance+=amount
                 this.accountDetails[fromacc].balance-=amount
                 console.log(`final balance of account no ${fromacc} is ${this.accountDetails[fromacc].balance}`);
                 console.log('transfered amount is :',amount);
     
    
             }
             else{
                console.log('insufficient balance');
             }
    
        }
        else{
            console.log('enter vaild account numbers');
        }
    
    }
     



}

const user1=new Bank()
console.log(user1.ValidateAccount(1002)?'valid account':'invalid account');

user1.AuthendicateAccount(1000,'userone')

user1.getBalance(1001,'usertwo')

user1.transfer(1000,1001,1000)