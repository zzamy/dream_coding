"use strict";

//JavaScript is synchronous
//Excute the code block in order after hoisting.
//hoisting: var, function declaration
//콜백 함수라 함은 우리가 전달해준 함수를 나중에 불러줘 라는 개념? 다시 한번 찾아보고 개념 이해하기

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

//Synchronous callback
function printImediately(print) {
  print();
}

printImediately(() => console.log("hello"));
//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

console.clear();
//콜백 지옥 예제

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "zzamy" && password === "hama") ||
        (id === "ellie" && password === "dream")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "zzamy") {
        onSuccess({ name: "zzamy", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your ID");
const password = prompt("enter your Password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRoles) => {
        alert(
          `Hello! ${userWithRoles.name}, You have a ${userWithRoles.role} role!`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
