/****Primitive Data Types (Immutable, stored by value):**
 * String → Sequence of characters. Example: `"Hello"`
 * Number → Represents integers & floating numbers. Example: `10, 3.14`
 * Boolean → Logical values `true` or `false`.
 * Null → Intentional empty value (object placeholder).
 * Undefined → Variable declared but not assigned a value.
 * Symbol → Unique and immutable identifier (often used as object keys).
 * BigInt → Represents very large integers beyond `Number.MAX_SAFE_INTEGER`.
 * 
 * **Reference (Non-Primitive Data Types, stored by reference in heap):**
 * Object → Collection of key–value pairs. Example: `{ name: "Rahat" }`
 * Array → Ordered collection of elements. Example: `[1, 2, 3]`
 * Function → Block of code designed to perform a task, treated as an object in JS.
 * 
 * **JavaScript Dynamic or Static?**
 * ans: JavaScript is a Dynamic Language.Variables don’t need a fixed type during declaration.Type is determined at runtime.
 */

/**** What is Reference Type?**
 * A reference type is a value that is stored in memory (heap) and accessed via a reference (pointer).
 * When you assign or copy a reference type (like an object or array), you don’t copy the actual value — you copy the reference (address).
 * Example:

  
  let a = { name: "Rahat" };
  let b = a;   // b points to the same object
  b.name = "Khan";
  console.log(a.name); // "Khan"
    Both `a` and `b` refer to the same memory location.


 ***Why String, Number, Boolean, etc. are NOT Reference Types?**
 * Primitives are stored directly in stack memory as actual values.
 * When copied, the **value itself** is duplicated (not the memory reference).
 * Example:
  let x = 10;
  let y = x;   // copy of value
  y = 20;
  console.log(x); // 10 (unchanged)
  Each variable has its own copy, no shared reference.

 * **So the difference is:**
 * Primitive (by value): Copy → independent, stored in stack.
 * Reference (by reference): Copy → still points to same object, stored in heap.
 * 
 * **Key Point for Interviews:**
    Primitives are simple & immutable, so no need for references. Objects/arrays/functions are complex & can grow in size, so JS uses references to manage them efficiently in memory.

*/



// ######################################
/**Stack(premitive) 
 * Used for Primitive values (`string, number, boolean, null, undefined, symbol, bigint`).
 * Stored by valu → each variable gets itsown cop.
 * Faster acces because values are small & fixed.
 *  Example:

  let a = 10;
  let b = a;  // copy of value
  b = 20;
  console.log(a); // 10  (unchanged)
  console.log(b); // 20

 * *Heap(non-primitive)**
  * Used for: Non-primitive values (`objects, arrays, functions`).
  * Stored by reference (memory address).
  * Copying a variable copies only the reference → both point to the same object in memory.
  ***  Example:***
  let obj1 = { name: "Rahat" };
  let obj2 = obj1;  // reference copy
  obj2.name = "Khan";
  console.log(obj1.name); // "Khan"  (changed)



  ***********************Interview-Style Q&A***********
Q1: Why are primitives stored in the stack?
   Because they are small, fixed-size, and immutable → easy to store and access quickly.

Q2: Why are non-primitives stored in the heap?
   Because they can be large, dynamic in size, and mutable → heap allows flexible memory allocation.

Q3: What happens when you copy a primitive vs a reference type?
   Primitive → value is copied (independent).
   Reference → memory address is copied (shared).


   ******In short for interview:****

Stack → Primitive (by value, independent).
Heap → Non-Primitive (by reference, shared).
*/