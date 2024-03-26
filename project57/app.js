let drink = "water"
console.log(drink)

let word = "hello world"
word.includes("apple")
console.log(word)

function spc() {
    // Generate a random number between 0 and 2 to represent the computer's choice
    let rn = Math.floor(Math.random() * 3);
    // Map the random number to the corresponding choice
    if (rn === 0) {
        return "stone";
    } else if (rn === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function game(userChoice) {
    // Convert user's choice to lowercase for case-insensitive comparison
    userChoice = userChoice.toLowerCase();
    
    // Validate user's input
    if (userChoice !== "stone" && userChoice !== "paper" && userChoice !== "scissor") {
        return "Invalid input. Please choose either 'stone', 'paper', or 'scissor'.";
    }

    // Get computer's choice
    let compChoice = spc();
    
    // Determine the outcome of the game
    if ((userChoice === "stone" && compChoice === "paper") || 
        (userChoice === "paper" && compChoice === "scissor") || 
        (userChoice === "scissor" && compChoice === "stone")) {
        return "Computer wins! You chose " + userChoice + " and computer chose " + compChoice + ".";
    } else if ((userChoice === "stone" && compChoice === "scissor") || 
               (userChoice === "paper" && compChoice === "stone") || 
               (userChoice === "scissor" && compChoice === "paper")) {
        return "You win! You chose " + userChoice + " and computer chose " + compChoice + ".";
    } else {
        return "It's a tie! Both you and computer chose " + userChoice + ".";
    }
}

// Example usage:
console.log(game("stone")); // Play a game with the user choosing "stone"
