const score = 4000
const balance = new Number(100)
// console.log(balance);
// console.log(score);


/*

# 📌 **Number – Commonly Used Properties & Methods**

---

### 1. `constructo

* Points to the `Number` function that created the object. Rarely used directly.

---

### 2. `toExponential(digits)`

* Converts number to exponential (scientific) notation.

```js
let num = 1234;
console.log(num.toExponential(2)); // "1.23e+3"
```

---

### 3. `toFixed(digits)`

* Formats number to fixed decimal places.

```js
let pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"
```

👉 Useful in money/price formatting.

---

### 4. `toLocaleString(locale, options)`

* Formats number based on locale (e.g. commas, currency).

```js
let n = 1234567.89;
console.log(n.toLocaleString("en-US")); // "1,234,567.89"
console.log(n.toLocaleString("en-IN")); // "12,34,567.89"
console.log(n.toLocaleString("en-US", { style: "currency", currency: "USD" }));
// "$1,234,567.89"
```

---

### 5. `toPrecision(digits)`

* Formats number to a specified total number of digits.

```js
let x = 123.456;
console.log(x.toPrecision(4)); // "123.5"
console.log(x.toPrecision(2)); // "1.2e+2"
```

---

### 6. `toString(base)`

* Converts number to string (optionally in another base).

```js
let n = 255;
console.log(n.toString());   // "255"
console.log(n.toString(2));  // "11111111" (binary)
console.log(n.toString(16)); // "ff" (hex)
```

---

### 7. `valueOf()`

* Returns the primitive number value from a Number object.

```js
let numObj = new Number(100);
console.log(numObj.valueOf()); // 100
```

---

# 📌 Number Static Properties (Interview-Worthy)

* `Number.MAX_VALUE` → Largest possible number.
* `Number.MIN_VALUE` → Smallest positive number.
* `Number.POSITIVE_INFINITY` / `Number.NEGATIVE_INFINITY`.
* `Number.NaN` → Special "Not a Number" value.

---

# ⚡ **Interview Notes**

* Primitive vs Object Number:

  ```js
  let a = 10;              // primitive
  let b = new Number(10);  // Number object
  console.log(typeof a);   // "number"
  console.log(typeof b);   // "object"
  ```

* `NaN` is special:

  * Type of `NaN` is `"number"`.
  * `NaN !== NaN` (always false). Use `Number.isNaN()` to check.

* Common interview Qs:

  1. How to check if a value is a number?

     ```js
     Number.isFinite(10);  // true
     Number.isNaN("abc");  // false
     isNaN("abc");         // true (loose check, less safe)
     ```
  2. Difference between `parseInt`, `parseFloat`, `Number()`?

     * `parseInt("10.5") → 10`
     * `parseFloat("10.5") → 10.5`
     * `Number("10.5") → 10.5` (stricter)

---

✅ Most used in real development:
`toFixed(), toLocaleString(), toString(), parseInt(), parseFloat(), Number.isNaN(), Number.isFinite()`

---

*/



// +++++++++++++++++++++++++++++ MATH ++++++++++++++++

// console.log(Math);

/*


# 📌 **JavaScript `Math` Object – Common Methods & Constants**

⚡ `Math` is a built-in static object → you don’t use `new Math()`.
It provides constants & functions for mathematical operations.

---

## 🔢 Math Constants

* `Math.PI` → π = `3.14159…`
* `Math.E` → Euler’s number = `2.718…`
* `Math.SQRT2` → √2 = `1.414…`
* `Math.SQRT1_2` → 1 / √2 = `0.707…`
* `Math.LN2` → ln(2)
* `Math.LN10` → ln(10)
* `Math.LOG2E` → log2(e)
* `Math.LOG10E` → log10(e)

👉 Usually PI, E, SQRT2 are the most common in development.

---

## 🔑 Most Used Math Methods

### 1. Rounding

* `Math.round(x)` → Nearest integer.

  ```js
  Math.round(4.6); // 5
  ```
* `Math.ceil(x)` → Always rounds UP.

  ```js
  Math.ceil(4.1); // 5
  ```
* `Math.floor(x)` → Always rounds DOWN.

  ```js
  Math.floor(4.9); // 4
  ```
* `Math.trunc(x)` → Removes decimal part.

  ```js
  Math.trunc(4.9); // 4
  ```

---

### 2. Absolute & Sign

* `Math.abs(x)` → Absolute value.

  ```js
  Math.abs(-5); // 5
  ```
* `Math.sign(x)` → Returns `-1, 0, or 1`.

  ```js
  Math.sign(-7); // -1
  ```

---

### 3. Power & Roots

* `Math.pow(base, exp)` → Exponentiation.

  ```js
  Math.pow(2, 3); // 8
  ```
* `Math.sqrt(x)` → Square root.

  ```js
  Math.sqrt(16); // 4
  ```
* `Math.cbrt(x)` → Cube root.

  ```js
  Math.cbrt(27); // 3
  ```

---

### 4. Random Numbers

* `Math.random()` → Random float `0 ≤ x < 1`.
* Example: random integer between `min` and `max`:

  ```js
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandom(1, 10); // random int 1–10
  ```

---

### 5. Min & Max

* `Math.max(...nums)` → Largest.
* `Math.min(...nums)` → Smallest.

```js
Math.max(1, 9, 3); // 9
Math.min(1, 9, 3); // 1
```

---

### 6. Logs & Exponentials (interview-heavy)

* `Math.log(x)` → Natural log (base e).
* `Math.log2(x)` → Log base 2.
* `Math.log10(x)` → Log base 10.
* `Math.exp(x)` → e^x.

---

### 7. Trigonometry (useful but less common)

* `Math.sin(x), Math.cos(x), Math.tan(x)` → Input in radians.

```js
Math.sin(Math.PI / 2); // 1
```

---

# ⚡ Interview Notes

* `Math.random()` always returns between 0 and 1.
* `Math.floor()` vs `Math.trunc()` → difference for negatives:

  ```js
  Math.floor(-4.7); // -5
  Math.trunc(-4.7); // -4
  ```
* `Math.pow(x,y)` is same as `x ** y`.
* `NaN` inside Math functions → many return `NaN` (e.g. `Math.sqrt(-1)`).

---

# ✅ Most Used in Real Development

`Math.round(), ceil(), floor(), trunc(), abs(), max(), min(), random(), pow(), sqrt(), PI`.


*/


// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10)) + 1);


const min = 0;
const max = 6;

// console.log(Math.floor(Math.random()*(max-min)+1)+ min);
// console.log(Math.floor(Math.random()*10000000));
