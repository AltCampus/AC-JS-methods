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
  -  This method returns  uppercase value of the original string.
  - Example:
    ```js
    let name = "SuDHansHu ShEkhAR";
    name.toUpperCase();//"SUDHANSHU SHEKHAR"
    let string = "LORem IpsUm DoLor Sit Amet";
    string.toUpperCase();//"LOREM IPSUM DOLOR SIT AMET"
    let nickName = "jagu";
    nickName.toUpperCase();//"JAGU"
    ```
  - `toUpperCase` coverts the given string to UpperCase.It returns UpperCase string without altering the original value of the string.


3. `toLowerCase`
-  This method returns  lowercase value of the original string.
  - Example:
    ```js
    let name = "SuDHansHu ShEkhAR";
    name.toUpperCase();//"sudhanshu shekhar"
    let string = "LORem IpsUm DoLor Sit Amet";
    string.toUpperCase();//"lorem ipsum dolor sit amet"
    let nickName = "jaGu";
    nickName.toUpperCase();//"jagu"
    ```
  - `toUpperCase` coverts the given string to LowerCase.It returns LowerCase string without altering the original value of the string.


4. `trim` 
  - This method returns the string by removing whitespaces(space before and after the string).
  - Example:
      ```js
      let x = "    Sudhanshu      " ;
      x.trim();//"Sudhanshu"
      let y = " lorem ipsum dolor sit amet        ";
      y.trim();//"lorem ipsum dolor sit amet"
      let z = " 1 2 34 56 7 89       ";
      x.trim();//"1 2 34 56 7 89"
      ```
  - `trim` return the string after removing whitespaces(space before and after the string).Even after removing spaces the length of string is same as of the input string.


5. `trimEnd`
- This method returns the string by removing whitespaces  after the string(right of string).
  - Example:
      ```js
      let x = "    Sudhanshu      " ;
      x = x.trimEnd();//"    Sudhanshu"
      let y = " lorem ipsum dolor sit amet        ";
      y = y.trimRight();//" lorem ipsum dolor sit amet"
      let z = " 1 2 34 56 7 89       ";
      x = x.trimEnd();//" 1 2 34 56 7 89"
      ```
  - `trimEnd` return the string by removing whitespaces after the string.The length of string changes post operation.


6. `trimStart`
- This method returns the string by removing whitespaces  before the string(left of string).
  - Example:
      ```js
      let x = "    Sudhanshu      " ;
      x = x.trimStart();//"Sudhanshu      "
      let y = " lorem ipsum dolor sit amet        ";
      y = y.trimLeft();//"lorem ipsum dolor sit amet        "
      let z = " 1 2 34 56 7 89       ";
      x = x.trimStart();//"1 2 34 56 7 89       "
      ```
  - `trimStart` return the string by removing whitespaces before the string.The length of string changes post operation.


7. `concat`
- This method accepts multiple parameter  of string data type.
   - It returns a new string after joining the strings.
   - Example:
     ```js
     let name1 = "Arya";
     let name2 = "Stark";
     name1.concat(' ',name2);//"Arya Stark"
     let a = "A quick brown fox";
     a.concat(' ','jumped over a lazy dog');//"A quick brown fox jumped over a lazy dog"
     let numstr = "123 456";
     numstr.concat(' ',789,' ','101112');//"123 456 789 101112" 
     ```
   - `concat` accepts multiple parameters (string data type) and return a new string after joining them.If input is not string,it is converted to string implicitly.

8. `endsWith`

- This method accepts two parameter: one of string type other of number.
   - It returns boolean value i.e. true or false.
   - Example:
     ```js
     let name1 = "Arya";
     name1.endsWith('a',3);//true
     let a = "A quick brown fox ";
     a.endsWith('fox');//true
     let numstr = "123 456! "
     numstr.endsWith('6',7);true 
     ```
   - `endsWith` accepts two parameters one is string type other is number,second parameter is not compulsory though.It checks if the string ends with the inputted string(string in parameter).It returns boolean value(true or false).



