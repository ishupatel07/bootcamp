const inputVal = document.querySelector("#age").value
const result = document.querySelector(".result")
document.querySelector("h1").addEventListener("click", checkAge)
function checkAge(){

    if(inputVal < 16){
    return result.innerText = `You can not drive`
}else if(inputVal < 18){
    return result.innerText = `You can't hate from outside the club, because they can't even get in.`
}else if(inputVal < 21){
    return result.innerText = `You can not drink.`
}else if(inputVal < 25){
    return result.innerText = `You can not rent cars affordably.`
}else if(inputVal <30){
    return result.innerText = `You can not rent cars affordably`  
}else if (inputVal >= 30){
    return result.innerText = `there is nothing left to look forward too.`
}
}
