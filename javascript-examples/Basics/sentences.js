var answer1 = prompt("Enter a color")
var answer2 = prompt("Enter a number between 1 and 5")

if(color == "blue" && number <= 5 && number >= 1){
    console.log("Answers meets the requeriments")
}
else if(color == "red" || number <= 5){
    console.log("At least one of the requirements are accomplished")
}
else{
    console.log("Answers do not meet the requirements")
}