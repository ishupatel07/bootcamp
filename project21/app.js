document.getElementById("one").onclick = zero
document.getElementById("two").onclick = three
document.getElementById("three").onclick = nine
document.getElementById("four").onclick = subtwo

let total = 0

function zero(){
    total = 0
    document.querySelector("span").innerText = total
}

function three() {
    total = total + 3
    document.querySelector("span").innerText = total
}
function nine() {
    total = total + 9
    document.querySelector("span").innerText = total
}
function subtwo() {
    total = total - 2
    document.querySelector("span").innerText = total
}

