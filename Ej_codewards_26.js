/*
Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
ABOUT
Docs
Learn about all of the different aspects of Codewars
aluces Avatar
5 kyu
341
7 kyu
Find the capitals
36111893% of 3,36020,991 of 35,762ankr4 Issues Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Past Solutions
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
STRINGSARRAYSFUNDAMENTALS
Ad
Design and Development tips in your inbox. Every weekday.
Ads via Carbon


*/

var capitals = function (word) {
    
    return word.split("").map((item,index)=> item===item.toUpperCase() ? index: false ).filter((item2)=> item2!== false)
   

};

console.log(capitals(('CodEWaRs')));

// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript





  function addExtra( listOfNumbers ){
    // your code here
    // add an int to listOfNumbers and return it
}




function checkVowel(string, position) {
    // good luck
    let vowel=["a","e","i","o","u"]
    return vowel.includes(string.toLowerCase()[position])
  };

  console.log(checkVowel('cat', 1));
  console.log(checkVowel('cat', 0));

  







