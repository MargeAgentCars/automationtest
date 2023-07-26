//properties to objects
var person = {
    firstName: "John", 
    lastName: "Doe",
	age: 30, 
    favColor:"blue", 
    syName: function(){
        console.log(`My name is ${this.firstName}`);
    }
}

console.log(person); //object literal

person.age = 38

console.log("Person's age is now:", person["age"]);

delete person.favColor

var person2 = {
    firstname: 'Jane',
    lastname:'Doe', 
    myName(){
        return `${this.firstname} ${this.lastname}`
    }
};

