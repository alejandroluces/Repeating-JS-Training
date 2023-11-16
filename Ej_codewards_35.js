/*
Calculate Price Excluding VAT
853588% of 1,3494,033 of 8,151payer.cse2 Issues Reported
 JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Past Solutions
Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1

https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript
*/

const excludingVatPrice = (price) =>{
    let result= price/1.15
       if (price===null) {
           return -1
   
       }
       else if (Number.isInteger(result)===true) {
           return Math.round(result)
   
       }else if (price=== 0) {
        return 0
       }else if (price< 0) {
        return undefined
       }
       else{
           return parseFloat(result.toFixed(2))
       }
   
}

   console.log((excludingVatPrice(230)));
   console.log(excludingVatPrice(null));
    console.log(excludingVatPrice(123));
    console.log(excludingVatPrice(-1));