//1.)  Print the given pattern using JavaScript.

function rightAngeledTriangle(rows){
    for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(i)
        console.log(spaces + stars);
        
    }
}
console.log(rightAngeledTriangle(5));



function leftAngeledTriangle(rows){
    for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(i)
        console.log(spaces + stars);
        
    }
}
console.log(leftAngeledTriangle(5));


//5.) Write a function to find the largest number in the array!

function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNumber([2,6,7,1,9,0,5,3,8]));

//6.) Reverse the string without using the reverse method and make it as lowerCase.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length -1; i >=0; i--){
        reversed += str[i];
    }
    return reversed.toLocaleLowerCase();
}
console.log(reverseString("JAVASCRIPT"));

//2.) Write a function, it should return longest word in the sentence .
function longestWord(sentence){
    let Words = sentence.spilt(" ");
    let longest = " ";
    for (let Word of Words){
        if (Word.length > longest.length){
            longest = Word;
        }
    }
    return longest;
}
console.log(longestWord(" React is the JAVASCRIPT Library"));

//3.) Write a function to check if the word is palindrome or not? 

function palindromeFn(word){
    const cleaned = word.toLowerCase();
    return cleaned === cleaned.spilt("").revrese().join("");
}
console.log(palindromeFn("Racecar"));
console.log(palindromeFn(React));

//4.) Write a function to check if two string words are anagrams or not?

function anagramsFn(str1, str2) {
  const format = (str) => str.toLowerCase().split("").sort().join("");
  return format(str1) === format(str2);
}
console.log(anagramsFn("listen", "silent")); 
console.log(anagramsFn("HTML", "CSS"));



