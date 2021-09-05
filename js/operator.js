//1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);
//  \n : 줄바꿈
// \t : 탭

//2. Nemeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter +1;
//preincrement = counter;
console.log(`preIncrement : ${preIncrement}, postCounter : ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter +1;
console.log(`postIncrement : ${postIncrement}, postCounter : ${counter}`);

// Same with increment & decrement
let decounter = 2;
const preDecrement = --decounter;
//counter = counter -1;
//preincrement = counter;
console.log(`preDecrement : ${preDecrement}, postDeCounter : ${decounter}`);

const postDecrement = decounter--;
//postIncrement = counter;
//counter = counter +1;
console.log(`postDecrement : ${postDecrement}, postDeCounter : ${decounter}`);

//4.Assignment operators
let x = 3;
let y = 6;

x += y; //x=x+y
console.log(`x : ${x}`);
x -= y; //x=x-y
console.log(`x : ${x}`);
x *= y; //x=x*y
console.log(`x : ${x}`);
x /= y; //x=x/y
console.log(`x : ${x}`);

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operator: || (or). &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

//|| (or) 연산자는 만약 연산 중 true 값이 나올 경우 자동으로 연산을 멈춤 ->  you can change value 1 to true
// and 도 동일 하다, 따라서 헤비한 연산 (ex : for문 등) 은 필히 연산 하단부에 배치 필요
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("으악!!");
  }
  return true;
}

//7.equlity
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive != numberFive);

//object equality by reference
const zzamy1 = { name: "zzamy" };
const zzamy2 = { name: "zzamy" };
const zzamy3 = zzamy1;

console.log(zzamy1 == zzamy2);
console.log(zzamy1 === zzamy2);
console.log(zzamy1 === zzamy3);

// equality - puzzler

console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8.conditional operators: if
// if, else if, else
const name = "zzamy";
if (name === "zzamy") {
  console.log("Welcome, Zzamy!");
} else if (name === "coder") {
  comsole.log("You are amazing coder");
} else {
  console.log("get out of here!");
}

// 9. Tenary operator: ?
// condition ? value1: value2;
console.log(name === "zzamy" ? "Yes" : "no");

// 10.Switch statement
// Use for mutiple if checks
// use for enum-like value check
// use for mutiple type check in TS

const browser = "Firefox";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("Welcome!");
    break;

  default:
    console.log("Same all!");
    break;
}

//11.Loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i < 10) {
  console.log(`while: ${i}`);
  i++;
}

do {
  console.log(`do while: ${i}`);
  i++;
} while (i < 10);

// do while 은 조건문 맞든 안맞든 1회 출력 함, while 문은 조건문이 맞는 횟수 만큼만 출력함

// for loop, for(begin; condition; step)
//for (j = 3; j > 0; j = j--) {
//  console.log(`for:${j}`);
//}

//for (let j = 3; j > 0; j = j - 2) {
//inline variable declaration
//  console.log(`inline cariable for : ${j}`);
//}

for (let h = 0; h < 11; h++) {
  if (h % 2 === 0) {
    continue;
  }
  console.log(`h 는 ${h}입니다`);
}

for (let r = 0; r < 11; r++) {
  if (r > 8) {
    break;
  }
  console.log(`r은 ${r}입니다`);
}
