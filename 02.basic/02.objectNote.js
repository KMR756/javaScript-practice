

# 🧠 JavaScript Objects — Full Developer & Interview Notes

---

## 🔹 What is an Object?

An **object** is a **collection of key–value pairs**.
Keys are called **properties** (or methods if the value is a function).

```js
let person = {
  name: "Rejoan",
  age: 22,
  country: "Bangladesh"
};
```

* `name`, `age`, `country` → keys (or property names)
* `"Rejoan"`, `22`, `"Bangladesh"` → values

---

## 🔹 Accessing Object Properties

### 1. **Dot Notation (.)**

Used when the property name is a valid JavaScript identifier (no spaces or special characters).

```js
console.log(person.name);  // "Rejoan"
console.log(person.age);   // 22
```

### 2. **Bracket Notation ([])**

Used when:

* The key is stored in a variable
* The key has spaces or special characters

```js
let key = "country";
console.log(person[key]); // "Bangladesh"

let car = { "car name": "Toyota" };
console.log(car["car name"]); // "Toyota"
```

💡 **Tip:** Dot notation is faster and more readable.
Use bracket notation only when needed.

---

## 🔹 Adding / Updating / Deleting Properties

```js
let user = {};
user.name = "Alice";         // add
user.age = 25;               // add
user.age = 26;               // update
delete user.age;             // delete
```

---

## 🔹 Nested Objects

Objects can hold other objects or arrays inside them.

```js
let student = {
  name: "Rejoan",
  marks: {
    math: 90,
    english: 85
  }
};

console.log(student.marks.math); // 90
```

---

## 🔹 Objects Inside Arrays

Common real-world data format (e.g., API responses):

```js
let users = [
  { id: 1, name: "Rejoan" },
  { id: 2, name: "Tanjim" }
];

console.log(users[0].name); // "Rejoan"
```

You can loop through:

```js
users.forEach(u => console.log(u.name));
```

---

## 🔹 Array Inside Objects

```js
let company = {
  name: "TechSoft",
  employees: ["Rejoan", "Tanjim", "Sabbir"]
};

console.log(company.employees[1]); // "Tanjim"
```

---

## 🔹 Object Methods (Functions Inside Objects)

When a function is stored in an object, it’s called a **method**.

```js
let person = {
  name: "Rejoan",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // "Hello, Rejoan"
```

---

## 🔹 `this` Keyword in Objects

### ➤ Definition:

`this` refers to the **object that owns the current function**.

```js
let user = {
  name: "Rejoan",
  show() {
    console.log(this.name);
  }
};
user.show(); // "Rejoan"
```

### ⚠️ In Arrow Functions

Arrow functions **don’t have their own `this`**,
they take `this` from their **parent scope**.

```js
let user = {
  name: "Rejoan",
  show: () => console.log(this.name)
};
user.show(); // undefined
```

---

## 🔹 Looping Through Objects

### 1. **for...in**

Iterates over keys.

```js
let user = { name: "Rejoan", age: 22 };
for (let key in user) {
  console.log(key, user[key]);
}
```

### 2. **Object.keys(), Object.values(), Object.entries()**

Convert object into arrays — very common in modern code.

```js
let user = { name: "Rejoan", age: 22 };

console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Rejoan", 22]
console.log(Object.entries(user));// [["name","Rejoan"],["age",22]]
```

Example of looping entries:

```js
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

---

## 🔹 Object Destructuring

Easily extract values from objects.

```js
let person = { name: "Rejoan", age: 22 };
let { name, age } = person;
console.log(name); // "Rejoan"
console.log(age);  // 22
```

Renaming while destructuring:

```js
let { name: userName } = person;
console.log(userName); // "Rejoan"
```

---

## 🔹 Spread and Rest with Objects

### ➤ Spread (`...`) — copy or merge objects

```js
let user = { name: "Rejoan", age: 22 };
let updated = { ...user, country: "Bangladesh" };
console.log(updated);
// { name: "Rejoan", age: 22, country: "Bangladesh" }
```

### ➤ Rest (`...`) — extract remaining properties

```js
let { name, ...rest } = updated;
console.log(rest); // { age: 22, country: "Bangladesh" }
```

---

## 🔹 Object.assign()

Used to **copy properties** from one or more objects to another.

```js
let a = { name: "Rejoan" };
let b = { age: 22 };
let merged = Object.assign({}, a, b);
console.log(merged); // { name: "Rejoan", age: 22 }
```

---

## 🔹 Symbols in Objects

### ➤ Definition:

A **Symbol** is a unique identifier (no two symbols are ever the same).
Used to create **hidden or special object keys**.

```js
let id = Symbol("id");
let user = {
  name: "Rejoan",
  [id]: 123
};

console.log(user[id]); // 123
console.log(Object.keys(user)); // ["name"] — symbol is hidden
```

---

## 🔹 Comparing Objects

Objects are **reference types**, not value types.

```js
let a = { x: 1 };
let b = { x: 1 };
console.log(a === b); // false (different memory)
```

They are equal **only if they reference the same object**:

```js
let c = a;
console.log(a === c); // true
```

---

## 🔹 JSON and Objects

Convert between object and JSON (for APIs or storage):

```js
let user = { name: "Rejoan", age: 22 };
let json = JSON.stringify(user);
console.log(json); // '{"name":"Rejoan","age":22}'

let parsed = JSON.parse(json);
console.log(parsed.name); // "Rejoan"
```

---

# 💼 Real-World Use Examples

### 1. Managing API Data

```js
let response = [
  { id: 1, name: "Rejoan" },
  { id: 2, name: "Tanjim" }
];

let names = response.map(user => user.name);
console.log(names); // ["Rejoan", "Tanjim"]
```

### 2. Updating a Record

```js
let user = { id: 1, name: "Rejoan", age: 22 };
let updatedUser = { ...user, age: 23 }; // update age
```

### 3. Filtering Objects

```js
let users = [
  { name: "Rejoan", active: true },
  { name: "Tanjim", active: false }
];

let activeUsers = users.filter(u => u.active);
console.log(activeUsers);
// [{ name: "Rejoan", active: true }]
```

---

# 🎯 Most Asked Interview Questions on Objects

1. **What is the difference between dot and bracket notation?**

   * Dot → used for simple, valid identifiers.
   * Bracket → used for dynamic keys or keys with spaces/special chars.

2. **What is the `this` keyword in objects?**

   * Refers to the object calling the method.

3. **Difference between shallow and deep copy of an object?**

   * `Object.assign()` or spread (`...`) → shallow copy (nested objects not copied deeply).
   * Deep copy → use structuredClone(obj) or JSON methods.

4. **How to merge two objects?**

   ```js
   {...obj1, ...obj2}
   // or
   Object.assign({}, obj1, obj2);
   ```

5. **How to check if an object has a property?**

   ```js
   obj.hasOwnProperty('key');
   // or
   'key' in obj;
   ```

6. **Why is `this` undefined in arrow functions?**

   * Because arrow functions don’t bind their own `this`.

7. **How to loop over all keys and values in an object?**

   ```js
   Object.entries(obj).forEach(([key, value]) => console.log(key, value));
   ```

8. **What’s the difference between `==` and `===` when comparing objects?**

   * Both compare references; so even if contents are same, different references → false.

9. **How to make object keys unique?**

   * Use `Symbol()` as the key.

10. **How to freeze or lock an object?**

```js
Object.freeze(obj); // prevents modifications
Object.seal(obj);   // allows modify, but not add/remove keys
```


