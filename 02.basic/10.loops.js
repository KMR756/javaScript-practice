Here’s a **complete, interview-ready note on JavaScript Loops** — covering theory, syntax, use cases, and examples for **real-world and interview prep**.

---

## 🌀 What Are Loops in JavaScript?

**Definition:**
A loop allows you to **repeat a block of code multiple times** until a specified condition becomes `false`.

**Why we use loops:**

* To avoid writing repetitive code
* To process arrays or objects
* To perform tasks like filtering, searching, and transforming data

---

## 🔹 1. `for` Loop

### 📘 Syntax:

```js
for (initialization; condition; update) {
  // code to run
}
```

### 📘 Example:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
```

**Explanation:**

* `let i = 1` → starts counter
* `i <= 5` → loop continues while true
* `i++` → increases by 1 each time

**Output:**

```
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
```

✅ **Used for:** running a loop a known number of times (like iterating through arrays).

---

## 🔹 2. `while` Loop

### 📘 Syntax:

```js
while (condition) {
  // code to run
}
```

### 📘 Example:

```js
let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}
```

**Explanation:**
Executes as long as the condition is true.

✅ **Used for:** running until a condition changes dynamically (e.g., waiting for user input, server status).

---

## 🔹 3. `do...while` Loop

### 📘 Syntax:

```js
do {
  // code to run
} while (condition);
```

### 📘 Example:

```js
let num = 1;
do {
  console.log("Num:", num);
  num++;
} while (num <= 3);
```

**Explanation:**
Executes the code **at least once**, even if the condition is false.

✅ **Used for:** user-driven tasks (e.g., ask for input until valid).

---

## 🔹 4. `for...of` Loop (ES6)

Used to **iterate over iterable objects** like arrays, strings, Maps, Sets.

### 📘 Example:

```js
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

**Output:**

```
apple
banana
mango
```

✅ **Used for:** working with array values directly.

---

## 🔹 5. `for...in` Loop

Used to **iterate over object properties** (keys).

### 📘 Example:

```js
let person = { name: "Rejoan", age: 24, city: "Dhaka" };
for (let key in person) {
  console.log(key, ":", person[key]);
}
```

**Output:**

```
name : Rejoan
age : 24
city : Dhaka
```

✅ **Used for:** looping through object keys.

---

## 🔹 6. `break` and `continue`

### `break` → exits the loop immediately

### `continue` → skips the current iteration

**Example:**

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log(i);
}
```

**Output:**

```
1
2
4
```

---

## 🔹 Real-World Example

### ✅ Processing user data:

```js
let users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

for (let user of users) {
  if (!user.active) continue;
  console.log("Active user:", user.name);
}
```

**Output:**

```
Active user: A
Active user: C
```

---

## 🧠 Interview Tips & Questions

1. **What is the difference between `for`, `for...of`, and `for...in`?**

   * `for` → numeric loops
   * `for...of` → iterate array values
   * `for...in` → iterate object keys

2. **What is the difference between `while` and `do...while`?**

   * `while` checks condition first
   * `do...while` executes first, then checks

3. **Can you break out of multiple loops at once?**

   * Only with **labels** (rarely used in real projects).

4. **What’s better for arrays: `for` or `forEach()`?**

   * `forEach()` is simpler, but `for` gives more control (e.g., break/continue).

---

## 🔹 Bonus: `Array.forEach()` (Common in Projects)

### 📘 Example:

```js
let numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num * 2));
```

**Output:**

```
2
4
6
```

✅ Used for: clean and readable array iteration.

---

## 🔹 Summary Table

| Loop Type  | Used For               | Can Use break/continue | Executes At Least Once |
| ---------- | ---------------------- | ---------------------- | ---------------------- |
| for        | Fixed number of times  | ✅                      | ❌                      |
| while      | Conditional repetition | ✅                      | ❌                      |
| do...while | Run first, check later | ✅                      | ✅                      |
| for...of   | Iterate array values   | ✅                      | ❌                      |
| for...in   | Iterate object keys    | ✅                      | ❌                      |

---

Would you like me to continue with the **next topic — control flow in loops (like nested loops, labeled loops, and infinite loops handling)**?
That’s often part of **advanced JS interviews** and real projects.
