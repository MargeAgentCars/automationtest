var person = {
    firstName: "Jason", 
    lastName: "Williams", 
    get myName() {
        return this.firstName +'' + this.lastName;
    },
    set myName(value){
        var name = value.split(" ")
        this.firstName = name[0]
        this.lastName = name[1];
    }

  };

  
 