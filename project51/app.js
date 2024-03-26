function arr(arr){
    let product = 1
 arr.forEach((item) => product *= item) 
 return product
}
console.log(arr([123,12,12,12,12,12]))




// return arr.reduce((a,b) =>  a*b)