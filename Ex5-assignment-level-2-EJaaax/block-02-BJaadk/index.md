writeCode

#### Read the following instructions and complete the exercise:

1. You will find a file named `index.js` inside the folder named `code`
2. `index.js` file will contain all the instructions
3. Solve below each instruction
4. You can also use `index.html` to open in browser to check the output.

For the given code you have to draw the diagram of how these things are working:

```js
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
function double(num) {
  console.log(num * 2);
  return num * 2;
}
let doubleNum = numbers.forEach(double);
```

```js
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
function double(num) {
  return num * 2;
}
let doubleNumbers = numbers.map(double);
```

```js
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);
```

```js
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
function test(num) {
  return num;
}
let filteredNumbers = numbers.filter(test);
```

```js
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
function test(num) {
  console.log(num);
}
let filteredNumbers = numbers.map(test);
```

```js
let numbers = [1, 2, 3, 4, 6, 7, 8, 9];
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(add);
```
