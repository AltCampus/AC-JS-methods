# String Methods

## Practice String Methods-writeTextAnswer

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) and look for the name of method to learn about it.

**Write in your own way of understanding (dont copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Example (3)
5. In your words what this method does.

Example:

1. `charAt`

   - This method accepts one parameter (index) of number data type.
   - It returns the charater on specific index (provided through parameter)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index.

2. `toUpperCase`
   - This method accepts a string
[]   - Provides new string in uppercase format for the given input string
   -Example:
    ```js
   let name='manish';
   console.log(name.toUpperCase());//"MANISH"

   let fruit="apple";
   console.log(fruit.toUppercase());

   console.log("altcampus".toUpperCase());
  
   - `toUpperCase` accepts a string and provides uppercase format of input string. It does not affect value of input string

3. `toLowerCase`
   - It accept a string as input.
   - Provides new string in lowercase format for the given input string
   - Example:
   ```js
   let name="MANISH";
   console.log(name.toLowerCase());

   console.log("MANISH".toLowerCase());

   const place="Dharmashala";
   console.log(place.toLowerCase());
  
   - `toLowerCase`  accepts a string and provides lowercase format of input string. It does not affect the value of input string 
   

4. `trim`
  - It accept a string as input.
  - Provides a new string with removed whitespaces.
  - Example :
  ```js
  const name= " manish ";
  console.log(name.trim());

  const name= "my name is  ";
  console.log(name.trim());

  const name= "key  ";
  console.log(name.trim());

  - `trim` accepts string and removes whitespaces around the string.

5. `trimEnd`
  - It accept a string as input.
  - provides a new string with removes whitespaces at the end of string or rightside to the string
  -example:
  ```js
  const surname= "Kushare  ";
  console.log(surname.trimEnd());

  let name= "manish  ";
  console.log(name.trimEnd());

  var arr= ['123 ','456 '];
  function mytrim(string,i,arr) {
    console.log(string.trimEnd());
    }
  arr.forEach(mytrim);
  
  - `trimEnd` accepts string and removes whitespace at the end of string.

6. `trimStart`
  - It accepts a string as input.
  -provides a new sting with removed whitespaces at the starting of the string or left side of the string.
  -example:
  ```js
  let name= '  manish!  ';
  console.log(name.trimStart());

  let surname= '   kushare   ';
  console.log(surname.trimStart());

  let surname= '   Kushare is my surname   ';
  let sur= surname.trimStart();
  console.log(sur, sur.length);
  console.log(surname.length);

  - `trimStart` accepts string and removes whitespaces at the start of string.

7. `concat`
  - It concatenates the calling string with the string present in the argument.
  - It accepts strings to concatenate with the string.
  -Example 
  ```js
  let name= "manish";
  console.log(name.concat(" kushare"));

  let hello = "Hello";
  console.log(hello.concat(" manish", ". have a nice day!")); 

  "".concat(20,6);


8. `endsWith`
  - 1. searchstring - the character that we want to search at the end of string
    2. length - It is optional. If provided, it will check that, the searchstring ends at the  the particular index or not. 
  - It returns true, if the searchstring is present at the end of the string. Or else, will return false.
  - Example
  ```js
  let str= "My name is manish kushare";
  console.log(str.endsWith("kushare"));//true

  let str= "My name is manish kushare";
  console.log(str.endsWith("kushare",10));//false

  
  let str= "My name is manish kushare";
  console.log(str.endsWith("y",2));//true


  let str= "My name is manish kushare";
  console.log(str.endsWith("y",6)); //false

  - `endsWith` finds whether the string ends with searchstring or not. If it does, then return true or else false. we can also give poisition as an optional parameter, which does same operation but, at specified index position.

9. `includes`
  - 1.It accepts search string to be searched in particular string. Moreover it can accepts one string to be searched in another string
    2. position- It is an optional parameter. when provided , it will search for the string from that position onwards

  - If searchString is present inside the string or another string, also from particualr position onwards if needed then, it will return true or else false.
  - point to be remember that it is case sensitive.

  - example 
  ```js
  console.log('manish kushare'.includes('manish'));//true

  let intro= "My name is Manish Kushare.";
  let searchString= "Kushare";
  console.log(intro.includes(searchString));//true


  let intro= "My name is Manish Kushare.";
  let searchString= "Kushare";
  console.log(intro.includes(searchString, 6));//true

  console.log("manish".includes("s"));//true


  console.log("manish".includes("a",4));//false

  -`includes` search for the searchstring in the string or another string. It is case sensitive.
  It also accepts position as parameter and will search for the searchString from that position onwards. 

10. `indexOf`
  - 1.It accepts string value to search for
    2.It also accepts fromIndex as an optional value, to search for string starting from that particular index and find its first occurance. If not found will return -1.
  - 1.It returns the index at which the string value occurs at the first time itself in the given string. t  not found will return -1.
    2.if the search string is provided, it will be considered as undefined, then it will search for undefined in the string , if found will return index of its first occurance or else will return -1.
    3.if fromIndex is given lower than 0 then, it will start to search from 0 and will return index of first occurance of search string. If fromIndex is greater than string.length. then it will start to search from index string.length and will give result as -1.
    4.An empty string search value produces strange result.
    'hello world'.indexOf('') // returns 0
    'hello world'.indexOf('', 0) // returns 0
    'hello world'.indexOf('', 3) // returns 3
    'hello world'.indexOf('', 8) // returns 8

    for fromIndex greater than string.length it behaves differenlty.
    'hello world'.indexOf('', 11) // returns 11
    'hello world'.indexOf('', 13) // returns 11
    'hello world'.indexOf('', 22) // returns 11

   - example:
   ```js
   console.log("manish kushare". indexOf("k",4));//7

   console.log("manish kushare". indexOf("h",1));//5

   console.log(" ". indexOf(""));//0

   console.log("manish kushare". indexOf("",4));

  /* 1.It accepts string value to search for
    2.It also accepts fromIndex as an optional value, to search for string starting from that particular index and find its first occurance. If not found will return -1.
    1.It returns the index at which the string value occurs at the first time itself in the given string. t  not found will return -1.
    2.if the search string is provided, it will be considered as undefined, then it will search for undefined in the string , if found will return index of its first occurance or else will return -1.
    3.if fromIndex is given lower than 0 then, it will start to search from 0 and will return index of first occurance of search string. If fromIndex is greater than string.length. then it will start to search from index string.length and will give result as -1.
    4.An empty string search value produces strange result.
    'hello world'.indexOf('') // returns 0
    'hello world'.indexOf('', 0) // returns 0
    'hello world'.indexOf('', 3) // returns 3
    'hello world'.indexOf('', 8) // returns 8

    for fromIndex greater than string.length it behaves differenlty.
    'hello world'.indexOf('', 11) // returns 11
    'hello world'.indexOf('', 13) // returns 11
    'hello world'.indexOf('', 22) // returns 11*/
    ```
  
11. `lastIndexOf`*************
  - 

12. `padEnd`
 str.padEnd(targetLength [, padString])

- 1.It accepts targetLength as the length to which the given string is to be padded to match the length of the string with the targetLength at the end of the string .
  2.It also accepts padString as an optional parameter to add the padding string to the existing string to increase its length upto the targetLength and also repeats the padString if needed.
- 1.It returns a String of the specified targetLength with the padString applied at the end of the current str.
  

- example:
```js
console.log("abc".padEnd(10,"m"));//abcmmmmmmmm

console.log("abc".padEnd(2,"123456"));//if the targetLength is lower than the string.length then, it will simply return the string as it is

console.log("abc".padEnd(5,"123456"));//abc12 it will only pad upto 5 that is targeted length and lets say will send other strings to garbage for our understanding as of now.

console.log("abc".padEnd(10,"m"));//abc   (will leave blank spaces to cover 10 targeted length)    //

-The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string

13. `padStart`
 str.padStart(targetLength [, padString])

- 1.It accepts targetLength as the length to which the given string is to be padded to match the length of the string with the targetLength at the starting of the string
  2.It also accepts padString as an optional parameter to add the padding string to the existing string to increase its length upto the targetLength and also repeats the padString if needed.
- 1.It returns a String of the specified targetLength with the padString applied at the starting  of the current str.
  2. If the padString is too long to stay within the targetLength then, the extra strings are truncated.
- example 
console.log("manish".padStart(10))//        manish

console.log("manish".padStart(10,"KUSHARE"));//KUSHmanish

console.log("manish".padStart(3));//manish //if targetLength is smaller than the string.length then the string is returned as it is 
```

- The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.



14. `repeat`
str.repeat(count)

-count : It accepts an integer between 0 and + infinity, indicating number of times to repat the string.
- A new string containing the specified number of copies of the given string.
- example:
```js
console.log("manish".repeat(5));

let name="My name is manish kushare ";
console.log(name.repeat(50);// My name is manish kushare My name is manish kushare ...(5x)

console.log("manish".repeat(-5));// invalid count value. count must be greater than 0 and less than +infinity and not overflow maximium string size.

```



15. `replace`******************


16. `slice`
str.slice(beginIndex[, endIndex])

- 1. behinIndex: It is the index from which slicing operation starts. It can be positive value or negative value. If its positive value it flows from left to right . If it is negative value it flows from left to right only.
  2. endIndedx: It is the index value upto which slicing operation will take place. point to be noted, it will not considered end index for eg:
  let arr=["t","e","s","t"];
  arr.slice(1,3)//e,s 
  arr.slice(-2)//s,t
- A new string containing the extracted section of the string.
- example:
```js
  let arr=["t","e","s","t"];
   arr.slice(1,3)//e,s 
  arr.slice(-2)//s,t
  arr.slice(-3,-1)//e,s
 ``` 

-slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

slice() extracts up to but not including endIndex. str.slice(1, 5) extracts the second character through the fifth character (characters indexed 1, 2,3 and 4).

As an example, str.slice(2, -1) extracts the third character through the second to last character in the string.




17. `split`***************



18. `substring`
str.substring(indexStart[, indexEnd])
-1. It accepts indexStart as a parameter to include returned substring.
 2. It accepts indexEnd as an optional parametr to exclude from the returned substring.
- 1. A new string containing the specified part of the given string.
 2. If indexEnd is omitted then it will returned substring upto last index.
 3. If indexStart is equal to indexEnd, substring() returns an empty string.
 4. If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were  swapped; See example below.
  Any argument value that is less than 0 or greater than stringName.length is treated as if it were 0 and stringName.length, respectively.
  Any argument value that is NaN is treated as if it were 0.

-example:
```js
let name="manish";
console.log(name.substring(1,4));//ani

let name="manish";
console.log(name.substring(1));//anish

let name="manish";
console.log(name.substring(1,1));//undefined


let name="manish";
console.log(name.substring(3,1));// it acts as indexStart and indexEnd is swaped

```
## writeCode

Using above methods you practiced above, do the following.

```js
let from = "Syrio Forel";
let quote = "There is only one thing we say to death: Not today";
let to = "Arya Stark";

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
// Your code goes here
let searchTerm= 'is'
let indexOfIs = quote.indexOf(searchTerm);
console.log(indexOfIs);//6

/*
2. Find the character at, the index indexOfIs (Problem 1) in quote.
*/
// Your code goes here
quote.charAt(6);//i

/*
3. Log the message saying `The index of first is in quote is 7`
*/
// Your code goes here
console.log("The index of first is in quote is 7");
console.log(`The index of first is in quote is ${indexOfIs}`)
/*
4. Log the message for first 6 characters of quote like this.
The character at index 0 is 'T' 
The character at index 1 is 'h'
The character at index 2 is 'e'
The character at index 3 is 'r'
The character at index 4 is 'e'
The character at index 5 is ' '
*/
// Your code goes here
let index0= quote.charAt(0);
console.log(`The character at the index 0 is ${index0}`);

let index1= quote.charAt(1);
console.log(`The character at the index 1 is ${index1}`);

let index2= quote.charAt(2);
console.log(`The character at the index 2 is ${index2}`);

let index3= quote.charAt(3);
console.log(`The character at the index 3 is ${index3}`);

let index4= quote.charAt(4);
console.log(`The character at the index 4 is ${index4}`);

let index5= quote.charAt(5);
console.log(`The character at the index 5 is " "`);

/*
5. Using the variable from , to and quote variable dispaly this message
"Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
from.concat(' ', to, quote);

/*
6. Does from, to and quote ends with "rk". Check all three.
*/
console.log(from.endsWith("rk"));//false
console.log(to.endsWith("rk"));//false
console.log(quote.endsWith("rk"));//true

/*
7. Does quote includes the word "Only"
*/
console.log(quote.includes("only"));//true

/*
8. Does quote includes the word " we"
*/

console.log(quote.includes("we"));//true

/*
9. Find the index of the the word `we` in quote
*/
console.log(quote.indexOf("we"));

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
var quoteSplitted = quote.split(" ");
console.log(quoteSplitted);

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
// */
// let quoteSplittedArr = [];
//  quoteSplitted.map(e => {
//    (e == "today")? 
//   quoteSplittedArr.push("tomorrow") : quoteSplittedArr.push(e)
// })
// quoteSplittedArr.join

// let quotedSplittedArr = [];
// function replaceToday(cv,quoteSplitted) {
//   (cv == "today")? 
//   quoteSplittedArr.push("tomorrow") : quoteSplittedArr.push(cv)
//   return cv;
// }
// quoteSplitted.map(replaceToday);

quoteSplitted.splice(quoteSplitted.length-1,1,"tomorrow");
quoteSplitted.join(" ");

/*
12. Find the index of second "o" in quote. Use indexOf
*/
quote.indexOf("o");//14

/*
13. Find the last index of letter "a" in quote.

*/
var b=quote.lastIndexOf("a");//48

/*
14. Find the second last index of letter "a" in quote.
*/
quote.lastIndexOf("a",b-1);//36

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
*/
console.log(quote.padEnd(70,'.'));

/*
16. Do same as (15) but the ... should come in start.
*/
console.log(quote.padStart(70,'.'));

/*
17. Log the repeat of "Hello World!" 10 times.
*/
console.log("Hello World!".repeat(10));

/*
18. Replace today to tomorrow in quote.
*/
quote.replace("today","tomorrow");

/*
19. Replace Stark to Lannister in quoteTo
*/
to.replace("Stark","Lannister");

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
var q =quote.slice(0,30);
console.log(q);

/*
21. Find out does quote, quoteFrom, quoteTo starts with "A"
*/
console.log(quote.startsWith("A"));

console.log(to.startsWith("A"));


console.log(from.startsWith("A"));
```

## Practice Array Methods-writeTextAnswer

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScpt/Reference/Global_Objects/Array#) and look for the name of method to learn about it.

**Write in your own way of understanding (dont copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Example (3)
5. In your words what this method does.
6. Does it mutate the original value (check https://doesitmutate.xyz)

Example:

1. `concat`

   - n(any) number of values (number, string, boolean, array, null, undefined, object and function.)
   - It returns a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It doesnot change the original array.
   - No it doesnot mutate the original array

2. `join`
  arr.join([separator])
  - sepratore : It is optional.
  Specifies a string to separate each pair of adjacent elements of the array.The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
  - A string with all array elements joined. If arr.length is 0, the empty string is returned.
  - example
  ```js
  let names= ["manish","sudhanshu","askshat"];
  console.log(names.join());//manish,sudhanshu,askshat

  console.log(names.join(''));//manishsudhanshuaskshat

  console.log(names.join(' '));//manish sudhanshu askshat

  console.log(names.join('-'));//manish-sudhanshu-askshat

  ```
- join is used to convert array into string. with the help of seperator we can modify its look.
- no mutation

3. `flat`
var newArray= arr.flat([depth]);

- it accepts the depth level specifying how deep a nested array structure should be flattened. Defaults to 1
helps to concatenate nested arrays.
-It returns a new array with the sub-array elements concatenated into it.
-example:
```js
const arr1=["manish",["akshat","sudhanshu"],"karan"];
console.log(arr1.flat());//['manish','akshat','sudhanshu','karan']


const arr2=[1,2,[3,4,[6,7],8],9];
console.log(arr2.flat(2));//[1,2,3,4,5,6,7,8,9]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
- `flat()` converts nested arrays into single array, also removes holes between the array

4. `push`
arr.push(element1[, ...[, elementN]])
- The element(s) to add to the end of the array.
it adds one or more element to the end of array and return new length of array
- The new length property of the object upon which the method was called. in simple words new length of array with elements added at the end
- examples
```js
let names= ["manish","sudhanshu"];
let newNames= names.push("akshat");
console.log(names);//["manish","sudhanshu","akshat"]
console.log(newNames);//3

let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']
Array.prototype.push.apply(moreVegs, vegetables)
console.log(moreVegs)

let num= [1,2,3,4];
let n= num.push(6,7,8);
console.log(n);//7
console.log(num);//[1,2,3,4,6,7,8]
```
- The push() method adds one or more elements to the end of an array and returns the new length of the array.

- it mutates


5. `indexOf`
arr.indexOf(searchElement[, fromIndex])

- 1. searchElement:
 Element to locate in the array.
2. fromIndex: It is optional
The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).
- The first index of the element in the array; -1 if not found.
- example
```js
var arr=[1,9,6,5,6,8,2];
arr.indexOf(2);//6

var arr=[1,9,6,5,6,8,9];
arr.indexOf(9);//1

var arr=[1,9,6,5,6,8,9];
arr.indexOf(9,3);//6

colors = ["red"];
colors.indexOf("green"); //-1

```
6. `lastIndexOf`
arr.lastIndexOf(searchElement[, fromIndex])
- 1. searchElement:
Element to locate in the array. it is number
2. fromIndex:
It is optional. It will start search from particular elemnt from the element mentioned in fromIndex and will return the index value.
- The last index of the element in the array; -1 if not found.
-example
```js
var arr=[1,9,2,5,6,8,2];
arr.lastIndexOf(2);//6

var arr=[1,9,6,5,6,8,9];
arr.lastIndexOf(9);//6

var arr=[1,9,6,5,6,8,9];
arr.indexOf(9,3);//6

colors = ["red"];
colors.indexOf("green"); //-1

```
- `lastIndexOf` accepts a search value and returns the index at which element is last found.It returns -1 if element is not found.It searches for the search value from end of array.

7. `includes`
arr.includes(valueToFind[, fromIndex])

- 1. valueToFind:
The value to search for.
2. fromIndex:
It is optional. from which index to start searching the value.
- It returns in terms true or false. If value found, then returns true or false.
-example
```js
let arr=["manish","akshat","sudhanshu","karan"];
arr.include("manish");//true


let arr=["manish","akshat","sudhanshu","karan"];
arr.include("sudhanshu"1);//true


let arr=["manish","akshat","sudhanshu","karan"];
arr.include("manish",-100);//true


let arr=["manish","akshat","sudhanshu","karan"];
arr.include("manish",10);//false
```
-includes` accepts a search value and returns true if search value is present,false if absent.If index value is not provided ,it starts searching from 0.

8. `reverse`

- no parameter.
- It returns reversed array.
- example:
```js
  let num = [5,7,8,9,1];
  num.reverse(); //[1,9,8,7,5]
  let sentanceArray = ["M ","ox","fox","quick"," black"," fox", "jumped"," over"," real"];
  sentanceArray.reverse(); //[" real", " over", "jumped", " fox", " black", "quick", "fox", "ox", "M "]
  let colors = ["blue",2];
  colors.reverse(); //[2,"blue"]
  
```
- `reverse` returns reverse array.First element becomes last,last becomes first.Second becomes last but one,last but one becomes second and continues till the array becomes reversed.

9. `every`
arr.every(callback(element[, index[, array]])[, thisArg])
- 1. callback:
A function to test for each element, taking three arguments:
  2. element:
  current element in the array
  3. index: optional
  index of current element
  4. array: optional
  the array every was called upon
  5. thisArg: optional
  A value to use as this when executing callback.
- when it loops over each element in array and returns true for truthy value else false if all elements satisfies the condition.
- example:
```js
let arr= [24,45,67,88];
function number(num) {
  if(num > 20) {
    return num;
  }
}
arr.every(number);//true

let name=["manish","akshat","sudhanshu"];
function nameH(cv) {
  if (name.includes("h") ) {
    return cv;
  }
}
name.every(nameH);//true


let name=["manish","akshat","sudhanshu"];
function nameH(cv) {
  if (cv.length == 6 ) {
    return cv;
  }
}
name.every(nameH);//false
```

10. `shift`
- no parameter.
- It returns the removed element at the start.
- Example:
  ```js
  let num = [5,8, 11];
  num.shift(); //5

  let wordArray = ["M ","ox","fox","quick"," black"," fox", "jumped"," over"," real"];
  wordArray.shift(); //"M "

  let name = ["manish"];
  name.shift(); // "manish"
  ```
- `shift` removes the first element of th array.The array length is reduced by 1.It returns the removed elements.


11. `splice`
let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
- 1. start: from which index position we want to change the array
  2. deleteCount: 0 or negative no elements are deleted
   In this case, you should specify at least one new element
  3. item1,...: items to be added in the array
- An array containing the deleted elements.
  If only one element is removed, an array of one element is returned.
  If no elements are removed, an empty array is returned.
- example:
```js
let name= ["manish","akshat","sudhanshu"];
name.splice(0,0,"karan","raghuram");


let name= ["manish","akshat","sudhanshu"];
name.splice(2,1,"karan");//sudhanshu 


```
It is used to delete or add elements in an array

12. `find`
arr.find(callback(element[, index[, array]])[, thisArg])

- callback function reference in parameter.
- It returns the index of first element which satifies the condition.
- Example:
  ```js

  let arr= [{name:'manish',gender:'male',place:'mumbai'},{name:'akshat',gender:'male',place:'Pune'},{name:'devika',gender:'female',place:'allahabad'},{name:'sudhanshu',gender:'male',place:'odisa'}];
  function place(cv) {
    return cv.place == 'Pune'
  }
  consarr.find(place);//object

  let arr=["manish","akshat","karan"];
  function name(cv,i,arr) {
    return cv == "akshat" 
      
    }
  }
  arr.find(name);//akshat


  ``````
  The find method executes the callback function once for each index of the array until the callback returns a truthy value. If so, find immediately returns the value of that element. Otherwise, find returns undefined.



13. `unshift`

- n parameter.
- It returns length of array after adding the elements in the beginning.
- Example:
  ```js
  let num = [1, 2, 3];
  num.unshift(5,4); //5
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.unshift("Hey"); //8
  let colors = [];
  colors.unshift("red"); // 1
  ```
- `unshift` adds new elements at first position of the array.It returns the new length of array after adding elements.


14. `findIndex`
- It accepts array and callback function
-  returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
-example:
```js

  let arr= [{name:'manish',gender:'male',place:'mumbai'},{name:'akshat',gender:'male',place:'Pune'},{name:'devika',gender:'female',place:'allahabad'},{name:'sudhanshu',gender:'male',place:'odisa'}];
  function place(cv) {
    return cv.place == 'Pune'
  }
  arr.findIndex(place);//1

  let arr=["manish","akshat","karan"];
  function name(cv,i,arr) {
    return cv == "akshat" 
      
    }
  }
  arr.findIndex(name);//1

  ```
  - The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test



15. `filter`
-it accepts array and callback function
-If the value is truthy it will return it and store it in new array.
-example:
```js
let arr=[1,2,3,4,5];
function even(num,i,arr) {
  if(num%2==0) {
    return num;
  }
}
arr.filter(even);

let arr= [{name:'manish',gender:'male',place:'mumbai', state:'Maharashtra'},{name:'akshat',gender:'male',place:'Pune',state:'Maharashtra'},
{name:'devika',gender:'female',place:'allahabad',state:'Uttar Pradesh'},{name:'sudhanshu',gender:'male',palce:'odisa',state:'Orrisa'}];
function stateFinder(cv,i,arr) {
  if(cv.state == "Maharashtra") {
    return cv.state;  
  }
   
}
arr.filter(stateFinder);

let menu = ["pizza", "hamburger", "hotdogs", "rice", "fried chicken"];
   function menuItemWithH(word,i,menu) {
     return word.includes("h");
     
   }
menu.filter(menuItemWithH);

```

<!-- 16. `flat` -->
17. `forEach`
- It accepts array and callback function
- it returns the same length of array.
-example
```js

let arr=[1,2,3];
let sum=0;
function addition(n) {
  sum=sum+n;
}
arr.forEach(addition);
console.log(sum);

let arr = ['manish','akshat','sudhanshu','devika','karan','raghuram'];
function lengthOfName(name,i,arr) {
let length = name.length;
console.log(`The length of ${name} at index ${i} is ${length}`);
}
arr.forEach(lengthOfName);

let arr= [{name:'manish',gender:'male',place:'mumbai', state:'Maharashtra'},{name:'akshat',gender:'male',place:'Pune',state:'Maharashtra'},{name:'devika',gender:'female',place:'allahabad',state:'Uttar Pradesh'},{name:'sudhanshu',gender:'male',palce:'odisa',state:'Orrisa'}];
function stateFinder(cv,i,arr) {
  console.log(`${cv.name} is from the ${cv.state} of India at index ${i}`,arr);
}
arr.forEach(stateFinder);
```

18. `map`

- It accepts array and callback function
- returns the array of same length
return value is stores in new result
-example
```js
let arr=[1,2,3,4];
let sum=0;
function addition(num,i,arr) {
  sum = sum+num;
  return sum;
console.log(`${sum} at index ${i}`,arr);
}
arr.map(addition);
console.log(sum);

let arr = ['manish','akshat','sudhanshu','devika','karan','raghuram'];
function lengthOfWord(word,i,arr) {
  console.log(`length of ${word} is ${word.length} at index ${i}`,arr);
  return word.length;
}
arr.map(lengthOfWord);

let arr= [{name:'manish',gender:'male',place:'mumbai'},{name:'akshat',gender:'male',place:'Pune'},{name:'devika',gender:'female',place:'allahabad'},{name:'sudhanshu',gender:'male',place:'odisa'}];
function placeFinder(cv,i,arr) { 
  console.log(`${cv.name} is from ${cv.place}`);
  return cv.place;
}
arr.map(placeFinder);

let arr= [{name:'manish',gender:'male',place:'mumbai', state:'Maharashtra'},{name:'akshat',gender:'male',place:'Pune',state:'Maharashtra'},{name:'devika',gender:'female',place:'allahabad',state:'Uttar Pradesh'},{name:'sudhanshu',gender:'male',palce:'odisa',state:'Orrisa'}];
function stateFinder(cv,i,arr) {
  console.log(`${cv.name} is from the ${cv.state} of India at index ${i}`,arr);
  return cv.state; 
}
arr.map(stateFinder);

```
-`map`accepts array and function
      return array of same size
      loop all over and calls functions with same element, indes, array
      stores the return value in new array
 
19. `pop`
- no parameter.
- It returns the element that was removed at the end.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.pop(); //3
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.pop(); //a lazy
  let colors = ["red"];
  colors.pop(); // "red"
  ```
- `pop` removes the last element of the array.It returns the removed element.

20. `reduce`*******************

21. `slice`
arr.slice([begin[, end]])

- 1. begin: It is optional
  Zero-based index at which to begin extraction.
A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
If begin is undefined, slice begins from index 0.
If begin is greater than the index range of the sequence, an empty array is returned.
 2. end : It is optional
 The index upto which element to be extracted , not including the end.
- A new array containing the extracted elements.
- examples:
```js
let name= ["manish","akshat","sudhamshu","karan"];
let nameSlice= name.slice(1,3);//["akshat","sudhanshu"]

let name= ["manish","akshat","sudhamshu","karan"];
let nameSlice= name.slice(1);//["akshat","sudhanshu","karan"];

let name= ["manish","akshat","sudhamshu","karan"];
let nameSlice= name.slice(0,-2);//["manish","akshat"]


```
- `slice` returns a new array with the elements present from begin index to end index .

22. `some`
- It accepts array and callback function
- return boolean value depending upon test result
-example:
```js
let arr=[1,2,3,5,7];
function even(num,i,arr) {
  return num % 2 == 0;
}
arr.some(even);//true


let arr=[1,9,3,5,7];
function even(num,i,arr) {
  return num % 2 == 0;
}
arr.some(even);//false

let arr=["manish","akshat","sudhanshu"];
function include(cv,i,arr) {
  return cv.includes("u")
}
arr.some(include);//true
```
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 


## writeCode

Using above methods you practiced above, do the following.

```js
// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

// - Find the index of `101` in numbers
numbers.IndexOf(101);

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");

// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");"This is a collection of words called sentence"

// - Remove the first word in the array (strings)
strings.shift();//This

//strings = ["is", "a", "collection", "of", "words", "called", "sentence"]

// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"));//true

// - Find all the words that contain 'is' use string method 'indexOf'
function wordIs(cv) {
  if(cv == "is")
  console.log(strings.indexOf(cv));
  return cv
}
strings.find(wordIs);//0

// - Check if all the numbers in numbers array are divisible by three use array method (every)
function divisible(cv) {
  if(cv % 3 == 0) {
  return cv;
  }
}
numbers.every(divisible);
// -  Sort Array from smallest to largest
function compareNumbers(a, b) {
  return a - b;
}
numbers.sort(compareNumbers);
// - Remove the last word in strings
strings.pop();//sentence
//strings =  ["is", "a", "collection", "of", "words", "called"]

// - Find largest number in numbers**********


// - Find longest string in strings***********

// - Find all the even numbers
function even (cv) {
  return cv % 2 == 0;
}
numbers.filter(even);//[4, 6, 12, 18]

// - Find all the odd numbers
function odd (cv) {
  return cv % 2 !== 0;
}
numbers.filter(odd);//[1, 3, 5, 7, 9, 9, 11, 101]

// - Place a new word at the start of the array use (upshift)
strings.unshift("new");

// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']
strings.slice(2,4);

// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,1221);
numbers.splice(3,1,1881);

// - Replace words in strings array with the length of the word
function replaceWords(cv) {
  let newWord= cv.replace(cv.length);
  return cv.length;
}
strings.map(replaceWords);

// - Find the sum of the length of words using above question
let nx= strings.map(replaceWords);
let sum=0;
function sumOfLength(cv) {
  sum=sum+cv;
  return sum;
}
nx.forEach(sumOfLength);
console.log(sum);
// - Customers Array
var customers = [

  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// - Find all customers whose firstname starts with 'J'
function firstName(name,i,arr) {
  if(name.firstname == "J") {
    console.log(`${firstname} at index ${i} starts with J`);
  }
}
customers.forEach(firstName);
//
function firstName(cv) {
  return (cv.firstname.startsWith("J"));
}
customers.filter(firstName);// problem here is that it shows objects

// - Create new array with only first name
let myFirstName = [];
function fn(cv) {
  return cv.firstname;
}
myFirstName = customers.map(fn);

// - Create new array with all the full names (ex: "Joe Blogs")
let myFullName = [];
function fn(cv) {
  return (cv.firstname + " " + cv.lastname);
}
myFullName = customers.map(fn);

// - Sort the array created above alphabetically
myFullName.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let newArray = [];
function vowel(cv) {
  return (cv.firstname.includes("a") || cv.firstname.includes("e") || cv.firstname.includes("i") || cv.firstname.includes("o") || cv.firstname.includes("u")) ;
    
  
}
newArray = customers.filter(vowel);//showing complete object
```
