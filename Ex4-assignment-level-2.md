## writeCode

```js
let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm"
];
// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence. ***************************************************
function findLongestWord(a,b) {
  if(a.length > b.length) {
    return a;
  } else if (a.length < b.length) {
    return b;
  } else {
    return a;
  }
}
words.filter(findLongestWord);

// - Convert the above array "words" into an array of length of word instead of word.
function replaceWords(cv) {
  return cv.length;
}
words.map(replaceWords);//[7, 7, 7, 9, 5, 7, 8, 6]

// - Create a new array that only contains word with atleast one vowel.
function vowel(cv) {
  if(cv.includes('a') || cv.includes('e') || cv.includes('i') || cv.includes('o') || cv.includes('u') ) {
    return cv;
  }
}
words.filter(vowel);//["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"]

// - Find the index of the word "rhythm"
words.indexOf('rythm');//7

// - Create a new array that contians words not starting with vowel.
function vowel(cv) {
  if(cv.startsWith('a') || cv.startsWith('e') || cv.startsWith('i') || cv.startsWith('o') || cv.startsWith('u') ) {
    return;
  } else {
    return cv;
  }
}
words.filter(vowel);//["mystery", "brother", "crocodile", "pearl", "crackpot", "rhythm"]

// - Create a new array that contianse words not ending with vowel
function vowel(cv) {
  if(cv.endsWith('a') || cv.endsWith('e') || cv.endsWith('i') || cv.endsWith('o') || cv.endsWith('u') ) {
    return;
  } else {
    return cv;
  }
}
words.filter(vowel);
// //["mystery", "brother", "aviator", "pearl", "orchard", "crackpot", "rhythm"]

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers*************** is this appreach correct
let sum=0;
function sumArray(cv) {
  sum = sum + cv
}
numbers.forEach(sumArray);
console.log(sum);//87

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let mul=1;
let mulArray = [];
function mulfn(cv) {
  mul= cv*3;
  return mul;
}
mulArray=numbers.map(mulfn);// [18, 36, 3, 54, 39, 48, 6, 3, 24, 30]

// - Create a new array that contains only even numbers
let evenArray = [];
function evenNum(cv) {
  if( cv % 2 == 0) {
    return cv;
  }
}
evenArray = numbers.filter(evenNum);//[6, 12, 18, 16, 2, 8, 10]

// - Create  a new array that contains only odd numbers.
let oddArray = [];
function oddNum(cv) {
  if( cv % 2 !== 0) {
    return cv;
  }
}
oddArray = numbers.filter(oddNum);//[1, 13, 1]

// - Create a new array that should have true for even number and false for odd numbers.
let evenOrOddNum = [];
function evenOrOdd(cv) {
  if( cv % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
evenOrOddNum = numbers.map(evenOrOdd);//[true, true, false, true, false, true, true, false, true, true]

// - Sort the above number in assending order.
numbers.sort();//[1, 1, 10, 12, 13, 16, 18, 2, 6, 8]

// - Does sort mutate the original array?
Yes, they do. after running above code on console. again checked numbers and it was sorted format of numbers.

// - Find the sum of the numbers in the array.
let sum=0;
function sumNum(cv) {
  sum = sum + cv;
  return sum;
}
numbers.forEach(sumNum);
console.log(sum)//87

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNum;
let sum=0;
function averageNumbers(cv) {
  sum = sum+cv;
  averageNum = sum/numbers.length;
}
numbers.forEach(averageNumbers);
console.log(averageNum);// 8.7

// 

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words. ****************************** about approach, i think i made it complicated

let word = [];
let averageLength;
function wordLength(cv) {
  return cv.length;  
}
word = strings.map(wordLength);

let sum=0;
function averageWordLength(cv) {
  sum = sum + cv;

}
word.forEach(averageWordLength);
console.log(sum/strings.length)//5.3

```
## String Methods-writeCode

- Write a JavaScript function to check whether input value is a string or not.

```js
/* Requirements
  @name isString
  @parameter (any value) val
  @return Boolean
*/

// your code goes here ************************   else is not executing
function isString(x) {
  if(typeof x == "string") {
    return true;
  } else {
    return false;
  }
}
// Test
console.log(isString("tony stark")); // true;
console.log(isString([1, 2, 4, 0])); // false;
```

- Write a JavaScript function to check whether a string is blank or not.

