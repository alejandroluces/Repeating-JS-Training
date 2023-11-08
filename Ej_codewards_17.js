//   Multiplication table for number
//   4058187% of 3,24012,590 of 31,881Dmitry Kudla1 Issue Reported
//    JavaScript
//   Node v18.x
//   VIM
//   EMACS
//   Instructions
//   Output
//   Past Solutions
//   Your goal is to return multiplication table for number that is always an integer from 1 to 10.
  
//   For example, a multiplication table (string) for number == 5 looks like below:
  
//   1 * 5 = 5
//   2 * 5 = 10
//   3 * 5 = 15
//   4 * 5 = 20
//   5 * 5 = 25
//   6 * 5 = 30
//   7 * 5 = 35
//   8 * 5 = 40
//   9 * 5 = 45
//   10 * 5 = 50
//   P. S. You can use \n in string to jump to the next line.
  
//   Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

const multiTable = (number) => {
    
    let numToMultiplicate= []
     for (let j = 1; j <= 10; j++) {
         
         numToMultiplicate.push(j)
     }
     return numToMultiplicate.map((item)=> `${item} * ${number} = ${number*item}`).join("\n")
 
   }
   console.log(multiTable(5));
   
 //   '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');