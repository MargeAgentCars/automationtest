// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["orange", "blue", "red", "white", "brown"]


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Jane",
        lastName: "Goodall"
    }, 

    {
        firstName: "John",
        lastName: "Snow"
    }, 
    {
        firstName: "Diane",
        lastName: "Fossey"
    }, 
    {
        firstName: "Issey",
        lastName: "Miyaki"
    }
]

function randonGen(min, max){
    let rand = Math.floor((Math.random()*(max-min+1)) + min)
    return rand   
    
}

function randOnetoHundred(){
    let newRand = randonGen(1, 100)
    document.getElementById("p1").innerHTML = newRand
}

function randStartEnd(){
    let startv = document.getElementById("ran1").value
    let endv = document.getElementById("ran2").value

    let randSE = randonGen(startv, endv)

    document.getElementById("p2").innerHTML = randSE
}
function loremString(){
    document.getElementById("p3").innerHTML = lorem
}

function loremSentence(){
    let numofSent = document.getElementById("loremNum").value
    let newSentence = lorem.split(".")
    

    let newLow = " "

    for(let i = 0; i < numofSent; i++){
        newLow = newLow + newSentence[i] + "."
    }
    document.getElementById("p4").innerHTML = newLow
}

function loremCharRet(){
    let numofSent = document.getElementById("loremChar").value
    let newSentence = lorem.split("")
    

    let newLow = ""

    for(let i = 0; i < numofSent; i++){
        newLow = newLow + newSentence[i]
    }
    document.getElementById("p5").innerHTML = newLow
}

function newDate(){
    let myDate = new Date();
    let year = myDate.getFullYear()
    let month = myDate.getMonth()
    let day = myDate.getDate()
    let newMyDate = month + "-" + day + "-" + year

    document.getElementById("p6").innerHTML = myDate
}

function currTime(){
    let myTime = new Date();
    let hours = myTime.getHours()
    let minutes = myTime.getMinutes()
    let ampm

    if(hours >= 12){
        ampm = 'PM'
    }
    else{
        ampm = 'AM'
    }

    if(hours > 12){
        hours -= 12
    }

    if(minutes < 10){
        minutes = "0" + minutes
    }

    let newMyTime = hours + ":" + minutes + " " + ampm

    document.getElementById("p7").innerHTML = newMyTime
}

function fromIntoFeet(){

    let inches = document.getElementById("inToFeet").value

    let convertedFeet = inches/12
    document.getElementById("p8").innerHTML = convertedFeet

}

function fromFeettoIn(){
    var feet = document.getElementById('feet')
    var inches = feet * 12

    document.getElementById("p9").innerHTML = inches

}

function compareWords(){
    let word1 = document.getElementById("word1").value
    let word2 = document.getElementById("word2").value

    if(word1.length == word2.length){
        message = "Same length"
    }
    else {
        message = "Different words"
    }

    document.getElementById("p10").innerHTML = message
}

function randomPass(){
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    
    //PASWORD length 12
    for(let i = 0; i <= 12; i++){
        let num = randonGen(0, 12)
        newPass = newPass + chars[num]
    }

    document.getElementById("p11").innerHTML = newPass
    
}

function numberOddEve(){
    let number = document.getElementById("oddEve").value
    let message = ""

    if(number % 2 == 0){
        message = number + 'is even'
    }
    else{
        message = number + 'is odd'
    }
    document.getElementById("p12").innerHTML = message
}

function randCOlor(){

    let newColor = colors[randonGen(0, colors.length - 1)]
   
    document.getElementById("p13").innerHTML = newColor

}

function randName(){
    let firstN = names[randonGen(0,names.length-1)].firstName
    let lastN =  names[randonGen(0,names.length-1)].lastName

    let newName = firstN + " " + lastN
    document.getElementById("p14").innerHTML = newName
}