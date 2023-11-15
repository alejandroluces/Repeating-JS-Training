/*

ASCII Total
1136493% of 1,5034,906 of 11,278user3220651
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291

https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
*/
const uniTotal = (string) => {
    // total up dem unicodes!
    // return string.charCodeAT(string)
    return string.split("").map((item) => item.charCodeAt()).reduce((acc,ac) => acc+ac,0)
}


console.log(uniTotal("a"));
console.log(uniTotal("aaa"));





