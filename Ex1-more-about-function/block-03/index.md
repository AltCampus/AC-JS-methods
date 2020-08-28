writeTextAnswer

1. What will be the output of the following code with reason (write the error message if any)

```js
{
  let username = 'John';
}
console.log(username);
```

2. What will be the output of the following code with reason (write the error message if any)

```js
{
  var username = 'John';
}
console.log(username);
```

3. What will be the output of the following code with reason (write the error message if any)

```js
{
  const username = 'John';
}
console.log(username);
```

4. What will be the output of the following code with reason (write the error message if any)

```js
{
  let num = 21;
}
let secondNum = 200;
function add() {
  return num + num2;
}
console.log(add());
```

5. What will be the output of the following code with reason (write the error message if any)

```js
{
  var num = 21;
}
let secondNum = 200;
function add() {
  return num + num2;
}
console.log(add());
```

6. What will be the output of the following code with reason (write the error message if any)

```js
for (let i = 0; i < 20; i++) {
  //
}
console.log(i);
```

7. What will be the output of the following code with reason (write the error message if any)

```js
for (var i = 0; i < 20; i++) {
  //
}
console.log(i);
```

8. What will be the output of the following code with reason (write the error message if any)

```js
for (const i = 0; i < 20; i++) {
  //
}
console.log(i);
```

9. What will be the output of the following code with reason (write the error message if any)

```js
if (true) {
  let user = 'John';
}
console.log(user);
```

10. What will be the output of the following code with reason (write the error message if any)

```js
if (true) {
  var user = 'John';
}
console.log(user);
```

11. What will be the output of the following code with reason (write the error message if any)

```js
if (true) {
  const user = 'John';
}
console.log(user);
```

12. What will be the output of the following code with reason (write the error message if any)

```js
if (true) {
  const number = 21;
  console.log(number++);
}
```

13. What will be the output of the following code with reason (write the error message if any)

```js
if (true) {
  const number = 21;
  console.log((number += 21));
}
```

14. What will be the output of the following code with reason (write the error message if any)

```js
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
}

console.log(first());
```

15. What will be the output of the following code with reason (write the error message if any)

```js
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
  second();
}

console.log(first());
```

16. What will be the output of the following code with reason (write the error message if any)

```js
function first() {
  let one = 1;
  function second() {
    let two = 2;
  }
  second();
  return one + two;
}

console.log(first());
```

17. What will be the output of the following code with reason (write the error message if any)

```js
function first() {
  let one = 1;
  function second() {
    let two = 2;
    return one + two;
  }
  return second();
}

console.log(first());
```

18. What will be the output of the following code with reason (write the error message if any)

```js
function first() {
  let one = 1;
  function second() {
    let two = 2;
    let one = 100;
    return one + two;
  }
  return second();
}

console.log(first());
```

19. What will be the output of the following code with reason (write the error message if any)

```js
let three = 300;
function first() {
  let one = 1;
  let three = 3;
  function second() {
    let two = 2;
    let one = 100;
    return one + two + three;
  }
  return second();
}

console.log(first());
```

20. What will be the output of the following code with reason (write the error message if any)

```js
let three = 300;
function first() {
  let one = 1;
  let two = 2;
  function second() {
    let one = 100;
    return one + two + three;
  }
  return second();
}

console.log(first());
```
