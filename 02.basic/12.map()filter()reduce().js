Excellent — this is one of the **most important and frequently asked topics** in JavaScript interviews and **real-world projects**.
Let’s go deep but clearly — covering **`map()`, `filter()`, and `reduce()`** with syntax, examples, and practical use cases.

---

# 🧠 JavaScript Array Methods — `map()`, `filter()`, and `reduce()`

---

## 🌱 Introduction

These are **higher-order functions** in JavaScript.
They are called **array iteration methods**, meaning they **loop through arrays**, but in a more **functional, cleaner way** (without writing manual loops).

They don’t modify the original array (they return a **new array**).

---

## 🔹 1. `map()` — Transform Each Element

### 📘 Definition:

`map()` creates a **new array** by applying a function to **each element** of the original array.

It’s used when you want to **transform or modify** all array elements.

---

### 📘 Syntax:

```js
array.map((element, index, array) => {
  // return new value for each element
});
```

---

### 📘 Example:

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
```

**Output:**

```
[2, 4, 6, 8]
```

✅ **Use case:** data transformation, updating array values, rendering lists in React, etc.

---

### 💼 Real-World Example:

```js
const users = [
  { name: "Rejoan", age: 24 },
  { name: "Tanjim", age: 26 }
];

// Extract only names
const names = users.map(user => user.name);
console.log(names);
```

**Output:**

```
["Rejoan", "Tanjim"]
```

---

## 🔹 2. `filter()` — Select Specific Elements

### 📘 Definition:

`filter()` creates a **new array** with all elements that **pass a condition** (return true).

It’s used when you want to **filter data** from an array.

---

### 📘 Syntax:

```js
array.filter((element, index, array) => {
  return condition; // true or false
});
```

---

### 📘 Example:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(num => num % 2 === 0);
console.log(even);
```

**Output:**

```
[2, 4, 6]
```

✅ **Use case:** filtering users, products, or any data based on conditions.

---

### 💼 Real-World Example:

```js
const products = [
  { name: "Phone", price: 800 },
  { name: "Laptop", price: 1500 },
  { name: "Watch", price: 200 }
];

const expensive = products.filter(p => p.price > 500);
console.log(expensive);
```

**Output:**

```
[
  { name: "Phone", price: 800 },
  { name: "Laptop", price: 1500 }
]
```

---

## 🔹 3. `reduce()` — Combine All Elements into One Value

### 📘 Definition:

`reduce()` reduces (or accumulates) all elements of an array into a **single value**.

It uses an **accumulator** to carry the result through each iteration.

---

### 📘 Syntax:

```js
array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);
```

---

### 📘 Example:

```js
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);
```

**Output:**

```
10
```

✅ **Use case:** summing prices, counting items, merging arrays, or calculating statistics.

---

### 💼 Real-World Example:

```js
const cart = [
  { item: "Phone", price: 1000 },
  { item: "Laptop", price: 2000 },
  { item: "Mouse", price: 100 }
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log("Total:", totalPrice);
```

**Output:**

```
Total: 3100
```

---

## 🔹 🧮 Combine `map()`, `filter()`, and `reduce()`

These methods can be chained for powerful data manipulation.

### 📘 Example:

```js
const numbers = [1, 2, 3, 4, 5, 6];

// Step 1: Double → Step 2: Filter even → Step 3: Sum
const result = numbers
  .map(n => n * 2)
  .filter(n => n % 4 === 0)
  .reduce((sum, n) => sum + n, 0);

console.log(result);
```

**Explanation:**

1. `map()` → [2, 4, 6, 8, 10, 12]
2. `filter()` → [4, 8, 12]
3. `reduce()` → 4 + 8 + 12 = 24

**Output:**

```
24
```

---

## 🧠 Summary Table

| Method     | Returns      | Used For          | Modifies Original Array | Can Chain |
| ---------- | ------------ | ----------------- | ----------------------- | --------- |
| `map()`    | New array    | Transforming data | ❌ No                    | ✅ Yes     |
| `filter()` | New array    | Selecting data    | ❌ No                    | ✅ Yes     |
| `reduce()` | Single value | Combining data    | ❌ No                    | ✅ Yes     |

---

## 💬 Common Interview Questions

1. **Difference between `map()` and `forEach()`?**

   * `map()` → returns a new array
   * `forEach()` → returns `undefined` (used for side effects only)

2. **Can `reduce()` return an object or array?**
   ✅ Yes! `reduce()` can return **any type** — number, array, or object.

3. **What happens if you don’t provide an initial value in `reduce()`?**

   * The first array element is used as the initial value.
   * It’s better to **always provide one** to avoid errors with empty arrays.

4. **When would you use `map()` over `for` loop?**

   * `map()` is cleaner, functional, and works better in **React rendering**, **data transformation**, etc.

---

## 💼 Real-World Example: Counting Occurrences

```js
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
```

**Output:**

```
{ apple: 3, banana: 2, mango: 1 }
```

---

## 🧾 Real-World Example: Working with APIs (React-style)

```js
const users = [
  { name: "Rejoan", active: true },
  { name: "Tanjim", active: false },
  { name: "Rafi", active: true }
];

// Get active users’ names
const activeUsers = users
  .filter(u => u.active)
  .map(u => u.name);

console.log(activeUsers);
```

**Output:**

```
["Rejoan", "Rafi"]
```

---

Would you like me to continue with the **next related topic — "find(), findIndex(), and some()/every()"**?
These are the **next step after map/filter/reduce**, and they are also **very common in job interviews** and daily coding.
