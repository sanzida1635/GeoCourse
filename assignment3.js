var prompt = require('prompt-sync')();
var num = Number(prompt("Enter First number of the series: "))
var num2 =Number(prompt("Enter last number of the series: "))
var sum = 0 ;
for (;num<=num2;num = num+2 ){
    sum = sum + num
}
console.log("The sum of the series is: ", sum)




var i = 2
var sum = 0
for (; i <= 500 ; i = i + 2) {
    sum = sum + i
     console.log(i)
    console.log("The sum of all even number: ",sum); }




    var i = 1
    var sum = 0
    for (; i <= 500 ; i = i + 2) {
        sum = sum + i
         console.log(i)
        console.log("The sum of all odd number: ",sum);}