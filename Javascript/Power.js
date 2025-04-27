function power(num, power) {

    let powerOfNum = 1;

    for (let i = 1; i <= power; i++) {
        powerOfNum = num * powerOfNum;
    }
    return powerOfNum
}

console.log(power(5, 5));
