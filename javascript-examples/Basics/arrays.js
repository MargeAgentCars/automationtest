var people = ["John", "Bob", "Betty"]

//people(1): returns the value in position 1

/*
Array methods: 
.pop(): deletes the last position value
.push(): put a value into the array

.shift(): deletes the first element on array
.unshift(): puts a new element in the first position

.splice(position, elementsforRemove, value): put a new value in an especific 
position
Ex: .splice(0, 0, "Black") inserts the value into the position 0 and none element 
is deleted.
.sclice(positions): shows the values contained in the given positions. 
*/

var things = []

var answer

answer = prompt("What is your favorite thing?")
things.push(answer)

answer = prompt("What is your second favorite thing?")
things.push(answer)

console.log(things)

var books = []
var value

value = prompt("Enter a book:")
books.push(value)
value = prompt("Enter a second one book:")
books.push(value)
value = prompt("Enter a third book:")
books.push(value)
value = prompt("Another one?: ")
books.push (value)
value = prompt ("And another? :")
books.push(value)
value = prompt("Enter a last book:")
books.splice(0, 0, value)
books.pop()

console.log(books)



