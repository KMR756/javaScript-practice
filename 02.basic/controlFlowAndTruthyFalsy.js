Perfect — this is the **next logical step** in mastering JavaScript fundamentals.
Let’s go over **Control Flow**, **Truthy**, and **Falsy** values — all in one clear, interview-ready, and real-world–focused note 👇

---

# ⚙️ JavaScript Control Flow + Truthy & Falsy Values

---

## 🔹 1️⃣ What Is Control Flow?

**Control Flow** means **the order in which your code is executed**.

By default, JavaScript executes code **line by line** — from **top to bottom**.
But we can **control** that order using **conditional statements**, **loops**, and **functions**.

---

## 🔹 2️⃣ Why We Use Control Flow

We use control flow to make **decisions** in code, like:

* Running some code **only if a condition is true**
* Repeating actions (**loops**)
* Stopping execution (**break**, **return**)
* Handling multiple cases (**switch**)

---

## 🔹 3️⃣ Basic Control Flow Statements

### ✅ `if` statement

```js
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
}
```

✔️ Runs only if the condition is true.

---

### ✅ `if...else`

```js
let age = 16;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

### ✅ `if...else if...else`

```js
let marks = 75;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("B");
} else {
  console.log("Fail");
}
```

---

### ✅ `switch` statement

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Work day");
    break;
  case "Saturday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}
```

✔️ Used when you have multiple possible values for a variable.

---

### ✅ Loops (control repetition)

**For loop**

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**While loop**

```js
let i = 0;
while (i < 3) {
  console.log("Hello");
  i++;
}
```

**Do-while loop**

```js
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);
```

---

### ✅ `break` and `continue`

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // stops the loop
  console.log(i);
}
// Output: 1, 2
```

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips 3
  console.log(i);
}
// Output: 1, 2, 4, 5
```

---

### ✅ `return`

Stops execution of a function and optionally returns a value:

```js
function add(a, b) {
  return a + b;
  console.log("Never runs"); // unreachable
}
console.log(add(3, 4)); // 7
```

---

## 🔹 4️⃣ Truthy & Falsy Values in JS

### 🧩 What Are They?

Every value in JavaScript is **either truthy or falsy**
when evaluated in a Boolean context (like in `if` conditions).

---

### ✅ Falsy Values (only **7** total!)

These are values that behave like `false` when converted to a boolean.

| Value        | Description   |
| ------------ | ------------- |
| `false`      | literal false |
| `0`          | zero          |
| `-0`         | negative zero |
| `""` or `''` | empty string  |
| `null`       | nothing       |
| `undefined`  | not defined   |
| `NaN`        | Not a Number  |

Example:

```js
if (0) console.log("True"); // ❌ won't run
if ("") console.log("True"); // ❌ won't run
if (undefined) console.log("True"); // ❌ won't run
```

---

### ✅ Truthy Values

Anything **not falsy** is truthy.

Examples:

```js
if (1) console.log("True"); // ✅
if ("hello") console.log("True"); // ✅
if ([]) console.log("True"); // ✅
if ({}) console.log("True"); // ✅
if ("0") console.log("True"); // ✅ (string with 0)
```

---

### 🧠 Common Confusion Points

| Value       | Boolean() Result | Notes                      |
| ----------- | ---------------- | -------------------------- |
| `[]`        | true             | Empty array is truthy      |
| `{}`        | true             | Empty object is truthy     |
| `"0"`       | true             | Non-empty string is truthy |
| `0`         | false            | Number zero is falsy       |
| `null`      | false            | Falsy                      |
| `undefined` | false            | Falsy                      |

---

## 🔹 5️⃣ Real-World Examples

### Example 1 — Input validation

```js
let username = "";

if (!username) {
  console.log("Please enter your username");
}
```

✅ Works because `""` is falsy.

---

### Example 2 — Default values

```js
let input = "";
let result = input || "Default Value";
console.log(result); // "Default Value"
```

✅ The `||` operator uses truthy/falsy evaluation — returns the first truthy value.

---

### Example 3 — Optional properties

```js
let user = { name: "Rejoan" };
console.log(user.age || "Age not provided");
```

✅ If `user.age` is `undefined` (falsy), `"Age not provided"` is printed.

---

## 🔹 6️⃣ Interview-Focused Questions

| Question                                       | Example / Concept                          | Answer                                                              |      |   |            |                         |
| ---------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------- | ---- | - | ---------- | ----------------------- |
| What is control flow in JS?                    | —                                          | The order in which code executes (top-to-bottom unless controlled). |      |   |            |                         |
| What are truthy and falsy values?              | —                                          | Values that evaluate to true/false in Boolean context.              |      |   |            |                         |
| How many falsy values are in JS?               | —                                          | Exactly 7.                                                          |      |   |            |                         |
| Is an empty array `[]` truthy or falsy?        | `if ([])`                                  | Truthy                                                              |      |   |            |                         |
| Is an empty string `""` truthy or falsy?       | —                                          | Falsy                                                               |      |   |            |                         |
| What does the `                                |                                            | ` operator return?                                                  | `" " |   | "Default"` | The first truthy value. |
| What does the `&&` operator return?            | `"Hi" && "There"`                          | The last value if both are truthy.                                  |      |   |            |                         |
| What is the difference between `==` and `===`? | `0 == false` → true, `0 === false` → false | `==` does type coercion, `===` does not.                            |      |   |            |                         |

---

## 🔹 7️⃣ Summary Table

| Concept       | Description                              | Example                                |                            |    |   |    |
| ------------- | ---------------------------------------- | -------------------------------------- | -------------------------- | -- | - | -- |
| Control Flow  | Determines code execution order          | if, switch, loops                      |                            |    |   |    |
| Falsy Values  | 7 values that evaluate as false          | 0, "", false, null, undefined, NaN, -0 |                            |    |   |    |
| Truthy Values | All other values                         | "hello", [], {}, 1                     |                            |    |   |    |
| `             |                                          | `                                      | Returns first truthy value | `a |   | b` |
| `&&`          | Returns last truthy value or first falsy | `a && b`                               |                            |    |   |    |

---

## ✅ Real-World Advice

* Use **truthy/falsy checks** for cleaner code.
* Always remember: `[]` and `{}` are **truthy**, even if empty.
* For strict checks, use `===` instead of `==`.
* Combine control flow + truthy checks for robust input validation.

---

Would you like me to continue next with **“Short-Circuit Evaluation & Logical Operators (&&, ||, ??)”** — since it’s the *next step after truthy/falsy* and heavily used in real-world React and Node.js projects?
