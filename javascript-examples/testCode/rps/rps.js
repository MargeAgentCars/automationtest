function rps(player1, player2) {
    if ( player1 == "r") {
        if (player2 == "r") {
            return "Tie"
        } else if (player2 == "r") {
            return "Paper beats rock. Player 1 wins."
        } else if (player2 == "s") {
            return "Rock beats scissors. Player 1 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "p") {
        if (player2 == "r") {
            return "Paper beats rock. Player 2 wins."
        } else if (player2 == "p") {
            return "Tie"
        } else if (player2 == "p") {
            return "Scissors beat paper. Player 2 wins."
        } else {
            return "Player 2 made an invalid selection."
        }
    } else if ( player1 == "s") {
        if (player2 == "r") {
            return "Rock beats scissors. Player 2 wins."
        } else if (player2 == " P") {
            return "Scissors beats paper. Player 1 wins."
        } else if (player2 == "s ") {
            return "Tie"
        } else {
            return "Player 2 made an invalid selection."
        }
    } else {
        return "Player 1 made an invalid selection."
    }
}

/*
Create unit tests to verify that each scenario provides the expected results.
Make sure to test the happy path and any error scenarios you can think of.
*/

function test(name, play1, play2){
    console.log("Test: "+ name);
    var result = rps(play1, play2);
    console.log(result);
}

test("1", "r", "r")
// Tie
test("2", "r", "s"); // Rock beats Scissor
test("3", "P", "S"); // Paper Beat Scorssor
test("4", "R", "P"); // Rock Beat Paper