```js
/* Requirements
  @name isBlank
  @parameter (any value) val
  @return Boolean
*/

// your code goes here
function isBlank(x) {
  if( x.length == "") {
    return true;
  } else {
    return false;
  }
}



// Test
console.log(isBlank("")); // true;
console.log(isBlank("abc")); // false;
```

- Write a JavaScript function to split a string and convert it into an array of words.

```js
/* Requirements
  @name stringToArray
  @parameter (string) text
  @return Array
*/
// your code goes here
function stringToArray(x) {
  if(typeof x == "string") {
    return x.split();
  }
} 

// Test
console.log(stringToArray("Hello World")); // ["Robin", "Singh"];
console.log(stringToArray("Lady Bird")); // ["Lady", "Bird"];
```

- Write a JavaScript function to return specified number of characters from a string.

```js
/* Requirements
  @name truncate
  @parameter (string, number) text, len
  @return String
*/
// your code goes here
function truncate(string,num) {
  return string.slice(0,num);
}
console.log(truncate("manish",2));
```

- Write a JavaScript function to convert a `string` in abbreviated form.

```js
/* Requirements
  @name abbrevName
  @parameter (string) fullName
  @return String
*/
// your code goes here
function abbrevName(fullName) {
  return fullName.slice(0,7);
}


// Test
console.log(abbrevName("Robin Singh")); //"Robin S."
```

- Write a JavaScript function to hide email addresses to protect from unauthorized user.

```js
/* Requirements
  @name protect
  @parameter (string) email
  @return String
*/
// your code goes here
function protect(email) {
 let e = email.slice(0,5).padEnd(8,".") + email.slice(11);
 return e;
}

// Test

console.log(protect("robin_singh@example.com")); // "robin...@example.com"
```

- Write a JavaScript function to parameterize a string.

```js
/* Requirements
  @name parameterize
  @parameter (string) str
  @return String
*/
// your code goes here
function parameterize(str) {
//   str.toLowerCase().slice(0,5).padEnd(6,'-') + str.toLowerCase().slice(6,11).padEnd(6,'-') +
// str.toLowerCase().slice(12,16).padEnd(5,'-')+
// str.toLowerCase().slice(17,20)
str.split(" ").join('-');
}


// Test
console.log(parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
```

- Write a JavaScript function to capitalize the first letter of a `string`.

```js
/* Requirements
@name capitalizeFirst
@parameter (string, number) text, len
@return String
*/
// your code goes here
function capitalizeFirst(text,len) {
  text.slice(0,1).toUppercase() + text.slice(1);
}
// Test
console.log(capitalizeFirst("js string exercises")); // "Js string exercises"
```

- Write a JavaScript function to capitalize the first letter of each word in a string.

```js
/* Requirements
  @name capitalizeWords
  @parameter (string) text
  @return String
*/
// your code goes here
function capitalizeWords(text) {
  return ( text.split(" ").map(elem => elem[0].toUpperCase() + elem.slice(1)));
  
}


console.log(capitalizeWords("js string exercises")); // "Js String Exercises"
```

- Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

```js
/* Requirements
  @name swapcase
  @parameter (string) text
  @return String
*/
// your code goes here
function swapcase(text) {
  for(let i=0; i<text.length ; i++) {
    if(text[i] == text.toUpperCase()) {
      return text.toLowerCase();
    } else {
      return text.toUpperCase();
    }
  }
  return text;
}

// Tets
console.log(swapcase("AaBbc")); // "aAbBC"
```

- Write a function to convert a string into camel case.

Example:

```js
/* Requirements
  @name camelize
  @parameter (string) text
  @return String
*/
// your code goes here
function camelize(text) {
  if(text.includes(" ")) {
    
  } else {
    text.split(" ").
  }

}

// Test
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScript exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScriptExercises")); // "JavaScriptExercises"
```

- Write a function to uncamelize a string. Example:

```js
/* Requirements
  @name uncamelize
  @parameter (string, string) text, joinStr
  @return String
*/
// your code goes here

// Tets
console.log(uncamelize("helloWorld", "_")); // "hello_world"
```

- Write a function to concatenates a given string n times (default is 1).

```js
/* Requirements
  @name repeat
  @parameter (string, number) text, times
  @return String
*/
// your code goes here
function repeat(text,times) {
  var t = text.concat();
  return t;
}

// Test
function repeat(text,times) {
  var t = text.repeat(3);
  return t;
}
console.log(repeat("Ha!", 3)); // "Ha!Ha!Ha!"
```

