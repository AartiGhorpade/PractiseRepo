function fibonacci(num) {
    let a = 0, b = 1, temp;

    for (let i = 0; i <= num; i++) {
        console.log(a);
        temp = a + b
        a = b;
        b = temp

    }

}

fibonacci(10)
