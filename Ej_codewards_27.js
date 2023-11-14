/*

Array2Binary addition
25491% of 439778 of 1,730debri1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false
*/

function arr2bin(arr){
    //GET STARTED
     if(arr.some((item) => typeof(item)!== "number")){
        return false
     }else{
        return arr.reduce((a,b) => a+b,0).toString(2)
     }
}


console.log(arr2bin([1,2]));
console.log(arr2bin([1,2,3,4,5]));
console.log(arr2bin([1,2,'a']));
console.log(arr2bin([1,10,100,1000]));



