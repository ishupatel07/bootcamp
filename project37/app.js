function subtracts(n1,n2) {
    // alert(n1 - n2) 
}

console.log(subtracts(1,2))

function divison(n1,n2,n3){
    return n1 /n2 /n3
}

console.log(divison(1,2,3))

function multiplys(n1,n2,n3){
    return n1 * n2 * n3 
}

console.log(multiplys(1,2,3))

function mixMatch(n1,n2,n3){
    return (n1 + n2) % n3
}

console.log(mixMatch(1,2,3))

function num(n1,n2,n3,n4){
    let multiply = n1 * n2
   let result =null
    if(multiply > Number(100)){
    result =multiply+n3 +n4
    console.log(result)
    return result
}else if(multiply < Number(100)){
    result =multiply - n3 -n4
    console.log(result)
    return result
}


}

console.log(num(99,9,21,21,))