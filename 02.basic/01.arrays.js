// Definition of an Array (JavaScript)

// An array is a special type of object in JavaScript used to store multiple values in a single variable.
// These values are stored in an ordered list, and each item in the list is called an element.
// Each element has an index number (starting from 0).



//  Example:


// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]); // "apple"
// console.log(fruits[2]); // "mango"


// Here, `fruits` is an array containing 3 elements.
// Indexes → `apple (0)`, `banana (1)`, `mango (2)`

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Key Points:

// 1. Arrays can store different data types:

   
//    let mix = ["text", 25, true, { name: "Rejoan" }];
   
// 2. Arrays in JavaScript are dynamic — you can add or remove items anytime.

// 3. The length property shows the total number of elements:

//       let arr = [10, 20, 30];
//    console.log(arr.length); // 3
   
// 4. Arrays are zero-indexed, meaning counting starts from `0`.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Short Definition (for exams or interviews):

// > An array in JavaScript is a data structure that stores a collection of elements (values or objects) in an ordered sequence, where each element is accessed using a numeric index starting from 0.


// +++++++++++++++++++++++++++++++ Array methods +++++++++++++++++++++++++++++++++++++++++

/*

1. push()

Adds elements to the end of an array.
Returns the new length of the array.


let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

2. pop()

Removes the last element from an array.
Returns the removed element.


let fruits = ["apple", "banana", "mango"];
let last = fruits.pop();
console.log(last);    // "mango"
console.log(fruits);  // ["apple", "banana"]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

3. unshift()

Adds elements at the beginning of an array.


let nums = [2, 3, 4];
nums.unshift(1);
console.log(nums); // [1, 2, 3, 4]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

4. `shift()`

Removes the first element of an array.


let nums = [1, 2, 3, 4];
nums.shift();
console.log(nums); // [2, 3, 4]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

5. includes()

Checks whether a value exists in an array (returns `true` or `false`).


let colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.includes("yellow")); // false


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

6. indexOf()

Returns the index of the first match of a value (or `-1` if not found).


let colors = ["red", "green", "blue"];
console.log(colors.indexOf("green")); // 1


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

7. join()

Joins all elements into a string.


let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

8. slice()

Returns a portion of the array without changing it.


let nums = [1, 2, 3, 4, 5];
let part = nums.slice(1, 4);
console.log(part); // [2, 3, 4]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

9. splice()

Adds or removes elements from an array (changes the original).


let nums = [1, 2, 3, 4, 5];
nums.splice(2, 1, 99); // remove 1 item at index 2, insert 99
console.log(nums); // [1, 2, 99, 4, 5]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


10. forEach()

Loops through the array.


["a", "b", "c"].forEach((item) => console.log(item));


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

11. map()

Creates a new array by transforming each element.


let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

12. filter()

Creates a new array with elements that pass a test.


let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


13. reduce()

Reduces the array to a single value.


let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

14. find()

Finds the first element that matches a condition.


let users = [{id:1}, {id:2}, {id:3}];
let user = users.find(u => u.id === 2);
console.log(user); // {id:2}


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

15. findIndex()

Finds the index of the first matching element.


let nums = [10, 20, 30];
let idx = nums.findIndex(n => n > 15);
console.log(idx); // 1


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


16. some()

Returns true if at least one element passes the test.


let nums = [1, 3, 5];
console.log(nums.some(n => n > 4)); // true


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

17. every()

Returns true if all elements pass the test.


let nums = [2, 4, 6];
console.log(nums.every(n => n % 2 === 0)); // true


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

18. concat()

Merges arrays into one new array.


let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

19. flat()

Flattens nested arrays.


let arr = [1, [2, 3], [4, [5]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

20. sort()

Sorts elements alphabetically or numerically (modifies original).


let nums = [5, 1, 10, 3];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 3, 5, 10]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

21. reverse()

Reverses the array in place.


let nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]
*/

// +++++++++++++++++++++++++++++++ Interview Questions +++++++++++++++++++++++++++++++++++++++++

/*
Most Common Interview Questions on Arrays
1. Difference between slice() and splice()?

   * slice() → doesn’t modify the original array.
   * splice() → modifies the original array.

2. How does map() differ from forEach()?

   * map() returns a new array; forEach() doesn’t.

3. How do you remove duplicates from an array?

   
   let arr = [1, 2, 2, 3];
   let unique = [...new Set(arr)];
   console.log(unique); // [1, 2, 3]
   

4. How to flatten a nested array?

   
   let arr = [1, [2, [3, 4]]];
   console.log(arr.flat(2)); // [1, 2, 3, 4]
   

5. How to check if a variable is an array?

   
   Array.isArray([1,2,3]); // true
   

6. How to convert an array to a string and back?

   
   let arr = ["a", "b"];
   let str = arr.join(",");     // "a,b"
   let back = str.split(",");   // ["a", "b"]
   

7. How to find the max/min value in an array?

   
   let nums = [1, 5, 2];
   Math.max(...nums); // 5
   Math.min(...nums); // 1
   

8. What is the time complexity of array methods like push, pop, shift, unshift?

   * push, pop → O(1)
   * shift, unshift → O(n) (because elements need to move)

*/

// +++++++++++++++++++++++++++++++ spread +++++++++++++++++++++++++++++++++++++++++

