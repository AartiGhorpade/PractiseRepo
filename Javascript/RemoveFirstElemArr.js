// function removeElem(arr) {
//     arr.splice(0, 1)
//     return arr
// }

// console.log(removeElem([5, 25, 47, 6558, 68, 225, 54654]));


// function removeElem(arr) {
//     arr.slice(1)
//     return arr
// }

// console.log(removeElem([5, 25, 47, 6558, 68, 225, 54654]));


function removeElem(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

console.log(removeElem([5, 25, 47, 6558, 68, 225, 54654]));