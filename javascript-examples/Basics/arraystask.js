/*
Create a function that takes an array as a parameter and compares the values of the array.
Print out the number of matches.
Here is an example:
[1, 1, 2, 3]
1 and 1 are the same.
1 and 2 are different.
Print out would have a count of 1 match.
Write some tests for your function.
*/
// Solution #1 - Using indexOf() method to find matching elements in arrays (O(n^2))

const arr = [1, 1, 2, 3]

function compareArrays(arr) {
    let numMatches = arr.map((num) =>
    [
     ...new Set([...arr].filter((x) => x === num)), // Use set data structure to remove duplicates from original array
    ]).reduce((acc, curr) => acc + curr.length);
    return console.log(`There were ${numMatches} matches`);
}

compareArrays(arr)

function compArray(arr){

    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            if(arr[i]==arr[j]){
                console.log( "match "+`${arr[i]} & ${arr[j]}`)
            }
            else{
                console.lo("Not match")
            }
        }
    }
}