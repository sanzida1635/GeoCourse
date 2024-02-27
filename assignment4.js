var ar = [[1,2,3],
          [4,5,6],
          [7,8,9]]
          console.log("The original value is: ",ar);
for (var  i = 0; i < ar.length ; i++){
    for(var j = 0; j<3 ; j++)
    console.log("The increased value is: " ,(ar[i][j] + 1))
}




var prompt = require('prompt-sync')();
var Array = [] ;
for(var i = 0 ; i < 5 ; i ++){
     var numlist = Number(prompt("Enter a number: "))
     Array.push(numlist)
 }
 console.log("The unsorted array is: " , Array)
 console.log("The sorted array is: " , Array.sort())



 var twoDarray = [[2,7,89,6],
                  [90,45,3,7],
                  [78,56,4,2]]
 for(var i = 0; i <twoDarray.length; i++){
     for(var j = 0; j<4 ; j++)
     console.log (twoDarray[i][j])
 }




 var input = require('prompt-sync')();
var ar = [];
for(var i=0 ;i<5 ;i++){
    var num =Number(input("Enter a number: "))
}
if(num/2===0){
    console.log ("its a even number ");
}else{
    console.log ("its an odd number");
}