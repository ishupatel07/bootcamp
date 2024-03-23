
const inputVal = document.querySelector("#snacks").value
document.querySelector("h2").addEventListener("click", stopLateNightSnacks)
document.getElementById("snacks").addEventListener("keypress", pressEnter)


function pressEnter(e) {
    if (e.key === "Enter") {
        stopLateNightSnacks()
    }
}

function stopLateNightSnacks() {
    let content = ""
    for (let i = 1; i <= inputVal; i++) {
        content += `stop and get some help! <br>`
    }
    document.querySelector("#result").innerHTML = content
    document.querySelector("#snacks").value = ""

}


