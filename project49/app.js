function summerMonthCheck(month){
    let lowerCaseMonth = month.toLowerCase()    
    
    if(lowerCaseMonth === "feb" || lowerCaseMonth === "march" || lowerCaseMonth === "april" || lowerCaseMonth === "may"){
        return "Yah"
        }else{
            return "BOOO"
        }
}

console.log(summerMonthCheck("JULY"))

function skip5(n){
         for(let i = 1; i <= n; i++){
            if(n % 5 !== 0){
                console.log(i)  
            }
         }
}

skip5(100)

function skip5(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 5 !== 0) {
            console.log(i);
        }
    }
}

console.log(skip5(100));
