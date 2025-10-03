let myDate = new Date()
console.log(myDate.toString());


/*


# 📌 **JavaScript `Date` – Common Methods & Notes**

⚡ `Date` is a **built-in object** for handling **date & time**.

```js
let now = new Date();      // current date & time
let birthday = new Date("1995-10-04"); // specific date
```

---

## 🔑 Most Used Date Methods

### **1. Get Components**

* `getFullYear()` → 4-digit year
* `getMonth()` → month (0–11)
* `getDate()` → day of month (1–31)
* `getDay()` → day of week (0–Sunday … 6–Saturday)
* `getHours(), getMinutes(), getSeconds(), getMilliseconds()`

```js
let now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth());    // 9 (October, 0-based)
console.log(now.getDate());     // 4
```

---

### **2. Set Components**

* `setFullYear(year)`, `setMonth(month)`, `setDate(day)` …

```js
let d = new Date();
d.setFullYear(2020);
console.log(d);
```

---

### **3. Time Methods**

* `getTime()` → milliseconds since 1 Jan 1970 (UNIX timestamp)
* `Date.now()` → current timestamp in ms

```js
console.log(Date.now());       // 1700000000000
console.log(new Date().getTime());
```

---

### **4. UTC Methods**

* `getUTCFullYear(), getUTCMonth(), getUTCDay() …`
* Useful for working in **timezone-independent** format.

---

### **5. Converting Date to String**

* `toDateString()` → "Fri Oct 04 2025"
* `toTimeString()` → "00:00:00 GMT+0600"
* `toISOString()` → "2025-10-04T00:00:00.000Z"
* `toLocaleDateString()` → locale-based date
* `toLocaleTimeString()` → locale-based time

```js
let now = new Date();
console.log(now.toDateString());
console.log(now.toISOString());
```

---

### **6. Parsing & Creating**

* `Date.parse("2025-10-04")` → timestamp
* `new Date(timestamp)` → convert timestamp to Date

```js
let ts = Date.parse("2025-10-04");
let d = new Date(ts);
console.log(d);
```

---

### **7. Comparing Dates**

```js
let d1 = new Date("2025-10-04");
let d2 = new Date("2023-01-01");
console.log(d1 > d2);  // true
console.log(d1 - d2);  // difference in milliseconds
```

---

# ⚡ **Interview Notes**

* `Date` object **stores time in milliseconds internally**.
* Months are **0-based** (Jan = 0, Dec = 11).
* Always use `getTime()` for **accurate comparisons**.
* **Immutable:** Calling `getFullYear()` or `toString()` does not change original Date.
* Convert to **ISO or locale string** for display.

---

# ✅ **Most Used in Development**

* `new Date()`, `getFullYear()`, `getMonth()`, `getDate()`
* `getTime()`, `Date.now()`
* `toISOString()`, `toLocaleDateString()`
* `setFullYear()`, `setMonth()`, `setDate()`



 */