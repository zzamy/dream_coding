// 1. Use stric
//  added in ES 5
//  Use this for Vanila Javastript

"use strict";

// 2. Variable, rw(read/write)
//  let (added in ES6)
let globalName = "Zzamy world"; //this is Global variable declation

{
  //in the blanket, we can assume local variable
  let name = "Zzamy";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// var => don't ever use this!!
// below example is miss used example for "VAR"
// before declaration for variable, it can recognize the variable and it make many problem on programing.
// this phenomenon we can call "var hosting" (move declaration from bottom to top)
// and "VAR" totally ignore block like as blanket

{
  console.log(age);
  age = 4;
  console.log(age);
  var age;
}

console.log(age);

// 3. constant >> immutable data type, read only
// favor immutable data type always for a few reason.
//   - security
//   - tread safety
//   - reduce human mistakes

const dayInWeek = 7;
const maxNumber = 100;

// 4. Variable types
//  primitive, single item : number, string, boolean, null, inderfiedn, symbol
//  object, box container
//  function, first-class function

const count = 17; //interger
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`); //temnplate literals [`blah blah ${function}`]

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefine
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2); //checking whether symbol1 / symbol2 same or not

const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");

console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);

//5. Dynamic typing: dynamic type language
//    base on the value, it can automatically changed
//    because of this between developer there can be some misunderstanding
let hello = "hello";
console.log(`value : ${hello}, type : ${typeof hello}`);
hello = 1;
console.log(`value : ${hello}, type : ${typeof hello}`);
hello = "1" + 10;
console.log(`value : ${hello}, type : ${typeof hello}`);
hello = "10" / "10";
console.log(`value : ${hello}, type : ${typeof hello}`);