9. `includes`
- This method accepts two parameter: one of string type other of number.
   - It returns boolean value i.e. true or false.
   - Example:
     ```js
     let name1 = "Arya";
     name1.includes('a',1);//true
     let a = "A quick brown fox ";
     a.endsWith('fox');//true
     let numstr = "123 456! "
     numstr.endsWith('6',7);true 
     ```
   - `includes` accepts two parameters one is string type other is number(optional) from which index it should start searching.It checks if the former string contain the string from parameter or not.If second parameter is empty,it searches from index 0.It returns boolean value(true or false).


10. `indexOf`
- This method accepts two parameter: one of string type other of number.
   - It returns number value i.e. index of first occurrence of the searched value.
   - Example:
     ```js
     let name1 = "Arya";
     name1.indexOf('a');//3
     let a = "A quick brown fox";
     a.indexOf('f',8);//14
     let numstr = "123 456!"
     numstr.indexOf('6',3);// 6
     ```
   - `indexOf` accepts two parameters one is string type other is number(optional) from which index it should start searching.It checks if the former string contain the value or not.If second parameter is empty,it searches from index 0.It returns the first occurrence of the searched value.It is case sensitive.


11. `lastIndexOf`
- This method accepts two parameter: one of string type other of number.
   - It returns number value i.e. index of last occurrence of the searched value.
   - Example:
     ```js
     let name1 = "arya";
     name1.lastIndexOf('a');//3
     let a = "A fox quick brown fox";
     a.lastIndexOf('fox',8);//2
     let numstr = "126 456 786!"
     numstr.lastIndexOf('6',2);// 2
     ```
   - `lastIndexOf` accepts two parameters one is string type other is number(optional) from which index it should start searching.It checks if the former string contain the value or not which starts from the end of string.If second parameter is empty,it searches from index 0.It returns the last occurrence of the searched value.It is case sensitive.

12. `padEnd`
- This method accepts two parameter: one of number type other of string(optional).
   - It returns string extended to given length(number parameter).
   - Example:
     ```js
     let name1 = "arya";
     name1.padEnd(10,'a');//"aryaaaaaaa"
     let a = "A fox quick brown fox";
     a.padEnd(30);//"A fox quick brown fox         "
     let numstr = "126 456 786!"
     numstr.padEnd(25,'s');// "126 456 786!sssssssssssss"
     ```
   - `padEnd` accepts two parameters one is length (number type) other is string(optional) .It extends the string to the length inputed in parameter,if the string (parameter) is present it is added to end of original string till the given length.If the string (parameter) is absent,spaces will be added to the end till the length.


13. `padStart`

- This method accepts two parameter: one of number type other of string(optional).
   - It returns string extended to given length(number parameter).
   - Example:
     ```js
     let name1 = "arya";
     name1.padStart(10,'.');//"......arya"
     let a = "A fox quick brown fox";
     a.padStart(30);//"         A fox quick brown fox"
     let numstr = "126 456 786!"
     numstr.padStart(25,'s');// "sssssssssssss126 456 786!"
     ```
   - `padEnd` accepts two parameters one is length (number type) other is string(optional) .It extends the string to the length inputed in parameter,if the string (parameter) is present it is added to starting of original string till the given length.If the string (parameter) is absent,spaces will be added to the starting till the string reaches given length.


14. `repeat`

- This method accepts one parameter of number type(number of times to be repeated).
   - It returns string after adding n times (inputted in parameter).
   - Example:
     ```js
     let name1 = "arya";
     name1.repeat(10);//"aryaaryaaryaaryaaryaaryaaryaaryaaryaarya"
     let a = "A fox quick brown fox";
     a.repeat(2);//"A fox quick brown foxA fox quick brown fox"
     let numstr = "126 456 786!";
     numstr.repeat(25);// "126 456 786!126 456 786!126 456 786!126 456 786!126 456 786!"
     ```
   - `padEnd` accepts a parameters i.e. length (number type).It repeats the string n(length in parameter) times and return  n times repeated string.


15. `replace`

