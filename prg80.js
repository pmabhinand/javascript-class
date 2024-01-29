exp="10*2+5"
console.log('exception handling');
try
{
    const result=eval(exp)
console.log("result",result);
}
catch{
    console.log('error in eval statement');
}
finally{console.log("task complete");}
