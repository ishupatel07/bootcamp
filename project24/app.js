
 document.querySelector(".check").addEventListener("click", celsiusToFahrenheit)


 function handleKeyPress(event) {
    if (event.key === "Enter") {
        celsiusToFahrenheit();
    }
}

document.querySelector("#temp").addEventListener("keypress", handleKeyPress);





function celsiusToFahrenheit(){
    // (°C) * 9/5) + 32
    const inputVal = document.querySelector("#temp").value
 
    if(inputVal === ""){
        alert("please enter vaild numbers")
    }else{
        let formula = (inputVal * 9/5) + 32
        document.querySelector(".result").innerText = formula
        
    }

}