let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user)

let schedule = {}
console.log(isEmpty(schedule))

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

function isEmpty(obj){
    for(let key in obj){
        return true
    }
    return false;
}

console.log(isEmpty(schedule))

let salaries = {
    width: 200,
    height: 300,
    title: 120
}
// multiplyNumeric(menu);

let sum  = 0;
for(let key in salaries){
    sum += salaries[key];
}

console.log(sum)



let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu); // Call the function to modify the menu object
console.log(menu); // Log the modified menu object
