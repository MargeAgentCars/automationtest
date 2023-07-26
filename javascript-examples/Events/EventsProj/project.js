/*
For 1 & 2, use the correct JavaScript Event.
1. When Button 1 is clicked:
    a. Paragraph 1 should be replaced with "Button 1 was clicked"
    b. An alert should appear with text "Button 1 was clicked"
2. When Text is typed into the first text field (and the cursor moved away):
    a. Paragraph 2 should display "Characters typed" + the number of characters.
For 3 & 4, use Event Listeners.
3. When Button 2 is clicked:
    a. Paragraph 3 should be removed
4. When Text is typed into the second text field:
    a. Paragraph 4 should change font size for each character entered
HINT: Since we haven't learned much about CSS in this course you will need to know a few things.
1. The style attribute you want to use is "fontSize"
2. The font size can be set in different ways, but for this exercise just append "em" to your value.
*/
function btnPressed(){
    document.getElementById("p1").innerHTML = "Button 1 was clicked"
    alert("Button 1 was clicked")
}

function txtType(){
    var chars = document.getElementById("i1").value
    document.getElementById("p2").innerHTML = "Characters typed "+chars.length
}

document.getElementById("b2").addEventListener("click", btn2Pressed)

function btn2Pressed(){
    var main = document.getElementById("main")
    var child = document.getElementById("p3")
    main.removeChild(child)
}

document.getElementById("i2").addEventListener("change", txt2Typed)

function txt2Typed(){
    var size = document.getElementById("i2").value.length
    if(size >0){
        document.getElementById("p4").style.fontSize=size+"em"
    }    
}

