var thing = "Hello"
thing.length

//password
if(thing.length > 5){
    console.log("Hello World!")
}

var sentence = "I just come to say hello"
//first ocurrence
sentence.indexOf("hello")
sentence.indexOf("baby") //return -1

sentence.lastIndexOf("say")

var str = "Harder, Better, Faster, Stronger"

var sl = str.slice(7, 22)
console.log(sl)

var sb = str.substring(7, 22)
console.log(sb)

//replace content
var phrase = "I have some flowers with chocolates"
var date = phrase.replace("chocolate","strawberry")
console.log(date);
var date2 = phrase.replace(/Chocolate/i, "pasta")
console.log(date2);

var word = "happy"
console.log(word.toUpperCase())
console.log(word.toLowerCase());

var sentencia = "     Hello kitty      "
sentencia.trim()


var arrstr = "1, 2, 3, 4, 5"
var array = arrstr.split(",")
array[0] = parseInt(array[0]) + 9;


//string to number
var num = "5"
num = Number(num)
console.log(typeof (num))
