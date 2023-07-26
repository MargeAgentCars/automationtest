var num = 12
var str = num.toString()

var exp = 5.556

exp.toExponential(2)

exp.toFixed(2)
exp.toLocaleString('en-US', {style: 'currency', currency:'USD '})

exp.toPrecision(2)

//NaN
Number.isNaN(str);

Math.PI
Math.round(4.67)
Math.pow(3,8)
Math.sqrt(36)
//cell, floor, min, max
//, random, abs, sin, cos, tan, asin, acos, atan, log
//, ln, sqrt, cbrt, hypot, exp, pow, ceil, trunc,
//sign, modf, frexp, fmod, ldexp, copysign, nextafter

/*
In this assignment I want you to create a "Random Number Generator".
You should create a function that takes in 2 numbers. The min and max.
I want only whole numbers. No decimals.
*/

var num1 = Math.random(1, 20) + 1
var num2 = Math.random(1, 20) + 5
var n1 = Math.ceil(num1)
var n2 = Math.ceil(num2)

var n3 = Math.ceil(randomNumberGenerator(n1, n2))
console.log("The number is between",n1,"and ",n2)
console.log("Te number generated is ", n3)

function randomNumberGenerator (min,max){
    return Math.floor((Math.random() * (max - min + 1)) + 5)
}

