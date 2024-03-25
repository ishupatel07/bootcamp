function addTwoNum(n1,n2) {
    let result = n1 + n2

    if(result > 50){
        console.log("Jumanji")
    }
    return result
}

console.log(addTwoNum(25,26))

function multuplys(n1,n2,n3){
    let product = n1 * n2 * n3
    if(product % 3 === 0){
        console.log("Zebra")
    }
    return product
}

console.log(multuplys(12,21,21))
console.log(multuplys(7,2,11))