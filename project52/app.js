function arr(arr){
    let newArr = []
    for(let i = 0; i <arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i])
        }
    
    }
    return newArr
}

console.log(arr([1,2,3,4,5]))