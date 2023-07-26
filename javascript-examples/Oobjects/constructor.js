var me = {
    firstname:"John", 
    lastname:"Doe",
    myName(){
        console.log('myName')
      //return '<NAME>'
    }
  }
  
  var bestFriend = {
    firstname:"Mary", 
    lastname:"Smith", 
    myName(){
        console.log('bestfriend: '+ this.firstname + " " + this.lastname)
    }
  }

  //constructor method

  function Person(firstName, lastName) {
    this.first = firstName
    this.last = lastName, 
    this.myName = function(){
        console.log(this.first + " " + this.last)
    }
  }