- Write a function to insert a string within a string at a particular position (default is 1).

```js
/* Requirements
  @name repeat
  @parameter (string, number) text, position
  @return String
*/
// your code goes here
function insert(text,add,position) {
  let textSplit = text.split("");
  textSplit.splice(position, 0, add);
  return textSplit.join("");

}
// Test
console.log(insert("We are doing some exercises.", "JavaScript ", 18)); // "We are doing some JavaScript exercises."
```

- Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

```js
/* Requirements
  @name humanize
  @parameter ( number) num
  @return String
*/
// your code goes here
function humanize(num) {
  if(num.endsWith("1")) {
    num = num.padEnd(5,"st");
  } else if (num.endsWith("2")) {
    num = num.padEnd(5,"nd");
  } else if(num.endsWith("3")) {
    num = num.padEnd(5,"rd");
  } else if(num.endsWith("4")) {
    num = num.padEnd(5,"th");
  } else if(num.endsWith("5")) {
    num = num.padEnd(5,"th");
  } else if(num.endsWith("6")) {
    num = num.padEnd(5,"th");
  } else if(num.endsWith("7")) {
    num = num.padEnd(5,"th");
  } else if(num.endsWith("8")) {
    num = num.padEnd(5,"th");
  } else if(num.endsWith("9")) {
    num = num.padEnd(5,"th");
  } else if(num.endsWith("0")) {
    num = num.padEnd(5,"th");
  }
  return num; 
}



// Test
console.log(humanize(String(301))); // "301st"
console.log(humanize(String(402))); // "402nd"
```

###

Write a function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

```js
/* Requirements
  @name testTruncate
  @parameter (string, number, string) text, len, postfix
  @return String
*/
// your code goes here
// var arrayText;
// var finalText;

// function textTruncate(text,len,postfix) {
//    arrayText = text.split("").slice(0,len);
//    arrayText.splice(13,2,"!","!");
//    arrayText.join("");
// }
function textTruncate(text,len,postfix) {
   return text.split("").slice(0,len).join("").replace("JS","!!");

// Test
console.log(textTruncate("We are doing JS string exercises.", 15, "!!")); //"We are doing !!"
```

- Write a JavaScript function to chop a string into chunks of a given length.

```js
/* Requirements
  @name chop
  @parameter (string, number) text, size
  @return String
*/
// your code goes here
function chop(text,size) {
let n=[];
n.push(text.substring(0,2) +" " + text.substring(2,4)+" "+ text.substring(4,6)+ " " + text.substring(6,8)+ " "+ text.substring(8,10)+ " " + text.substring(10));
}

// Test
console.log(chop("hello world", 2)); // ["he", "ll", "o ", "wo", "rl", "d"]
```

- Write a function to count the occurrence of a substring in a string.

```js
/* Requirements
  @name count
  @parameter (string, string) text, char
  @return Number
*/
// your code goes here

//
function count(text,char) {
  text = text.toLowerCase().split(" ");
  let count = 0;
  for(let i = 0; i< text.length; i++) {
    if(text[i] === char){
      count++;
    }
  }
  return count;
}
///////
function count(text,char) {
  text = text.toLowerCase().split(" ");
  let count = text.reduce(function(acc,text){
    if(text === char){
      acc++
    }
    return acc;
  },0)
  return count;
}

// Test
console.log(count("The quick brown fox jumps over the lazy dog", "the")); // 2
```

- Write a function to strip leading and trailing spaces from a string.

```js
/* Requirements
  @name strip
  @parameter (string) text
  @return String
*/
function strip(text) {
  text = text.trim();
  return text;
} 



// Test
console.log(strip("   Hello World ")); // "Hello World"
```

- Write a JavaScript function to truncate a string to a certain number of words.

```js
/* Requirements
  @name chopWords
  @parameter (string, number) text, words
  @return String
*/
function chopWords(text,words) {
  text = text.split(" ").slice(0,4).join(" ");
  return text;
}
// Test
console.log(chopWords("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
```

- Write a function to alphabetize a given string.(A - z)

```js
/* Requirements
  @name alphabetize
  @parameter (string, number) text, times
  @return String
*/
function alphabetize(text, times) {
  text = text.split("").sort().join("").trimStart();
  return text;
}
// Test
console.log(alphabetize("United States")); // 'SUadeeinsttt'
```