- This method accepts two parameter of both string type.
   - It returns string with replaced values .
   - Example:
     ```js
     let name1 = "abcdefghij";
     name1.replace('b', 'k');//"akcdefghij"
     let a = "A fox quick brown fox";
     a.replace('fox','dog');//"A dog quick brown fox"
     let numstr = "126 456 786!";
     numstr.replace('6','999');// "12999 456 786"
     ```
   - `padEnd` accepts two parameters:first of regular expression or substring that is to be replaced,second of string or function that replaces the first parameter.It only replaces the first occurrence of the substring.


16. `slice`

- This method accepts two parameter of both number type .
- It returns the string present from begin index(first parameter) and end index(second parameter) .
- Example:
  ```js
  let name1 = "abcdefghij";
  name1.slice(5);//"fghij"
  let a = "A fox quick brown fox";
  a.slice(7,10);//"uic"
  let numstr = "126 456 786!";
  numstr.slice(3,8);// "45678"
  ```
- `slice` accepts two parameters:begin index , end index.It extracts the string present from begin index till end index and returns in another string without changing the original one.If end index is absent ,it extracts string from begin index till end of string.


17. `split`

- This method accepts two optional parameter :one is string other is limit  .
- It returns array of ordered substrings separated by separator if provided. .
- Example:
  ```js
  let name1 = "abcdefghij";
  name1.split();//["abcdefghij"]
  let a = "A fox ,quick brown, fox";
  a.split("7");//["A fox ,quick brown, fox"]
  let str = "ab,cd,de,ef";
  str.split();//["ab,cd,de,ef"]
  ```
- `split` coverts the string into an array of strings.If the separator is absent,it returns an array of one string. 


18. `substring`

- This method accepts two parameter of number type .
- It returns string present in start index(first parameter) and end index(second parameter)  .
- Example:
  ```js
  let name1 = "abcdefghij";
  name1.substring(1,5);//"bcde"
  let a = "A fox quick brown fox";
  a.substring("7");//"uick brown fox"
  let str = "ab cdde ef";
  str.substring(0,4);//"ab c"
  ```
- `split` coverts the string into an array of strings.If the separator is absent,it returns an array of one string.

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
let indexOfIs = quote.indexOf("is");//6

/*
2. Find the character at, the index indexOfIs (Problem 1) in quote.
*/
// Your code goes here
quote.charAt(6);

/*
3. Log the message saying `The index of first is in quote is 7`
*/
// Your code goes here
console.log(`The index of first is in quote is` + indexOfIs);

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
console.log('The character at index 0 is ' + "'" +quote.charAt(0) + "'");
console.log('The character at index 0 is ' + "'" +quote.charAt(1) + "'");
console.log('The character at index 0 is ' + "'" +quote.charAt(2) + "'");
console.log('The character at index 0 is ' + "'" +quote.charAt(3) + "'");
console.log('The character at index 0 is ' + "'" +quote.charAt(4) + "'");
console.log('The character at index 0 is ' + "'" +quote.charAt(5) + "'");


/*
5. Using the variable from , to and quote variable dispaly this message
"Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
let concat = from.concat(' ','said ',quote ,' ' ,'to',' ', to);

/*
6. Does from, to and quote ends with "rk". Check all three.
*/

from.endsWith("rk");
quote.endsWith("rk");
to.endsWith("rk");

/*
7. Does quote includes the word "Only"
*/

quote.includes("Only");

/*
8. Does quote includes the word " we"
*/

quote.includes("we");

/*
9. Find the index of the the word `we` in quote
*/

quote.indexOf("we");//24

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/

var quoteSplitted = quote.split(' ');

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/

quoteSplitted.splice(quoteSplitted.length-1,1,"today");
quotesplitted.join(" ");
//"There is only one things we say to death: Not tommorow"


/*
12. Find the index of second "o" in quote. Use indexOf
*/
quote.indexOf("o",10);//14

/*
13. Find the last index of letter "a" in quote.
*/
var b = quote.lastIndexOf("a",);//48

/*
14. Find the second last index of letter "a" in quote.
*/

quote.lastIndexOf("a",b-1);//36


/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
*/

