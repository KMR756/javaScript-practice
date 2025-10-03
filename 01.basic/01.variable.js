const accountId = 123456
let accountEmail= "rahat@gmail.com"
var accountPassword = "12345"
accoutCity = "dhaka"
let accountState;

// accountId = 12

console.log(accountId);

accountEmail = "khan@gmail.com"
accountPassword = "2366564"
accoutCity = "madaripur"

console.table([accountId,accountEmail,accountPassword,accoutCity,accountState])


/**notes: variable
 * var → function-scoped, hoisted, can be re-declared.
 * let → block-scoped, not hoisted, can be reassigned.
 * const → block-scoped, not hoisted, cannot be reassigned
 * [prefer not to use var besause of issue in block scope and functional scope]
 * 
 * 
 * 
 * **Function-scoped**
 * A variable declared with **`var`** is accessible **anywhere inside the function** in which it is defined.
 * Not limited to `{ }` blocks (like if/for).
 * Example:
  function test() {
    if (true) {
      var x = 10;
    }
    console.log(x); // ✅ 10 (still accessible)
  }
  test();

  ***Block-scoped**
  * Variables declared with `let` or `const` are only accessible inside the nearest `{ }` block.
  * Not accessible outside that block.
  * Example:
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
 
 ** Hoisting**
 * In JS, variable & function declarations are moved (hoisted) to the top of their scope before code execution.
 *  But the difference:
    * `var` → hoisted & initialized with `undefined`.
    * `let` and `const` → hoisted but not initialized (they remain in the Temporal Dead Zone until declared).
 
 ***In short for interviews:**
 * Function-scoped: `var` → visible in entire function.
 * Block-scoped: `let` & `const` → visible only inside `{ }`.
 * Hoisting: Declarations are moved up before execution, but `let`/`const` are not initialized until declared.

 */
