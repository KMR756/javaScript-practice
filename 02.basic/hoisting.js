Excellent question — **hoisting** is one of the *most misunderstood* but *most important* JavaScript concepts.

Here’s a **complete, real-world + interview-focused explanation** for you 👇

---

# ⚙️ JavaScript Hoisting — Complete Notes (Interview + Real-World)

---

## 🔹 1️⃣ What Is Hoisting?

**Hoisting** is JavaScript’s default behavior of **moving declarations to the top of their scope** (before code execution).

> In simple words:
> **You can use variables and functions before they’re declared** — because JS “hoists” the declarations to the top during the *creation phase*.

---

## 🔹 2️⃣ How Hoisting Works (Behind the Scenes)

When JavaScript runs your code, it does it in **two phases**:

1. **Creation Phase** — memory is allocated for variables and functions.

   * Variables are initialized as `undefined`.
   * Function declarations are fully hoisted (code too).
2. **Execution Phase** — the code runs line by line.

---

## 🔹 3️⃣ Example: Variable Hoisting (with `var`)

```js
console.log(a); // undefined
var a = 10;
```

✅ Why no error?
Because JS interprets it like this:

```js
var a;
console.log(a); // undefined
a = 10;
```

Only the **declaration** is hoisted, not the **assignment**.

---

## 🔹 4️⃣ `let` and `const` Hoisting (Temporal Dead Zone)

```js
console.log(x); // ❌ ReferenceError
let x = 5;
```

✅ `let` and `const` are **also hoisted**,
but they are kept in a **Temporal Dead Zone (TDZ)** until the code reaches their declaration line.

So, you **cannot access** them before declaration.

---

### TDZ Example

```js
{
  console.log(msg); // ❌ ReferenceError
  const msg = "Hello!";
}
```

The variable exists in memory but is **not accessible** before its line of declaration.

---

## 🔹 5️⃣ Function Hoisting

### Function Declaration (Hoisted ✅)

```js
greet(); // ✅ Works
function greet() {
  console.log("Hello Rejoan");
}
```

✅ Function declarations are fully hoisted (both name and body).

---

### Function Expression (Not Hoisted ❌)

```js
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};
```

✅ JS hoists the **variable declaration** (`sayHi`) but not the function definition.
So during execution, `sayHi` is `undefined` at first.

---

### Arrow Function (Not Hoisted ❌)

```js
hello(); // ❌ Cannot access 'hello' before initialization
const hello = () => console.log("Hello!");
```

✅ Same as function expressions — **not hoisted**.

---

## 🔹 6️⃣ Real-World Example

If you use variables before declaring them, you might face unexpected behavior:

```js
function getUser() {
  console.log(user); // undefined
  var user = "Rejoan";
}
getUser();
```

✅ JS interprets it as:

```js
function getUser() {
  var user;
  console.log(user);
  user = "Rejoan";
}
```

That’s why you get `undefined`, not `ReferenceError`.

---

## 🔹 7️⃣ Best Practice in Real Projects

✅ Always **declare variables and functions at the top** of their scope.
✅ Use `let` and `const` (they respect block scope and avoid hoisting issues).
✅ Avoid relying on hoisting — it reduces code clarity.

---

## 🔹 8️⃣ Hoisting in Classes (Important for Interviews)

```js
const obj = new Person(); // ❌ ReferenceError
class Person {
  constructor() {
    console.log("Person created");
  }
}
```

✅ Classes are **not hoisted**, and they also have a **temporal dead zone**.

---

## 🔹 9️⃣ Hoisting Summary Table

| Keyword / Type       | Hoisted?    | Initialized as             | Accessible before declaration? |
| -------------------- | ----------- | -------------------------- | ------------------------------ |
| `var`                | ✅ Yes       | `undefined`                | ✅ Yes (undefined)              |
| `let`                | ✅ Yes       | Uninitialized (TDZ)        | ❌ No                           |
| `const`              | ✅ Yes       | Uninitialized (TDZ)        | ❌ No                           |
| Function Declaration | ✅ Fully     | Function itself            | ✅ Yes                          |
| Function Expression  | ❌ No        | Depends on `var/let/const` | ❌ No                           |
| Arrow Function       | ❌ No        | Depends on `var/let/const` | ❌ No                           |
| Class                | ✅ (but TDZ) | Uninitialized              | ❌ No                           |

---

## 🔹 10️⃣ Common Interview Questions

1. What is **hoisting** in JavaScript?
2. Are variables and functions hoisted differently?
3. What is the **Temporal Dead Zone (TDZ)**?
4. Does hoisting occur for `let` and `const`?
5. What happens when you call a function expression before defining it?
6. Are **arrow functions** hoisted?
7. Is **class declaration** hoisted?
8. What is the **output** of:

   ```js
   console.log(a);
   var a = 5;
   console.log(b);
   let b = 10;
   ```

   → Output: `undefined` then `ReferenceError`.

---

## 🔹 11️⃣ In One Line (Simple Definition)

> **Hoisting** = JS moves variable and function **declarations** to the top of their scope before execution.
> But **initializations** stay in place.

---

## ✅ Real-World Advice

* Always **declare variables first**.
* Prefer `const` and `let` over `var`.
* Do not depend on hoisting — write clean, top-down code.
* Remember: **functions hoist fully**, but **variables only partially**.

---

Would you like me to give you the **next complete note on “Execution Context & Call Stack”**?
It’s the **core concept** behind how hoisting, scope, and closures actually *work* — and one of the **top 5 JS interview questions**.
