/*
Extracting characters from string
    1. charAt
    2. str[]
*/

let str = "PERSEVEVERANCE"

//console.log(str.charAt(0))

//console.log(str[str.length-1])

//Reversing a string
let temp = ""
for(let i = 0; i <= str.length-1; i++){
    temp = str[i] + temp
}

console.log(temp)