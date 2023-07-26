//Add, Update and Delete Object Properties

let obj2 = {
    firstName:"Ganesh",
    lastName:"Kumar",
    age:8,
    class:1,
}

obj2.middleName = "Satish"
obj2["height"] = 3.4
obj2.firstName = "Ram"
//obj2.class = null
delete obj2.class
console.log(obj2)
