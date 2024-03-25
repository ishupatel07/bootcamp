let hehehe = document.querySelector("h1").addEventListener("click", haha)


function haha(){
    let inputVal = document.querySelector("#task").value.toLowerCase()
    let houseVal = document.querySelector("#task2").value.toLowerCase()
    let result ="    " ;
    if(inputVal === "tuesday" || inputVal === "thursday"){
        result += `hahah you have class`
        return document.querySelector("p").innerText = result 
    }else if(inputVal === "saturday"){
         result += `hahaha office hours`
        return document.querySelector("p").innerText = result 
    }else if(inputVal ===  "friday" || houseVal === "turing"){
         result += `hahaha private office hours`
        return document.querySelector("p").innerText = result 
    }else if(inputVal === "wednesday" || houseVal === "hopper"){
         result += `hahaha privarte office hours`
        return document.querySelector("p").innerText = result 
    }else if(inputVal === "monday" || houseVal === "hamiltion"){
         result += `hahaha 1on1`
        return document.querySelector("p").innerText = result 
    }else{
         result += `hahaha study`
         return document.querySelector("p").innerText = result
    }

}