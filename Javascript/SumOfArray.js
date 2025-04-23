// function sumOfArr(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumOfArr([2, 8, 6, 5, 7, 5]));


// function sumOfArr(arr) {
//     return arr.reduce((acc, currVal) => {
//         return acc + currVal;
//     })
// }

// console.log(sumOfArr([2, 8, 6, 5, 7, 5]));

// // ORRRR

// function sumOfArr(arr) {
//     return arr.reduce((acc, currVal) => acc + currVal, 0);
// }


// function sumOfArr(arr) {
//     let sum = 0
//     arr.forEach(element => {
//         sum += element
//     });
//     return sum
// }

// console.log(sumOfArr([2, 8, 6, 5, 7, 5]));


// function sumOfArr(arr) {
//     let sum = 0
//     let i = 0;
//     while (i < arr.length) {
//         sum += arr[i];
//         i++;
//     }
//     return sum
// }

// console.log(sumOfArr([2, 8, 6, 5, 7, 5]));



function sumOfArr(arr) {
    let sum = 0
    let i = 0;
    do {
        sum += arr[i];
        i++
    } while (i < arr.length);
    return sum
}

console.log(sumOfArr([2, 8, 6, 5, 7, 5]));