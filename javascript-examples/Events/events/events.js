function btnPressed(){
    alert("Button Pressed");
    document.getElementById("p1").innerHTML = "Button I pressed"
}

function txtType(){
    console.log("Text typed")
    if(document.getElementById("i1").value = "123"){
        document.getElementById("p2").innerHTML = "Valid password"
    }
    else{
        document.getElementById("p2").innerHTML = "Invalid Password"
    }
}

document.getElementById("b2").addEventListener("", btn2Pressed)

function btn2Pressed(){
    console.log("Button 2 pressed")
    document.getElementById("p1").innerHTML = "button 2 pressed"
}

document.getElementById("i2").addEventListener("change", txt2Typed)

function txt2Typed(){
    console.log("text changed in input box 2")

    if(document.getElementById("i2").value = "123"){
        document.getElementById("p4").innerHTML = "Valid password"
    }
    else{
        document.getElementById("p4").innerHTML = "Invalid Password"
    }
}

document.getElementById("p4").addEventListener("mouseover", moused)

function moused(){
    this.innerHTML = "You have been moused!"
}