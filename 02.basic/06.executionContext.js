Excellent — this is one of the **most advanced and most asked JavaScript interview topics**.
Understanding **Execution Context (EC)** helps you truly understand **hoisting, scope, closures, and the call stack**.

Here’s your **complete, real-world + interview-focused note** on this topic 👇

---

# ⚙️ JavaScript Execution Context — Complete Notes (Interview + Real-World)

---

## 🔹 1️⃣ What is an Execution Context?

**Execution Context (EC)** is the environment in which your JavaScript code is **evaluated and executed**.

It contains information about:

* Which **variables** are in scope
* Which **functions** are available
* The value of the **`this`** keyword
* And how the **code is executed**

> Think of it as the *“container”* or *“box”* where your code runs.

---

## 🔹 2️⃣ Types of Execution Contexts in JavaScript

JavaScript has **three** main types of Execution Contexts:

| Type                                 | Description                                                 |
| ------------------------------------ | ----------------------------------------------------------- |
| **Global Execution Context (GEC)**   | Default context when JS starts running                      |
| **Function Execution Context (FEC)** | Created each time a function is called                      |
| **Eval Execution Context**           | Created when code inside `eval()` is executed (rarely used) |

---

## 🔹 3️⃣ The Lifecycle of an Execution Context

Each Execution Context goes through **two phases**:

1. **Creation Phase**

   * JS sets up memory space.
   * Variables & functions are hoisted.
   * `this` is determined.
2. **Execution Phase**

   * Code runs line-by-line.
   * Variables get their assigned values.
   * Functions are executed.

---

## 🔹 4️⃣ Global Execution Context (GEC)

When a JS program runs for the first time, the **GEC** is created.

Example:

```js
var name = "Rejoan";
function greet() {
  console.log("Hello, " + name);
}
greet();
```

**Steps:**

1. GEC is created.
2. Memory is allocated for:

   * `name` → `undefined`
   * `greet` → function reference
3. Execution phase runs:

   * `name = "Rejoan"`
   * `greet()` is invoked → new **Function Execution Context** is created.

✅ Only **one global execution context** exists at a time.

✅ In browsers: the global object is `window`.
✅ In Node.js: the global object is `global`.

So inside GEC:

```js
this === window // true (in browser)
```

---

## 🔹 5️⃣ Function Execution Context (FEC)

Every time you **call a function**, a new **FEC** is created.

Example:

```js
function add(a, b) {
  var result = a + b;
  return result;
}

add(2, 3);
```

**When `add()` runs:**

1. JS creates a **new FEC** for that function.
2. Two phases happen inside:

   * **Creation phase**:

     * `a` → `undefined`
     * `b` → `undefined`
     * `result` → `undefined`
   * **Execution phase**:

     * `a = 2`
     * `b = 3`
     * `result = 5` → return 5

✅ Each time you call a function, a **new execution context** is created (even if it’s the same function).

✅ When the function finishes, its context is **popped off** from the call stack.

---

## 🔹 6️⃣ Eval Execution Context

The **`eval()`** function executes a string of JavaScript code and creates its own execution context.

```js
eval("var x = 10; console.log(x)");
```

✅ A new EC is created temporarily for that string of code.
⚠️ However, `eval()` is **not recommended** (security and performance issues).
Rarely used in real-world apps.

---

## 🔹 7️⃣ Call Stack (Execution Stack)

The **Call Stack** is a data structure that keeps track of all execution contexts.

When JS runs code:

1. **Global EC** is created → pushed onto the stack.
2. Each time a function is called → **new FEC** is pushed.
3. When the function finishes → **popped off**.

Example:

```js
function first() {
  console.log("Inside first");
  second();
}

function second() {
  console.log("Inside second");
}

first();
console.log("Done");
```

**Call Stack order:**

```
1. GEC created → push
2. first() called → push FEC of first
3. second() called → push FEC of second
4. second() done → pop
5. first() done → pop
6. GEC ends
```

Output:

```
Inside first
Inside second
Done
```

---

## 🔹 8️⃣ Execution Context in Memory

Each EC has **two components**:

| Component                                   | Description                                 |
| ------------------------------------------- | ------------------------------------------- |
| **Memory Component (Variable Environment)** | Stores variables, functions, and references |
| **Code Component (Thread of Execution)**    | Executes the actual code line-by-line       |

---

## 🔹 9️⃣ Example (Step-by-Step Execution)

```js
var a = 10;
function outer() {
  var b = 20;
  function inner() {
    console.log(a + b);
  }
  inner();
}
outer();
```

**Execution Flow:**

1️⃣ **Global EC created**

* Memory: `{ a: undefined, outer: function }`

2️⃣ **Global Execution Phase**

* `a = 10`
* `outer()` is called → new **FEC for outer**

3️⃣ **Outer FEC created**

* Memory: `{ b: undefined, inner: function }`
* Execution: `b = 20`, `inner()` called → new **FEC for inner**

4️⃣ **Inner FEC created**

* Memory: `{}` (no local vars)
* Execution: `console.log(a + b)`
  JS looks for `a` and `b` → found via **scope chain**

Output:

```
30
```

---

## 🔹 🔟 The Role of Lexical Scope in Execution Context

Each function has access to:

* Its own variables
* Variables in its parent function
* Global variables

This chain of environments is known as the **Scope Chain**, and it’s created **at the time of function definition**, not execution.

---

## 🔹 1️⃣1️⃣ Real-World Usage of Execution Context

* Helps you understand **how hoisting works**
* Crucial for debugging **`undefined`** and **ReferenceError**
* Explains **closures** (inner function remembers outer variables)
* Explains async behavior with **call stack & event loop**

---

## 🔹 1️⃣2️⃣ Interview-Focused Questions

1. What is an **execution context** in JavaScript?
2. What are the **types** of execution contexts?
3. What are the **two phases** of execution context creation?
4. What is the **global execution context**?
5. What is the **function execution context**?
6. What is the **call stack**, and how does it work?
7. What is the **difference** between the global and function execution context?
8. Is **eval()** execution context used in modern JS?
9. How is the **`this`** keyword set in different contexts?
10. How does execution context relate to **hoisting** and **scope**?

---

## 🔹 1️⃣3️⃣ Summary Table

| Type                | When Created       | Scope             | `this` value                            | Notes                     |
| ------------------- | ------------------ | ----------------- | --------------------------------------- | ------------------------- |
| **Global EC**       | When script starts | Global            | `window` (browser) / `global` (Node.js) | Only one per program      |
| **Function EC**     | On function call   | Local to function | Depends on call (obj, strict, etc.)     | Created per function call |
| **Eval EC**         | On `eval()` call   | Inside eval       | Depends on caller                       | Rarely used               |
| **Execution Stack** | Always active      | Tracks ECs        | N/A                                     | Works like a stack (LIFO) |

---

## ✅ Quick Recap (in Simple Words)

> * **Execution Context** = Environment where JS code runs.
> * **Global EC** = Created when your file starts running.
> * **Function EC** = Created whenever a function is called.
> * **Eval EC** = Rare, created for `eval()` execution.
> * Each EC goes through **creation** (hoisting) and **execution** phases.
> * Managed by the **Call Stack**.

---

Would you like me to continue the series with the **next major concept: “Closures & Lexical Environment”**?
That’s the natural next step after *Execution Context*, and it’s one of the **top 3 most asked JS interview topics**.