quote.padEnd(20,".");
//"There is only one thing we say to death: Not today...................."


/*
16. Do same as (15) but the ... should come in start.
*/

quote.padStart(20,".");

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
var quoteTo = quote.concat(' ',to).replace('Stark','Lannister');

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
quote.slice(0,27).padEnd(30,".");

/*
21. Find out does quote, quoteFrom, quoteTo starts with "A"
*/
quote.startsWith("A");//false
quoteFrom.startsWith("A");//false
quoteTo.startsWith("A");//false
```

## Practice Array Methods-writeTextAnswer

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#) and look for the name of method to learn about it.

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
   - No it doesnot mutate the original array.

2. `join`
- one optional string parameter.
- It returns string after joining all elements of array.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.join(); //["1,2,3"]
  let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
  sentanceArray.join("-"); //"A-quick-brown-fox-jumped-over-a-lazy"
  let colors = ["red", "green", "blue"];
  colors.join(":"); // "red:green:blue"
  ```
- `join` creates string by joining all elements of array.The string are separated by separator provided in parameter.


3. `flat`
- one optional number parameter i.e. the depth of sub-arrays.
- It returns a new array  joining the sub-array inside array.
- Example:
  ```js
  let numbers = [1, 2, 3, [4, 5, 6]];
  numbers.flat(); //["1,2,3,4,5,6"]
  let sentanceArray = ["A ","quick"," brown",[" fox", ["jumped"," over"]," a lazy"]];
  sentanceArray.flat(2); //["A ", "quick", " brown", " fox", "jumped", " over", " a lazy"]
  let colors = ["red", "green", ["blue",["white",["red"]]]];
  colors.flat("4"); // ["red", "green", "blue", "white", ["red"]]
  ```
- `flat` creates a new array by joining the sub-array of the array.The number in parameter is depth of sub-array till which the array will keep joining.


4. `push`
- n number of parameter (new elements of array).
- It returns length of new array after adding new elements.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.push(4,5,6); //[1,2,3,4,5,6]
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.push(2,"dog"); //["A ", "quick", " brown", " fox", "jumped", " over", " a lazy", 2, "dog"]
  let colors = ["red"];
  colors.push("green", "blue","white","red"); // ["red", "green", "blue", "white", "red"]
  ```
- `push` adds new element at the end of the array.It can add n values and can be any kind of value.


5. `indexOf`
- two number of parameter one for search item other for index number to start with.
- It returns the index of first occurrence of the search item and -1 if not found.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.indexOf(2); //1
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.indexOf(" fox",2); //3
  let colors = ["red"];
  colors.indexOf("green"); //-1
  ```
- `indexOf` accepts a search value and returns the index at which element is found.It returns -1 if element is not found.


6. `lastIndexOf`

- two number of parameter one for search item other for index number to start with.
- It returns the index of last occurrence of the search item and -1 if not found.
- Example:
  ```js
  let numbers = [1, 2, 3,3.4,3];
  numbers.lastIndexOf(3); //4
  let sentanceArray = ["A ","fox","fox","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.lastIndexOf(" fox"); //5
  let colors = ["red"];
  colors.lastIndexOf("green"); //-1
  ```
- `lastIndexOf` accepts a search value and returns the index at which element is last found.It returns -1 if element is not found.It searches for the search value from end of array.


7. `includes`

- two number of parameter one for search item other for index number to start with.
- It returns boolean value(true or false).True if found,False if not.
- Example:
  ```js
  let numbers = [1, 2, 3,3.4,3];
  numbers.includes(3); //true
  let sentanceArray = ["A ","fox","fox","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.includes(" fox"); //true
  let colors = ["red"];
  colors.includes("green"); //false
  ```
- `includes` accepts a search value and returns true if search value is present,false if absent.If index value is not provided ,it starts searching from 0.


8. `reverse`

- no parameter.
- It returns reversed array.
- Example:
  ```js
  let numbers = [1, 2, 3,3.4,3];
  numbers.reverse(); //[3,3.4,3,2,1]
  let sentanceArray = ["A ","fox","fox","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.reverse(); //[" a lazy", " over", "jumped", " fox", " brown", "quick", "fox", "fox", "A "]
  let colors = ["red",2];
  colors.reverse(); //[2,"red"]
  ```
