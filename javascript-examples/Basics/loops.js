var triangle = ''
for(var i = 1; i<6; i++){
    
    for(var j = 1; j <= i; j++){
       triangle += '*'
    }
    
    triangle += '\n'
}
console.log(triangle)

var favColor = "red"

switch (favColor) {
    case "blue":
        console.log("Violets are blue")
        break;

    case "red":
        console.log("Roses are red")
        break;

    default:
        console.log("Sugar is sweet")
        break;
} 
/*if(favColor == "blue") {

    console.log("Violets are blue")

} else if (favColor == "red") {

    console.log("Roses are red")

} else {

    console.log("Sugar is sweet")

}*/