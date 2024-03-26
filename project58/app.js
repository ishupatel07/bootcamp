let arr = [1,2,3,4,5,6,7,8,8,9]
let sum = arr.reduce((a,b) => a+b)
console.log(sum);


function arrN(arr) {
    let newArr = [...arr];
    return newArr.map((a) => a * a);
}

console.log(arrN([1, 2, 3, 4, 5, 6]));
