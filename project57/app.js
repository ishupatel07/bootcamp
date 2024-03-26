let drink = "water"
console.log(drink)

let word = "hello world"
word.includes("apple")
console.log(word)

function spc(){
    let rn =  Math.floor(Math.random() * 3)
    if(rn === Number(0)){
        return "stone"
    }else if( rn === Number(1)){
        return "paper"
    }else if(rn  === Number(2)){
        return "scissor"
    }
}

console.log(spc())