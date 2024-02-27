var calculator = {
    add:function (x,y){
        return x+y
    },
    subtract:function(x,y){
        return x-y
    },
    multiply: function(x,y){
        return x*y
    }
}
var prompt = require("prompt-sync")();
var num1 = Number(prompt("Enter the first number: "))
var num2 = Number(prompt("Enter the second number: "))

function userInput(num1,num2){
    var sum = calculator.add(num1,num2)
    var subtracted = calculator.subtract(num1,num2)
    var multiplied= calculator.multiply(num1,num2)
    console.log("Summation is: ",sum, "\n", "Subrtraction is: ",subtracted, "\n","Multiplication is: ",multiplied)
}
userInput(num1,num2)






var array =[5,10,15,20,25,30]
 function squaredNum1(num){
     return num*num;
 }
 console.log(array);
 var squaredNum = array.map(squaredNum1);
console.log(squaredNum)




var prompt = require("prompt-sync")();
function greet(name ="Guest"){
    console.log("You are most welcome", name)
}
greet()





function f(x) {
    return (x*2 + 2*x + 6)
}
var x = 2
var y = f(x)
console.log(


