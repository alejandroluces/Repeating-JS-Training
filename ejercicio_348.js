/*
yu
Find the smallest integer in the array
117630787% of 16,38583,162 of 224,172dukeofgarda1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Past Solutions
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

const findSmallestInt = (args) => {
    return Math.min(...args)

}

console.log(findSmallestInt([78,56,232,12,8]));