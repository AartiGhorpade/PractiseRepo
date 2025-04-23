function checkPrimeNo(num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++
        }
    }

    if (count === 2) {
        return "Prime no"
    } else {
        return " Not prime no"
    }
}
console.log(checkPrimeNo(1)); // Output: Not prime number
console.log(checkPrimeNo(2)); // Output: Prime number
console.log(checkPrimeNo(3)); // Output: Prime number
console.log(checkPrimeNo(4));
