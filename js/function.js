// Function
//    - fundmental building block in the program
//    - subprogram can be used multiple times
//    - performs a task or calculates a value.

// 1. Function declaration
//    function name(param1, param2) {body... return;}
//    one function === one thing
//    nameing: doSomething, command, verb
//    e.g. createCardAndPoint -> createCard, CreatePoint
//    function is object in JS

function printHello() {
  console.log("hello");
}

printHello();

function log(message) {
  console.log(message);
}

log("Hi Elena!");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.code = "Famous coder";
}

const bob = { code: "bobby" };

changeName(bob);

console.log(bob);

// 3. Default parameters (added in ES6)
// 파라미터 옆에 ="param" 넣어줄 경우 자동으로 셋팅된 파라미터를 가지고 들어옴

function showMessage(message, from = "ZzamWarrior") {
  console.log(`${message} by ${from}`);
}

showMessage("You are programmer");

// 4. Rest parameters (added in ES6)
// ...을 파라미터 앞에 붙일경우 배열 형태로 파라미터들을 보냄
// 밑에 for문은 배열화된 파라미터들을 0 array부터 5array까지 각각 출력 한것

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printAll("dream", "coding", "ellie", "ㅋㅋ", "하하", "만세!");

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad case example V
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic
  }
}

// good case example V
function upgradeUsers(users) {
  if (users.point <= 10) {
    return;
  }
  //long upgrade logic...
}

// First Class Function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Fucntion expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  //이런것 처럼 function 에 이름이 없는 것을 anonymous function 이라고 칭함
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback fucntion using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("Yes!");
};

//디버깅을 위해서 내임드 function을 쓰는것이 유리함 : 왜냐하면 함수 이름이 떠서 좀더 디버그에 시간 절약 가능함 (어노니머스 펑션 대비)
const printNo = function () {
  console.log("Oh~ No!!");
};

randomQuiz("Wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous (어노니머스 펑션에만 적용됨, 본 펑션을 간력화하는 기능이 있당)
const simplePrint = function () {
  console.log("simplePrint");
};

const simplePrints = () => console.log("simplePrints!!");

simplePrint();
simplePrints();

//IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("iife");
})(); // hello(); 를 통한 함수 호출 축약해서 가능 함 , 다만 외부에서 콜 안됨

//퀴즈!

// function calculate (command, a, b)
// command : add, substract, divide, mutiply, remainder

// 내가 적은 정답 (이프문으로 적음, 리턴을 먼저 던지지 않았다)
/*
function calculate(command, a, b) {
  if (command === "add") {
    console.log(a + b);
  }
  if (command === "substract") {
    console.log(a - b);
  }
  if (command === "divide") {
    console.log(a / b);
  }
  if (command === "multiply") {
    console.log(a * b);
  }
  if (command === "remainder") {
    console.log(a % b);
  }
}

calculate("add", 1, 2);
calculate("substract", 1, 2);
calculate("divide", 1, 2);
calculate("multiply", 1, 2);
calculate("remainder", 1, 2); */

// 엘리쌤 정답 노트

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "minus":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command!");
  }
}

console.log(calculate("add", 2, 3));
console.log(calculate("minus", 2, 3));
console.log(calculate("multiply", 2, 3));
console.log(calculate("divide", 2, 3));
console.log(calculate("remainder", 2, 3));
