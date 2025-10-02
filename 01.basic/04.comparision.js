//*****common comparision */
// === => checking value only
console.log(2>1); // true   → greater than
console.log(2>=1); // true   → greater than or equal
console.log(2<1); // false  → less than
console.log(2<=1); // false  → less than or equal
console.log(2==1); // false  → equal in value (loose)
console.log(2!=1); // true   → not equal in value (loose)
 

console.log("2" > 1); // true  → "2" converted to number
console.log("02" > 1); // true  → "02" converted to 2
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true  (because null → 0 in >= / <=)
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false


// === => checking value + datatype
console.log("2" === 2);  // false → string vs number
console.log(2 === 2);   // true  → same type & value

/**
 * ***node:comparison
 * == → compares value only (allows type conversion).
 * === → compares value + type (no conversion).
 * null & undefined behave strangely → only equal to each other with ==.
 * For clean code → always prefer === and !==.
 */