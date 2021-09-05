"use strict";
//object-oriented programming
//class: template
//object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. class declaration

class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const zzamy = new Person("Zzamy", 37);

console.log(zzamy.name);
console.log(zzamy.age);
zzamy.speak();

//2. Getter and setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    //if (value < 0) {
    //  throw Error("Age can not be negative");
    //}   빡세게 할때 (아예 금지)
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1); // 유저가 사람 나이 음수로 설정하는 것을 방지하기 위하여 세터와 게터를 설정 함 <<< 요것과 유사한 사례등 있으면 적용하면 좋을듯
console.log(user1.age);

//3. Fields (public, private)
// Too soon! 너무 최근에 적용된 사항으로 개발자들이 현장에 흔히 적용하고 있지 않는다, 쓰기위해서는 바벨등 최신 브라우저를 사용해야만 확인 가능함
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

class Experiement {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiement();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //unbdefined

//4. Static properties and methods
//Too Soon! 요것도 너무 최근에 적용된 사항임

class Article {
  static publisher = "Zzam Warrior";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher); //Zzam Warrior
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //Zzam Warrior
Article.printPublisher();

//5. Inheritance
// a way for class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모의 값을 상속 받으면서 특정 인자만 바꿔주고 싶을때 super을 사용힘
    console.log("빨간세모");
  }
  getArea() {
    return (this.width * this.height) / 2; //클라스의 다양성.. 상속된곳에서 상속된 함수를 오버라이트 하면 본 클라스를 따르는 오브젝트는 수정된 함수를 따르게 된다
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

//6. Class checking : instance Of

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
