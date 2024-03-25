document.querySelector("p").addEventListener("click", reso)
function reso(){
    
    for(let i = 0; i < 365; i++){
        document.querySelector("body").innerHTML += "RESOLUTION <br>"
    }
}
// console.log(reso())