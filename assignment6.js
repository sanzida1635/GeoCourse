 var student = {
     name: "Sanzida",
     age: "22",
     numbers: [89, 76, 56],
 calculateAverage: function() {
     var sum = 0
     for(var i = 0; i<this.numbers.length; i++){
         sum = sum + this.numbers[i];
  }
     return sum / this.numbers.length;
 }
 };
 console.log(student.calculateAverage());



let person = {
    name:"Sanzida",
    age: "22",
    occupation:"Student",
    hobby :"Art",
    greet:function(){
        return "Hello,my name is: "+ this.name;
    },
    personage:function(){
        return "My age is: "+ this.age;
    },
    personoccupation:function(){
        return "My occuoation is: "+ this.occupation;
    },
    personhobby:function(){
        return "My hobby is: "+ this.hobby;
},
}
console.log(person.greet())
console.log(person.personage())
console.log(person.personoccupation())

person.name = "Zannat"
console.log(person.greet())

console.log(person.personhobby())
