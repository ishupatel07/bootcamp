const andi = document.querySelector("#one");
const claire = document.querySelector("#two");
const sharleen = document.querySelector("#three"); // Corrected ID

document.querySelector("#andiNext").addEventListener("click", andiNext);
document.querySelector("#claireNext").addEventListener("click", claireNext);
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext);

function andiNext() {
    claire.classList.add("hidden");
    sharleen.classList.add("hidden");
    andi.classList.toggle("hidden");
}
function claireNext() {
    andi.classList.add("hidden");
    sharleen.classList.add("hidden");
    claire.classList.toggle("hidden");
}
function sharleenNext() {
    andi.classList.add("hidden");
    claire.classList.add("hidden");
    sharleen.classList.toggle("hidden");
}
