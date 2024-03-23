


document.querySelector("#check").onclick = check
 

function check(){
    const day = document.querySelector("#Day").value
    if(day === "sunday" || day === "saturday"){
        document.querySelector("#placeToSee").innerText = "It's weekend"
    }else if(day === "tuesday" || day === "thursday"){
        document.querySelector("#placeToSee").innerText = "CLASS YAY!!!S"
    }else{
        document.querySelector("#placeToSee").innerText = "Boring"
    }

    document.querySelector("#Day").value = ""

}