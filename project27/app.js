const contestants = document.querySelectorAll(".contestant")

Array.from(contestants).forEach(e => e.addEventListener("click", checkForRose))

function checkForRose(click){
    if(click.target.classList.contains("rose")){
        document.querySelector("#nikki").classList.toggle("hidden")
    }else{
        alert("Wrong!")
    }
}