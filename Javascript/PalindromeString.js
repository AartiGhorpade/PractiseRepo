function palindromeString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    if(newStr==str){
        return "palindrome string"
    }else{
        return "not palindrome string"
    }
}

console.log(palindromeString("aba"));
console.log(palindromeString("artiGhorpade"));
