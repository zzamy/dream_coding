"use strict";

//async & await
//clear style of using promise

//1. async

async function fetchUser() {
  //do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
console.log(user);

//2. await ✨

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple(); //각각 프로미스로 만드는 이유는 병렬 처리 되면 시간이 오래 걸리기 때문이다
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise API

function pickAllFruit() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruit().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