- `reverse` returns reverse array.First element becomes last,last becomes first.Second becomes last but one,last but one becomes second and continues till the array becomes reversed.


9. `every`
- takes a callback function to check for each elements that three parameters:element, index, array.
- It returns true if callback function for every element returns a truthy value else  false .
- Example:
  ```js
   
  function isSmaller(element,index,array){
    return (elements<=5);
  }
  let numbers = [1, 2, 3,3.4,3];
  numbers.every(isSmaller);
  ```
- `every` tests whether all the elements in an array passes the test  in the provided function.If all values of array returns truthy value,it return true else returns false.


10. `shift`

- no parameter.
- It returns the removed element.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.shift(); //1
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.shift(); //"A "
  let colors = ["red"];
  colors.shift(); // "red"
  ```
- `shift` removes the first element of th array.The array length is reduced by 1.It returns the removed elements.


11. `splice`
- callback function reference in parameter.
- It returns array containing removed elements.
- Example:
    ```js
  let numbers = [1, 2, 3,7];
  numbers.splice(0,2,8);
  console.log(numbers); //[8,3,7]
  
  ```
- `splice`  removes or replace  elements.It returns array after removing elements.


12. `find`
- callback function reference in parameter.
- It returns the first element which satifies the condition.
- Example:
  ```js
  function isGreater(x){
    return x > 4;
  }
  let numbers = [1, 2, 3,7];
  var x =numbers.find(isGreater);
  console.log(x); //7
  
  ```
- `find`  loops through  elements of the array and returns the first element which satisfies the condition.


13. `unshift`

- n parameter.
- It returns length of array after adding the elements.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.unshift(5,4); //5
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.unshift("Hey"); //8
  let colors = [];
  colors.unshift("red"); // 1
  ```
- `unshift` adds new elements at first position of the array.It returns the new length of array after adding elements.


14. `findIndex`

- callback function reference in parameter.
- It returns the index of first element which satifies the condition.
- Example:
  ```js
  function isGreater(x){
    console.log(x<5);
  }
  let numbers = [1, 2, 3,7];
  numbers.findIndex(isGreater); //0
  
  ```
- `findIndex`  loops through  elements of the array and returns the index of first element which satisfies the condition.


15. `filter`

- callback function reference in parameter.
- It returns new array of element which pass the test.
- Example:
  ```js
  function isGreater(x){
    console.log(x<5);
  }
  let numbers = [1, 2, 3,7];
  numbers.filter(isGreater); //true [1,2,3]
  
  ```
- `filter` loops through each element of the array.It returns array of length equal to or less than that of  declared array.


16. `flat`

- one optional number parameter i.e. the depth of sub-arrays.
- It returns a new array  joining the sub-array inside array.
- Example:
  ```js
  let numbers = [1, 2, 3, [4, 5, 6]];
  numbers.flat(); //["1,2,3,4,5,6"]
  let sentanceArray = ["A ","quick"," brown",[" fox", ["jumped"," over"]," a lazy"]];
  sentanceArray.flat(2); //["A ", "quick", " brown", " fox", "jumped", " over", " a lazy"]
  let colors = ["red", "green", ["blue",["white",["red"]]]];
  colors.flat("4"); // ["red", "green", "blue", "white", ["red"]]
  ```
- `flat` creates a new array by joining the sub-array of the array.The number in parameter is depth of sub-array till which the array will keep joining.


17. `forEach`
- callback function reference in parameter.
- It returns undefined.
- Example:
  ```js
  function isGreater(x){
    console.log((x<5)? true:false);
  }
  let numbers = [1, 2, 3];
  numbers.forEach(isGreater); //true undefined
  
  ```
- `forEach` loops through each element of the array.It returns undefined.

18. `map`

- callback function reference in parameter.
- It returns a new array of the result of callback function .
- Example:
  ```js
  function isGreater(x){
    console.log((x<5)? true:false);
  }
  let numbers = [1, 2, 3];
  numbers.map(isGreater); //true [undefined,undefined,undefined]
  
  ```
