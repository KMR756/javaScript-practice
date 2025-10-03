/*
What is `new String()`?

* Normally, a string in JS is a primitive:

 
  let str1 = "Hello"; // primitive string
  
* If you use the `new` keyword:

  
  let str2 = new String("Hello"); // String object (not primitive)
  
* Now `str2` is an object of type String, not a primitive.

---

Why does `new String()` exist?

* JavaScript has wrapper objects (`String`, `Number`, `Boolean`) that temporarily wrap primitives so you can use methods like `.length`, `.toUpperCase()`.
* Example:

  
  let str = "hello";
  console.log(str.toUpperCase()); // "HELLO"
 

  👉 Even though `str` is primitive, JS behind the scenes does:


  new String("hello").toUpperCase();
  

So, you don’t need to use `new String()` explicitly — JS does it for you.

---

## 📌 Difference in Behavior


let a = "hello";           // primitive
let b = new String("hello"); // object

console.log(typeof a); // "string"
console.log(typeof b); // "object"

console.log(a === "hello"); // true (same value)
console.log(b === "hello"); // false (object vs primitive)
console.log(b == "hello");  // true (type coercion)


---

## 📌 When to use `new String()`?

👉 Almost never in modern JS.

* It creates an object (heavier, slower).
* It can cause unexpected results in comparisons.
* Recommended: use string literals (`"..."`) instead.

---

✅ **Interview Answer (short):**

* `new String()` creates a String object, while `"text"` is a string primitive.
* JS automatically wraps primitives in String objects when needed, so you rarely need `new String()`.
* Prefer string literals for performance and cleaner code.

*/


/* 
# 📌 String – Most Common & Useful Methods

### 1. length

* Returns number of characters.


"Hello".length // 5


---

### 2. charAt(index)

* Returns character at given index.


"Hello".charAt(1) // "e"


---

### 3. indexOf(value) / lastIndexOf(value)

* Finds the index of a substring (first/last occurrence).


"Hello World".indexOf("o") // 4
"Hello World".lastIndexOf("o") // 7


---

### 4. includes(value)

* Checks if substring exists → returns `true/false`.


"Hello".includes("He") // true


---

### 5. startsWith(value) / endsWith(value)

* Checks prefix/suffix of string.


"JavaScript".startsWith("Java") // true
"JavaScript".endsWith("Script") // true


---

### 6. slice(start, end)

* Extracts part of a string.


"Hello".slice(1,4) // "ell"


---

### 7. substring(start, end)

* Similar to `slice` but doesn’t allow negatives.


"Hello".substring(1,4) // "ell"


---


### 9. toUpperCase() / toLowerCase()

* Changes case.

"hello".toUpperCase() // "HELLO"

---

### 10. trim() / trimStart() / trimEnd()

* Removes spaces.


"   hi   ".trim() // "hi"


---

### 11. split(separator)

* Splits into array.


"red,green,blue".split(",") // ["red","green","blue"]


---

### 12. replace(old, new)** / **replaceAll(old, new)

* Replaces part(s) of a string.


"Hello JS".replace("JS", "World") // "Hello World"
"aaa".replaceAll("a","b") // "bbb"


---

### 13. repeat(n)

* Repeats string.


"ha".repeat(3) // "hahaha"


---

### 14. padStart(length, padStr) / padEnd(length, padStr)

* Pads string to given length.


"5".padStart(3, "0") // "005"


---

### 15. match(regexp) / matchAll(regexp) / search(regexp)

* Used with regex for advanced search.

```js
"Hello123".match(/\d+/) // ["123"]
```

---

#  **Interview Notes**

👉 **Primitive vs Object String:**

* Strings are primitive, but when calling methods, JS wraps them into a String object temporarily.

👉 String immutability:

* Strings are immutable in JS. Methods return a new string, original doesn’t change.


let s = "Hello";
s.toUpperCase(); 
console.log(s); // "Hello" ✅ (unchanged)


👉 **Common Interview Qs:**

1. How do you reverse a string in JS?

   
   "hello".split("").reverse().join(""); // "olleh"
   

2. Check if string is palindrome?

   
   const isPal = str => str === str.split("").reverse().join("");
   isPal("madam") // true
  

3. Difference between `slice`, `substring`, `substr`?

   * `slice` → allows negative indexes.
   * `substring` → doesn’t allow negatives.
   * `substr` → uses length (deprecated).

4. Why are strings immutable in JS?
   👉 For performance & security — ensures original value doesn’t change unexpectedly.

---

In real development, the most used are:
`length, includes, indexOf, slice, substring, toUpperCase, toLowerCase, trim, split, replace/replaceAll, startsWith/endsWith`.

*/