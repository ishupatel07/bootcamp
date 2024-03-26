let tvShows = [1,2,3,4,5]
tvShows.forEach(a => console.log(a))
tvShows.map(a => console.log(a))

for (let i = 0; i < tvShows.length; i++) {
     console.log(tvShows[i]);   
}


function name(arr) {
    let na = []
    for(let i = 0; i < arr.length; i++){

        if(arr[i] % 2 === 0){
            na.push(arr[i])
        }
    }
    return na
}

console.log(name([1,2,3,4,5,6,7,8]))


function sum(arr){
    let sortArr = arr.sort((a,b) => a-b)

    let a1 = sortArr.splice(0,1)
    let a2 = sortArr.splice(-1)
    let a3 = [...a1, ...a2]
    // console.log(arr ,"aa")
    // console.log(sortArr ,"aaa")
    // console.log(a3,"a3")

    let result = sortArr[0] + sortArr[sortArr.length -1]
    console.log(result)

}

sum([1,2,3,5,4,5,5,6,7])