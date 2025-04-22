
// without inbuilt function in a positive way

// function reverseString(str) {
//     let newStr = "";

//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }
// console.log(reverseString("arti 12 Ghorpade"));

// without inbuilt function in a negative way

// function reverseString(str) {
//     let newStr = "";

//     for (let i = 0; i < str.length; i++) {
//         if (!(str[i] >= '0' && str[i] <= '9') && str[i] !== ' ') {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// console.log(reverseString("arti 12 Ghorpade")); 


let str = "arti123ghorpade";
let onlyChars = str.replace(/[^a-zA-Z]/g, "");
console.log(onlyChars);

