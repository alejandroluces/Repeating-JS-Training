/*
Add Length
2648994% of 2,88714,645 of 27,743debri
JavaScript
TRAINNEXT KATA
Details
Solutions
Forks (7)
Discourse (53)
Collect|
DESCRIPTION:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
*/

const appleBan = "apple ban"

const convertArrLenght = (str) =>{

    return str.split(" ").map((item)=> `${item} ${item.length}`)

}
console.log(convertArrLenght(appleBan));
