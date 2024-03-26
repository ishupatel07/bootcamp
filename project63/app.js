document.querySelector("button").addEventListener("click", getDrink)

function getDrink(){
    let drinkChoice = document.querySelector("input").value
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drinkChoice
   
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`);
    })
}