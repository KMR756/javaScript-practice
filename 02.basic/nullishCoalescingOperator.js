Excellent — this is an important modern JavaScript concept (added in **ES2020**) that often appears in **interviews** and is used **every day** in real-world projects (especially in React and Node.js).

Let’s go step-by-step 👇

---

# ⚙️ Nullish Coalescing Operator (`??`) — Complete Explanation

---

## 🔹 1️⃣ Definition

The **Nullish Coalescing Operator (`??`)** is used to provide a **default value** when a variable is **`null`** or **`undefined`**.

> It checks specifically for **`null`** and **`undefined`** — not other falsy values like `0`, `false`, or `""`.

---

### ✅ Syntax:

```js
let result = value1 ?? value2;
```

✅ Meaning:

* If `value1` is **not null or undefined**, return `value1`.
* Otherwise, return `value2`.

---

## 🔹 2️⃣ Simple Example

```js
let userName = null;
let defaultName = "Guest";

let name = userName ?? defaultName;

console.log(name); // "Guest"
```

✔️ Because `userName` is `null`, JS uses the value on the right side → `"Guest"`.

---

## 🔹 3️⃣ Difference Between `??` and `||`

This is **very important** — and one of the most asked interview questions.

| Operator       | Checks for                 | Behavior                                |                                                                 |                                    |
| -------------- | -------------------------- | --------------------------------------- | --------------------------------------------------------------- | ---------------------------------- |
| `              |                            | ` (OR)                                  | *Falsy values* (`false`, `0`, `""`, `null`, `undefined`, `NaN`) | Returns the **first truthy** value |
| `??` (Nullish) | Only `null` or `undefined` | Returns the **first non-nullish** value |                                                                 |                                    |

---

### ✅ Example Comparison

```js
let value1 = 0;
let result1 = value1 || 100;
let result2 = value1 ?? 100;

console.log(result1); // 100   (because 0 is falsy)
console.log(result2); // 0     (because 0 is not null/undefined)
```

✔️ `||` treats `0` as false.
✔️ `??` only treats `null` or `undefined` as “missing”.

---

## 🔹 4️⃣ Real-World Examples

### 🧩 Example 1: User settings fallback

```js
let userVolume = 0;
let defaultVolume = 50;

// If we used ||, this would wrongly return 50
let finalVolume = userVolume ?? defaultVolume;

console.log(finalVolume); // 0 ✅ correct
```

### 🧩 Example 2: API data check

```js
let user = { name: null };
let displayName = user.name ?? "Anonymous";
console.log(displayName); // "Anonymous"
```

### 🧩 Example 3: Function parameter defaults

```js
function greet(name) {
  let finalName = name ?? "Guest";
  console.log(`Hello, ${finalName}!`);
}

greet("Rejoan"); // Hello, Rejoan!
greet(null);     // Hello, Guest!
```

---

## 🔹 5️⃣ Using with Optional Chaining (`?.`)

Optional chaining and nullish coalescing often go together.

```js
let user = {
  profile: {
    name: "Rejoan"
  }
};

let username = user?.profile?.name ?? "Guest";
console.log(username); // "Rejoan"
```

If any property in the chain is `undefined`, it won’t crash — `??` provides the default.

---

## 🔹 6️⃣ Operator Precedence (Parentheses ⚠️)

`??` has **lower precedence** than most operators (like `+`, `*`, etc.),
so sometimes you must use **parentheses**.

Example:

```js
let x = (a + b) ?? 10;
```

And you **can’t mix `??` with `||` or `&&` directly** without parentheses:

```js
// ❌ SyntaxError
let x = value || value2 ?? "default";

// ✅ Correct
let x = (value || value2) ?? "default";
```

---

## 🔹 7️⃣ Interview Questions

| Question                                 | Example / Concept | Answer                                                                 |                |                           |    |                   |   |                      |
| ---------------------------------------- | ----------------- | ---------------------------------------------------------------------- | -------------- | ------------------------- | -- | ----------------- | - | -------------------- |
| What is the nullish coalescing operator? | `??`              | It returns the right-hand value only if the left is null or undefined. |                |                           |    |                   |   |                      |
| What’s the difference between `??` and ` |                   | `?                                                                     | `0 ?? 5` vs `0 |                           | 5` | `??` ignores 0, ` |   | ` treats 0 as false. |
| What does `null ?? "Default"` return?    | —                 | `"Default"`                                                            |                |                           |    |                   |   |                      |
| What does `0 ?? "Default"` return?       | —                 | `0`                                                                    |                |                           |    |                   |   |                      |
| Can you mix `??` with `                  |                   | `or`&&` directly?                                                      | —              | No, must use parentheses. |    |                   |   |                      |
| When was `??` introduced?                | —                 | ES2020 (ECMAScript 11).                                                |                |                           |    |                   |   |                      |

---

## 🔹 8️⃣ Summary Table

| Operator | Returns                 | Checks for                  |                    |                                                                   |
| -------- | ----------------------- | --------------------------- | ------------------ | ----------------------------------------------------------------- |
| `        |                         | `                           | First truthy value | All falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`) |
| `??`     | First non-nullish value | Only `null` and `undefined` |                    |                                                                   |

---

## ✅ Real-World Usage Tips

* Use `??` for **safe default values** without breaking valid falsy data like `0` or `false`.
* Common in React:

  ```js
  const username = user.name ?? "Guest";
  ```
* Often combined with optional chaining:

  ```js
  const email = user?.contact?.email ?? "Not provided";
  ```
* Don’t mix `??` with `||` or `&&` without parentheses.

---

Would you like me to give you the **next concept — Short-Circuit Evaluation (`&&`, `||`, and `??` combined)**?
It ties everything together and is heavily used in **React conditional rendering** and **Node.js logic flows**.
