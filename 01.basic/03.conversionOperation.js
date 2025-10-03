// *** Number conversion ***
let testNumber1 = "33sdf"
let testNumber2 = "rahat"
let testNumber3 = '123'
let testNumber4 = null
let testNumber5 = undefined
let testNumber6 = true
let testNumber7 = ""
// console.log(typeof testNumber1)


let valueInNumber1 = Number (testNumber1)
let valueInNumber2 = Number (testNumber2)
let valueInNumber3 = Number (testNumber3)
let valueInNumber4 = Number(testNumber4)
let valueInNumber5 = Number(testNumber5)
let valueInNumber6 = Number(testNumber6)
let valueInNumber7 = Number(testNumber7)


// console.log(valueInNumber1)
// console.log(valueInNumber2)
// console.log(valueInNumber3);
// console.log(valueInNumber4);
// console.log(valueInNumber5);
// console.log(valueInNumber6);
// console.log(valueInNumber7);

// *** String conversion ***

let testString1 = 123
let testString2 = null
let testString3 = undefined
let testString4 = true


let valueInString1 = String (testString1)
let valueInString2 = String (testString2)
let valueInString3 = String (testString3)
let valueInString4 = String (testString4)

// console.log(valueInString1)
// console.log(valueInString2)
// console.log(valueInString3);
// console.log(valueInString4);

// *** boolean conversion ***

let testBoolean1 = 1
let testBoolean2 = 0
let testBoolean3 = ""
let testBoolean4 = "rahat"

let valueInBoolean1 = Boolean (testBoolean1)
let valueInBoolean2 = Boolean (testBoolean2)
let valueInBoolean3 = Boolean (testBoolean3)
let valueInBoolean4 = Boolean (testBoolean4)


// console.log(valueInBoolean1)
// console.log(valueInBoolean2)
// console.log(valueInBoolean3);
// console.log(valueInBoolean4);


// *** operation ***

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); //addition
// console.log(2-2); //subtraction
// console.log(2*2); //multiplication
// console.log(2**2); //power
// console.log(2/2); //division
// console.log(2%2); //reminder | modules

let str1 = "hello"
let str2 = "Rahat"
let srt3 = str1 +" " + str2
// console.log(srt3);


//**** not important */
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3+4) * 5 % 3);
// console.log(+true);
// console.log(+"");
let num1,num2,num3
num1 = num2 = num3 = 2+2
// console.log(num1,num2,num3);



//**** prefix | profix */
let gameCounter = 100
++gameCounter; //prefix :Increases the value first, then returns it.

let gameCounter2 = 100
gameCounter2++; //postfix :Returns the value first, then increases .

let gameCounter3 = 100
gameCounter3-- //prefix :decreases the value first, then returns it.
let gameCounter4 = 100
--gameCounter3  //postfix :Returns the value first, then decreases .

// console.log(gameCounter,gameCounter2,gameCounter3,gameCounter4);


/**note : conversion with Number () datatype
 * "33" => 33
 * "33abc=> NaN
 * true => 1; false => 0
 * 
 * **conversion with Boolean () datatype
 * 1 => true; 0=> false
 * ""=> false
 * "rahat" => true
 * 
 * 
 * Q: What are common operators in JS?

    Arithmetic: + - * / % **

    Assignment: = += -= *= /=

    Logical: && || !

    Unary: ++ -- typeof

    Ternary: condition ? value1 : value2

 * Q: Difference between == and ===?

    == → loose equality (checks value only, allows type coercion).

    === → strict equality (checks value + type).
 */