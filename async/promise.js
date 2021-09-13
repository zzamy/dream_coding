"use strict";

//Promise is a JavaScript object for asynchronous operation.
//⬆️ 프로미스를 쓰기 위해서는 상태의 파악이 필요함 (프로세스가 헤비한 오퍼레이션을 수행 하고 있는지 이해할 필요 있음)
//    state : pending -> fulfilled or rejected
//⬆️ 프로듀서와 컨슈머의 차이점을 알아야 함
//    producer vs consumer

//1. Producer
//when new Promise is created, the excutor run automatically
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log("doing something..");
  setTimeout(() => {
    //resolve("zzamy");
    reject(new Error("No network"));
  }, 2000);
});

//2. Consumers : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`Error!! ${hen} => 🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // .then((hen) => getEgg(hen)) 요거랑 같음
  .catch((error) => {
    return "🍞"; //>>>>> 캐치를 첫번째 컨슈머에서 사용 해줄경우 첫번째에서 에러가 발생하더라도 바로바로 대응 될수 있음 (우회기능 있음)
  })
  .then(cook) //.then((egg) => cook(egg)) 요거랑 같음
  .then(console.log) //.then((meal) => console.log(meal)); 요거랑 같음
  .catch(console.log);
