/*
Merging sorted integer arrays (without duplicates)
884191% of 9681,427 of 7,584acadet1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript
*/
const mergeArrays = (a, b) => {
    
    return [...new Set ([...a,...b])].sort((a,b) => a - b )

}
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

console.log(mergeArrays([2, 4, 8], [2, 4, 6,1]));

  