/*


What is the Spread Operator (`...`) in JavaScript?

The spread operator (`...`) is used to expand (or "spread") elements of an array or object into individual items.

It makes it easy to copy, merge, or pass array/object values.

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Example 1: Spreading an Array


let numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3


Explanation:
The `...` spreads the array into separate values.

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Example 2: Copying an Array


let original = [10, 20, 30];
let copy = [...original];
console.log(copy); // [10, 20, 30] 

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Why use spread?
It creates a new array, not a reference to the old one.



Example 3: Merging Arrays


let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Example 4: Adding Elements Easily


let arr = [2, 3];
let newArr = [1, ...arr, 4];
console.log(newArr); // [1, 2, 3, 4]


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Example 5: Spreading in Objects


let user = { name: "Rejoan", age: 22 };
let updated = { ...user, country: "Bangladesh" };
console.log(updated);
// { name: "Rejoan", age: 22, country: "Bangladesh" }


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Example 6: Using Spread with Functions


function add(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];
console.log(add(...numbers)); // 6


Here, `...numbers` spreads the array into 3 separate arguments.

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In Simple Words:

> The spread operator (`...`) takes an array or object and “opens it up” into individual elements or properties.

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

 Compare (for clarity):

| Feature    | Symbol | Used For                                         |
| ---------- | ------ | ------------------------------------------------ |
| **Spread** | `...`  | Expands values (arrays/objects)                  |
| **Rest**   | `...`  | Collects multiple values into one array/variable |

Example of Rest:


function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6



// +++++++++++++++++++++++++++++++ Array static methods +++++++++++++++++++++++++++++++++++++++++

/*

What Are Static Methods?

* Static methods are called on the Array class itself, not on an array instance.
* Example:


  Array.isArray([1, 2, 3]); // ✅ works
  [1, 2, 3].isArray();      // ❌ error


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Array.isArray()

➤ Definition:

Checks whether a given value is an array or not.

Example:


console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false
console.log(Array.isArray({}));        // false


Real Use:

Useful when you get data from an API or user input and need to confirm it’s an array before looping.



2. Array.from()

➤ Definition:

Creates a new array from:

* an array-like object (like `arguments`, `NodeList`, or string), or
* any iterable (like Set or Map).

Example 1: From a String


let arr = Array.from("ABC");
console.log(arr); // ["A", "B", "C"]


Example 2: From a Set


let set = new Set([1, 2, 3]);
let arr = Array.from(set);
console.log(arr); // [1, 2, 3]


Example 3: From an Array-like Object


function example() {
  let arr = Array.from(arguments);
  console.log(arr);
}
example(10, 20, 30); // [10, 20, 30]


Real Use:

Convert things that “look like” arrays into real arrays to use methods like `map()` or `filter()`.

---

3. `Array.of()`

➤ Definition:

Creates a **new array** from given arguments (no matter the number of arguments).

Example:


let arr1 = Array.of(5);
let arr2 = Array(5);
console.log(arr1); // [5]
console.log(arr2); // [empty × 5]


⚠️ `Array(5)` creates an empty array of length 5.
✅ `Array.of(5)` creates `[5]`.

---

4. `Array.prototype.keys()`, `values()`, and `entries()`

➤ Definition:

Return **iterators** for looping through array indexes, values, or both.

Example:


let fruits = ["apple", "banana", "mango"];

for (let index of fruits.keys()) console.log(index); 
// 0, 1, 2

for (let value of fruits.values()) console.log(value); 
// "apple", "banana", "mango"

for (let [index, value] of fruits.entries()) 
  console.log(index, value);
// 0 "apple", 1 "banana", 2 "mango"


---

5. `Array.fill()`

➤ Definition:

Fills all or part of an array with a **static value**.

Example:


let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // fill with 0 from index 1 to 2
console.log(arr); // [1, 0, 0, 4]


---

6. `Array.flat()` and `Array.flatMap()`

➤ `flat()`: Flattens nested arrays.


let arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]


➤ `flatMap()`: Maps + Flattens in one go.


let nums = [1, 2, 3];
let result = nums.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]


---

 7. `Array.concat()` (Instance Method)

Although not static, it’s widely used to **combine arrays**.


let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]


---

Summary Table

| Method            | Purpose                                  | Returns        |
| ----------------- | ---------------------------------------- | -------------- |
| `Array.isArray()` | Checks if a value is an array            | `true / false` |
| `Array.from()`    | Converts iterable or array-like to array | New array      |
| `Array.of()`      | Creates array from given args            | New array      |
| `Array.fill()`    | Fills array with a value                 | Modified array |
| `Array.keys()`    | Returns index iterator                   | Iterator       |
| `Array.values()`  | Returns value iterator                   | Iterator       |
| `Array.entries()` | Returns [index, value] pairs             | Iterator       |
| `Array.flat()`    | Flattens nested arrays                   | New array      |
| `Array.flatMap()` | Maps and flattens                        | New array      |

---
// +++++++++++++++++++++++++++++++ Common Interview Questions +++++++++++++++++++++++++++++++++++++++++


1. What’s the difference between `Array.of()` and `new Array()`?

   * `Array.of(3)` → `[3]`
   * `Array(3)` → creates empty array of length 3.

2. Why use `Array.from()`?

   * To convert array-like or iterable objects into true arrays.

3. How do you check if a variable is an array?

   
   Array.isArray(varName);
  

4. What is the output of `Array(5).fill(0)`?
   → `[0, 0, 0, 0, 0]`

5. How do you flatten nested arrays?

 
   arr.flat(Infinity);
   


*/