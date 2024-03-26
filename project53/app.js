let vacation;
vacation = "dwarka"

console.log(vacation.toUpperCase())


let str = "aeheloooo"
console.log(str.slice(0,3))

function subtracts(n1,n2,n3,n4,n5) {
    let result  = (n1+n2+n3+n4+n5) - 100
    return Math.abs(result)
}

console.log(subtracts(1,2,34,5,55))

function num(n1,n2,n3){
    let lowest = Math.min(n1,n2,n3);
    let highest = Math.max(n1,n2,n3);
    console.log(lowest);
    console.log(highest);
}

num(1,2,3)



function headOrTail() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    
    // If the random number is less than 0.5, return "head", otherwise return "tail"
    return randomNumber < 0.5 ? "head" : "tail";
}
console.log(headOrTail())

function resultOfHeadAndTail(n) {
    let headCount = 0;
    let tailCount = 0;
    
    for (let i = 0; i < n; i++) {
        let result = headOrTail();
        if (result === "head") {
            headCount++;
        } else {
            tailCount++;
        }
    }

    return [headCount, tailCount]

    // Log the result to the console
    // console.log("Heads count:", headCount);
    // console.log("Tails count:", tailCount);
}

console.log(resultOfHeadAndTail(1000));
