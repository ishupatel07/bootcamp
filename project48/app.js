let food = "sandwich"
food = "rotibhaji"
console.log(food)

let string = "string"

let result = string.charAt(1)
console.log(result)

function num(n1,n2,n3){
    return (n1 / n2) * n3
}

console.log(num(1,2,3))

function cubeRoot(num){
    const result  = Math.pow(num, 1/3);
    console.log(`The cube root of ${num} is ${result}`);
}
cubeRoot(27)