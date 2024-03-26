function arr(arr){
    
    let a1 = arr.slice(0)
    let a2 = arr.slice(-1)
    if(a1 < a2){
        return "hie"
    }else if(a1 > a2){
        return "bye"
    }else if (a1 === a2){
        return "we close in an hour"
    }
}

 console.log(arr([1,2,3,4,5]))

 