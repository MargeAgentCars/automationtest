//sample function test
function test(name, expected, actual){
    if (actual!== expected) {
		throw new Error('Expected'+ JSON.stringify(actual))
    }
    else{
        console.log("Passed!")
    }

}

function blah(num){
    return num + 1;
}


test("blah",2,blah(0))

function add(num1, num2){
    return (num1 + num2)
}

test("two positive whole numbers", 3, add(1, 2))

test("Zero and one geater than zero", 1, add(1, 0))
test("-5 plus -6 is negative ten.",-10,add(-5,-4))
test("decimal number and integer", 2.5, add(2, 0.4))
