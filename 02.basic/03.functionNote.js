

# 🔥 JavaScript Functions — Complete Notes (Interview + Real Projects)

---

## 1️⃣ What is a Function?

A **function** is a reusable block of code that performs a specific task.

### Syntax:

```js
function functionName(parameters) {
  // code to execute
  return result;
}
```

---

## 2️⃣ Why Use Functions?

* To **reuse code** without repeating logic.
* To **organize** code into logical parts.
* To make code **maintainable and readable**.
* To allow **modularity** (split large projects into smaller parts).
* Used heavily in **real projects**, e.g., API handling, data processing, event handlers.

---

## 3️⃣ Types of Functions

### 1. **Normal Function (Function Declaration)**

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Rejoan")); // Hello, Rejoan!
```

✅ Hoisted (you can call it before it’s declared).
Used when defining reusable logic.

---

### 2. **Function Expression**

```js
const greet = function(name) {
  return `Hi, ${name}!`;
};
console.log(greet("Tanjim"));
```

✅ Not hoisted.
Used when you need function as a **value** (e.g., passing to another function).

---

### 3. **Arrow Function (ES6)**

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Rejoan"));
```

✅ Shorter syntax.
⚠️ Does **not** have its own `this` — it uses parent’s `this`.
Used in React, event listeners, async code, etc.

---

### 4. **Anonymous Function**

A function without a name, usually used as a callback:

```js
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
```

---

### 5. **Immediately Invoked Function Expression (IIFE)**

Runs automatically when defined:

```js
(function() {
  console.log("I run immediately!");
})();
```

Used to create **private scopes** (before modules existed).

---

## 4️⃣ Function Parameters and Arguments

```js
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // 7
```

✅ **Parameters** → placeholders (a, b)
✅ **Arguments** → real values (3, 4)

---

## 5️⃣ Default Parameters

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest
```

---

## 6️⃣ Rest Parameter (`...`)

Used when you don’t know how many arguments will be passed:

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## 7️⃣ Spread Operator with Functions

```js
function multiply(a, b, c) {
  return a * b * c;
}
const arr = [2, 3, 4];
console.log(multiply(...arr)); // 24
```

---

## 8️⃣ Function with Arrays

### Example 1:

```js
const numbers = [10, 20, 30];
function printArray(arr) {
  arr.forEach(num => console.log(num));
}
printArray(numbers);
```

### Example 2 (Return Modified Array):

```js
function doubleValues(arr) {
  return arr.map(num => num * 2);
}
console.log(doubleValues([1, 2, 3])); // [2, 4, 6]
```

---

## 9️⃣ Function with Objects

```js
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
const user = { name: "Rejoan", age: 22 };
displayUser(user);
```

---

## 🔟 Function Returning Object

```js
function createUser(name, age) {
  return { name, age };
}
console.log(createUser("Rejoan", 22));
// { name: "Rejoan", age: 22 }
```

---

## 1️⃣1️⃣ `this` Keyword in Functions

### In Normal Function:

```js
const person = {
  name: "Rejoan",
  greet: function() {
    console.log(this.name);
  },
};
person.greet(); // Rejoan
```

### In Arrow Function:

```js
const person = {
  name: "Rejoan",
  greet: () => {
    console.log(this.name); // undefined (no own 'this')
  },
};
person.greet();
```

✅ Use normal function for object methods.

---

## 1️⃣2️⃣ Reference vs Execution

| Concept       | Example    | Meaning                                     |
| ------------- | ---------- | ------------------------------------------- |
| **Reference** | `sayHi;`   | Refers to the function itself (not running) |
| **Execution** | `sayHi();` | Calls/runs the function                     |

Example:

```js
function sayHi() { console.log("Hello!"); }
const greet = sayHi;   // reference
greet();               // execution
```

---

## 1️⃣3️⃣ Higher-Order Functions

A function that **takes another function as an argument** or **returns** one.

Example:

```js
function processNumbers(arr, callback) {
  return arr.map(callback);
}
console.log(processNumbers([1, 2, 3], num => num * 2));
// [2, 4, 6]
```

---

## 1️⃣4️⃣ Callback Functions

Function passed as an argument to another function.

```js
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}
function bye() {
  console.log("Goodbye!");
}
greetUser("Rejoan", bye);
```

---

## 1️⃣5️⃣ Closures

When a function **remembers** variables from its outer scope even after the outer function finishes.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

✅ Used in data privacy and React hooks (e.g., `useState`).

---

## 1️⃣6️⃣ Arrow Function Shortcuts

```js
const square = n => n * n;
const greet = name => `Hi ${name}`;
```

---

## 1️⃣7️⃣ Real-World Uses

* Event handling: `button.addEventListener("click", handleClick)`
* API handling: `fetchData().then(processData)`
* React hooks: `useEffect(() => {...}, [])`
* Data manipulation: `.map()`, `.filter()`, `.reduce()`

---

## 1️⃣8️⃣ Common Interview Questions

1. What is the difference between **function declaration** and **function expression**?
2. What is the difference between **normal** and **arrow functions**?
3. How does **hoisting** work in functions?
4. What is a **closure**, and where is it used?
5. What does the **this** keyword refer to in functions?
6. Explain the **difference between call, apply, and bind**.
7. What is a **higher-order function**?
8. How does **callback** differ from **promise/async**?
9. Can you explain **pure functions**?
10. What is the **difference between reference and execution**?

---

## 1️⃣9️⃣ Quick Summary Table

| Concept              | Example                    | Use                     |
| -------------------- | -------------------------- | ----------------------- |
| Function Declaration | `function add(a,b){}`      | Reusable logic          |
| Function Expression  | `const add = function(){}` | Anonymous function      |
| Arrow Function       | `const add = (a,b)=>a+b;`  | Short syntax, no `this` |
| Rest Parameter       | `(...nums)`                | Handle many arguments   |
| Spread               | `add(...arr)`              | Pass array as args      |
| IIFE                 | `(function(){})()`         | Immediate run           |
| Callback             | `doSomething(fn)`          | Async or event handling |
| Closure              | `function outer(){...}`    | Data privacy            |
| Higher Order         | `arr.map(fn)`              | Functional programming  |

---


