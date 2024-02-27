var prompt = require('prompt-sync')();
var Name = prompt ("Enter your name: ");

if (Name = 'Hoora'){
    console.log("Welcome");
}
 else if (Name ='Zannat'){
    console.log("Welcome");
}
else if (Name = 'Sanzida'){
    console.log("Welcome");
}
else {
console.log("Sorry! We don't find you in the system.");
} 



var prompt = require('prompt-sync')();
var num1 = prompt ("Enter a year: ");
var year = Number(num1)
if (year % 4 === 0){
    console.log("the year is a leapyear");
} else {
    console.log ("the year is not a leapyear");
}



var prompt = require('prompt-sync')();
var price1 = prompt ("Enter the price of item1: ");
var price2 = prompt ("Enter the price of item2: ");
var price3 = prompt ("Enter the price of item3: ");
var totalcost = Number(price1 )+ Number(price2) + Number(price3);
console.log("totalcost is: ",totalcost)
    if (totalcost > 100){
   var discount = 0.2 
   var discountcost = (totalcost - totalcost* discount) 
   console.log ("you got 20% discount!)")
   console.log("Discount cost is: " ,discountcost) 
}
else if (totalcost > 50) {
    discount = 0.1
    vardiscountcost = (totalcost - totalcost* discount) 
    console.log("you got 10% discount")
    console.log("Discount cost is: " ,discountcost) 
     }




     var prompt = require('prompt-sync')();
var Mathscore = prompt ("Enter the Mathscore: ");
var Englishscore = prompt ("Enter the Englishscore: ");
var Sciencescore = prompt ("Enter the Sciencescore: ");

var average = (Number(Mathscore) + Number(Englishscore) + Number(Sciencescore)) / 3 ;
console.log ("Average score is: ",average)
  
if (average > 60) {
    console.log("Grade: A");
} else {
    console.log("Grade: F")
}









