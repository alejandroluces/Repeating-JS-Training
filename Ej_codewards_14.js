/*
kyu
Count salutes
531593% of 305644 of 1,709AvyJIT1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Description
There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.
*/

function countSalutes(hallway) {
  
    let menorque = hallway.split("").filter((item)=>item.includes("<")).length
    let maoyrQue = hallway.split("").filter((item)=>item.includes(">")).length

    if(menorque>maoyrQue){ 
        return maoyrQue * 2
    }if(maoyrQue>menorque){
        return maoyrQue * 2
    }if(maoyrQue <=1 && menorque ===0 ){
        return 0
    }



}

console.log(countSalutes('<---->---<---<-->'));
console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->'));

