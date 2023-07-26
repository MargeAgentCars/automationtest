//array to string

var arr = [1, 2, 3, 4, 5]
arr.toString()

var arr2 = ["hi", "hello", "Jello"]
arr2.join(" ") //returns hi hello Jello

//merge arrays
var arr3 = [1, 2, 3, 4]
var arr4 = [5, 6, 7, 8]
var newArr = arr3.concat(arr4)
console.log(newArr);


//sort array in ascending order
//(default is descending)
var numArray = [-90,-30, -1]
numArray.sort(); 
console.log(numArray); 

//sort by length of strings (ascending or descending)
var strArray = ['a', 'b']

arr.forEach(funky)

function funky(value, index, array){
    console.log('Value:'+ value +'Index:'+index+' Array: '+array)
}

//array filter: method returns a filtered version of the original array based on condition
// provided as parameter
var nums = [3, 5, 8, 13, 17]
var even = nums.filter(isEven)

function isEven(value, index, array){
    return value % 2 === 0;
}

