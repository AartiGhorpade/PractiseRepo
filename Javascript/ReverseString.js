// function reverseString(str) {
//     let newStr = str.split('').reverse().join('')
//     return newStr;
// }

// console.log(reverseString("artiGhorpade"));

function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString("artiGhorpade"));