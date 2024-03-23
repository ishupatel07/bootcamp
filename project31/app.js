// function savage(){
//     for (let i = 0; i < 21; i++) {
        
//          document.querySelector("#savageSays").innerText += ` 21`
//     }
// }

// savage()



function savage() {
    let content = ""
    for(let i = 0; i < 21; i++){
        content += `21<br>`
    }
    document.querySelector("#savageSays").innerHTML = content
}

savage()
