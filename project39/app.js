let name = "Ab! haaye"

console.log(name)

let num = 10
// alert(10)

function subtract(n1,n2,n3,n4){
         return n1-n2-n3-n4
}

console.log(subtract(2,3,4,5))

function findingReminder(n1,n2){
    return n1 % n2
}

console.log(findingReminder(12,21))

function abcde(n1,n2,n3){
    let result = n1* n2* n3
    if(result % 3 === 0){
        return "zebra"
    }else{
        return "nope"
    }
}

console.log(abcde(19900,888,221))

function ab(a,b,c){
    a = "hi hello chodo hare krishna bolo"
    b = 8
    
    for(let i = 0;i < b; i++){
         c += a + i
    }
return c
}


console.log(ab())





