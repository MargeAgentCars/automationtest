function Person(firstName, lastName) {
    this.first = firstName
    this.last = lastName, 
    this.myName = function(){
        console.log(this.first + " " + this.last)
    }
  }

  Person.prototype.favColor = "blue"

  Person.prototype.printColor = function(){
    alert("My favorite color is: "+ this.favColor);
  }
  