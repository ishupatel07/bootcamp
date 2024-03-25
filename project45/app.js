function num(n1,n2,n3,n4){
    return (n1 + n2 + n3) / n4

}

console.log(num(3,3,3,3))


function power(n1,n2){
    return Math.pow(n1,n2)
}

console.log(power(4,4))

function booleanAndString(b,s){
    b = false
    s ="boolen"
    if(b){
        return s
    }else{
        console.log(s, "a")
    }
}

console.log(booleanAndString())

function num(n){
    // let result = 0;
    for(let i = 1; i <= n; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
    console.log("Buzz");
}else if(i % 3 === 0 && n % 5 === 0){
    console.log("FizzBuzz");
}else{
    console.log(i);
      
    }
    }
}


console.log(num(551, "A"))

function fizzBuzz(number) {
    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage:
fizzBuzz(15); // This will log the FizzBuzz sequence from 1 to 15
