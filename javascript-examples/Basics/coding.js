//palindrome
/*
A Palindrome is a word or phrase that is the same forwards of backwards.
Example: "Anna" backwards is "Anna"
Write a function that checks if a word or phrase is a palindrome.
Write some tests for your function.
*/
function checkPalindrome(str) {

    let word = str.split('');
    let reversed = word.reverse()
    reversed = reversed.join('');
    
    if(str.toLowerCase().replace(/\s/g, "") === reversed.toLowerCase().replace(/\s/g, "")){
        return true;
    }
   
}

function test(string1){
    if(checkPalindrome(string1) == true){
        console.log(`${string1} IS A PALINDROME`)
    }
    else{
        console.log(`${string1} NOT A PALINDROME`)
    }
}
test("Madam Im Adam")
test("anita lava la tina")
test("dabale arroz a la zorra el abad")