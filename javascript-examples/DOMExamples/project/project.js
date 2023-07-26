/*
Using the included .html and .js files, do the following:
1. Change the text of "Heading 1" to "Welcome to my site!".
2. Change the text of "Paragraph 1" to "My name is " and add your name.
3. Remove the second H1 element
4. Change the font color of "Paragraph 2" to blue
5. Change the text of "Paragraph 2" to "I love JavaScript"
*/
var headingOne = document.getElementById("h1").replaceWith("Welcome to my site!")
console.log(headingOne)

var paragraphOne = document.getElementById("p1").replaceWith("My name is Margarita")
console.log(paragraphOne);
document.querySelector("#h1").remove(); // remove h1 tag with id="h1"
document.getElementById("p2").style.color = "blue"
document.getElementById("p2").textContent ="I Love Javascript";
// console.log(paragraphTwo);


/* teacher solution
document.getElementById("h1").innerHTML = "Welcome to my site!"
document.getElementById("p1").innerHTML = "My name is Margarita"
document.getElementById('h1').parentNode.removeChild(document.getElementById('h1'))
document.getElementById("p2").style.color = 'blue'
document.getElementById("p2").innerText = "I Love JS"
*/
