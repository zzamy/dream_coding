//Object
//one of the JavaScript's data types
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object
//매우 중요 : Object = (key 와 value 의 집합체임}

//1. Literals and properties
//오브젝트 지정하는 방법
const obj1 = {}; //중괄호를 사용한 object literal 방식
const obj2 = new Object(); //object constructor를 사용한 방식

function print(person) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.hasJob);
}

const zzamy = { name: "Zzamy", age: 37 };

print(zzamy); //오브젝트 추가전 프린트 펑션 실행 : undefined 로 실행됨

zzamy.hasJob = true; // 자바스크립트는 동적 언어라, 변수가 선언된 이후 오브젝트의 추가가 가능함. 하지만 오류나 혼선을 야기할 확률이 매우 높음으로 가능한 이런 경우를 피해야함

print(zzamy); // 오브젝트 추가후 프린트 펑션 재실행 : undefined -> true 로 실행됨

console.log(zzamy.hasJob);

delete zzamy.hasJob;

print(zzamy);

//2. Computed properties [""]
//key should be always string ! 키는 항상 문자형태로 들어가 있어야 함
console.log(zzamy.name);
console.log(zzamy["name"]);
zzamy["hasJob"] = true; // 요런식으로도 수정 가능함, 단 보통 코딩할때는 닷을 이용하여야 함
console.log(zzamy.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); // 동적으로 키에 대한 밸류를 받아올때 유용하게 활용 가능함
}
printValue(zzamy, "name");
printValue(zzamy, "age");

//3. Property value shorthand
const person1 = { name: "Bob", age: 2 };
const person2 = { name: "Steve", age: 3 };
const person3 = { name: "ZzamWarrior", age: 37 };
const person4 = makePerson("Babarian", 55);

console.log(person4);

function makePerson(name, age) {
  return {
    name: name, //단, 여기서 name 생략가능 why? 프로그래머는 귀찮은걸 싫어하니까 그리고 이게 프로퍼티 밸류 숏핸드 기능임
    age: age,
  };
}

//4. Constructor function

function Weapon(type, sharpen) {
  //this = {};
  this.type = type;
  this.sharpen = sharpen;
  //return this 형태
}

const katana = new Weapon("Nihon_knife", 3);

console.log(katana);

//5. in operator : property existence check (key in obj)

console.log("sharpen" in katana); //특정 오브젝트 안에 해당 키가 있는지 여부에 대해서 확인
console.log("type" in katana);
console.log("whoMade" in katana);
console.log(katana.whoMade); // 정의 되지 않은 값을 확인하면 언디파인으로 뜨고, 해당 값은 추후 추가 가능함, 단 에러 불러올 소지가 높음으로 되도록 쓰지 말라
katana.whoMade = "Muramasa";
console.log(katana.whoMade);

//6. for..in vs for..of
// for (key in obj)
console.clear(); //요 명령문을 치면 콘솔이 깨끗해짐

for (key in katana) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

//7. Fun cloning
//Object.assign(des, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "zzam_warrior";
console.log(user.name);

//old way

const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

console.clear();
console.log(user3);

//new way
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: "red", size: "small" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "black" };
const mixed = Object.assign({}, fruit1, fruit2, fruit3); //무엇이 나올까 결과?!
console.log(mixed.color);
console.log(mixed.size);
