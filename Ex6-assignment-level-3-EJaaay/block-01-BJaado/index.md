#### Implement the methods given below:

- You can only use `for` or `for..of` loop
- First write down the steps of how the methods work
- After writing the steps convert it into code

#### Example:

`map`

1. Steps

- Map accepts a callback function in our case we need two arguments array and callback
- The callback function gets access to three things (elm, index, arr)
- call the callback function with each values
- store the return value in a new array for each element
- return the new array

2. Implementation

```js
function map(array, cb) {
  let final = [];
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    final.push(cb(element, index, array));
  }
  return final;
}
```

-`forEach`

```js
// Your code goes here
```

- `map`

```js
// Your code goes here
```

- `reduce`

```js
// Your code goes here
```

- `find`

```js
// Your code goes here
```

#### To Test You Functions

```js
let array = [10, 20, 43, 56, 76, 89, 90];

forEach(array, (num, index, array) => {
  console.log(num, index, array);
});

map(array, (num, index, array) => {
  return num + index;
});

filter(array, (num, index, array) => {
  return num % 2 === 0;
});
reduce(
  array,
  (acc, num) => {
    return acc + num;
  },
  0
);

find(array, (num) => num === 20);
```
