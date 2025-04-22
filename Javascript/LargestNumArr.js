// function largestNum(arr) {
//     let maxNo = arr[0]
//     for (let i = 1; i < arr.length; i++) {

//         if (maxNo < arr[i]) {
//             maxNo = arr[i]
//         }
//     }
//     return maxNo
// }

// console.log(largestNum([5, 58, 85, 6855, 457, 222,9999]))


function largestNum(arr) {
    return Math.max(...arr)
}

console.log(largestNum([5, 58, 85, 6855, 457, 222, 9999]))