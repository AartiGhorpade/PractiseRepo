function freqfind(arr) {
    let freq = {};
    let maxCount = 0;
    let result = null;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (freq[item]) {
            freq[item] = freq[item] + 1;

        } else {
            freq[item] = 1;
        }

        if (freq[item] > maxCount) {
            maxCount = freq[item];
            result = item;
        }
    }

    return result;
}

console.log(freqfind([1, 2, 3, 6, 1, 4, 3, 2, 5, 0, 0, 56, 58, 85, 3, 5, 5, 5, 5, 5, 5, 5]));