- `map` loops through each element of the array.It returns array of undefined ,length of array is same as declared array.


19. `pop`

- no parameter.
- It returns the element that was removed.
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.pop(); //3
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.pop(); //"dog"
  let colors = ["red"];
  colors.pop(); // "red"
  ```
- `pop` removes the last element of the array.It returns the removed element.


20. `reduce`
- It takes a callback refrence which has four parameter namely accumulator,current value ,index, array.
- It returns the single  value after all iterations   .
- Example:
  ```js
    function sumArray(acc,x){
    return acc + x;
  }
  numbers.reduce(sumArray);
  ```
- `reduce` I works on every element of the array and returns a single output.


21. `slice`
- It takes two parameters of number type, one is begin index other is end index.
- It returns a new array with the elements from begin index and end index .
- Example:
  ```js
    var numbers = [1,2,3,4,5,6,7,8,9];
    numbers.slice(3);//[4,5,6,7,8,9]
  ```
- `slice` returns a new array with the elements present from begin index to end index .

22. `some`
- 
- It returns true if atleast one element pass truthy values .
- Example:
  ```js
  let numbers = [1, 2, 3];
  numbers.pop(); //3
  let sentanceArray = ["A ","quick"," brown"," fox", "jumped"," over"," a lazy"];
  sentanceArray.pop(); //"dog"
  let colors = ["red"];
  colors.pop(); // "red"
  ```
- `some` removes the last element of the array.It returns the removed element.

## writeCode

Using above methods you practiced above, do the following.

```js
// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

// - Find the index of `101` in numbers
numbers.indexOf(101); //8

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9); //11

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ").toString();

// - Add two new words in the strings array "called" and "sentance"
strings.concat("called","sentence");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ").toString();
// - Remove the first word in the array (strings)

strings.shift();

// - Find all the words that contain 'is' use string method 'includes'

function includeIs(str,i,arr){
  return (str.includes("is"));
}
strings.filter(includeIs);
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");

// - Check if all the numbers in numbers array are divisible by three use array method (every)

function divBy3(x){
  return (x%3 ==0);
}
numbers.every(divBy3);
// -  Sort Array from smallest to largest
numbers.sort();
strings.sort();


// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
function largest(a,b){
  return a>b;
}
numbers.filter(largest).pop();


// - Find longest string in strings 

function len(str,i,arr){
  let strlen = str.length;
  
  return (strlen,str);
}
let length = strings.map(len);
length.sort((a,b)  => b - a );


// - Find all the even numbers
function even(a){
  return (a%2 == 0);
}
numbers.filter(even);

// - Find all the odd numbers

function odd(a){
  return (a%2 == 1);
}
numbers.filter(odd);

// - Place a new word at the start of the array use (upshift)

strings.unshift("hey");

// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']
strings.slice(2,4);

// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1,1,1221);
number.splice(3,1,1881);

// - Replace words in strings array with the length of the word
function replace(x){
  return x.length;
}
strings.map(replace);

// - Find the sum of the length of words using above question
function replace(acc,curr){
  return acc + curr.length;
}
strings.reduce((replace),0);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// - Find all customers whose firstname starts with 'J'

function firstname(x){
   return (x.firstname.startsWith("J"))
}
customers.filter(firstname);

// - Create new array with only first name

 function firstname(obj){
    return obj.firstname;
 }
let firstName = customers.map(firstname);


// - Create new array with all the full names (ex: "Joe Blogs")

function fullname(x){
   return x.firstname + ' '+ x.lastname;
}
let fullNames = customers.map(fullname);

// - Sort the array created above alphabetically
fullNames.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
function vowel(obj,i,arr){
  let firstName = obj.firstname;
  let lowerfirst =firstName.toLowerCase();
  return (lowerfirst.includes('a') || lowerfirst.includes('e') || lowerfirst.includes('i') ||lowerfirst.includes('o') || lowerfirst.includes('u'));
}
customers.filter(vowel);
```
