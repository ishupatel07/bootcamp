let number = 50
number = number - 10

console.log(number)

let inputVal = document.querySelector("#danceDanceRevolution").value

inputVal += 25

alert(inputVal)

let h1 = document.querySelector("h1")

h1.addEventListener("click" ,sum)

function sum(){
 console.log(Number(number ) + number(inputVal) )
}