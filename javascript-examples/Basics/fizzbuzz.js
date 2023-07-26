/*
Create a function that does the following:

- The function must take 2 numbers. A start and an end.

- The function should check each number in the range given to see if it meets one of these criteria:

    - If the number is divisible by 3 print out "Fizz"

    - If the number is divisible by 5 print out "Buzz"

    - If the number is divisible by both 3 and 5, print out "FizzBuzz"

    - If none of the above is true then just print the number

*/
function fizzbuzz(startNum,endNum){
    for (let i = startNum;i<=endNum ;i++){
        let str ="";
        //check if num % 15 ==0
        if ((i%15)==0) {
            console.log("fizz buzz");
        }
        else{
            //check if num % 5==0
            if((i%5)==0 ){
                str="buzz";
            }
            else{
                //check if num % 3==0
                if((i%3)==0){
                    str=str+"fizz";
                }else{
                        str+=i;
                    }
            }
            console.log(str);
        }
    }
}

fizzbuzz(20, 40)
