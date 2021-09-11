// Json

//Javascript Object Notation

//1. Object to JSON
//stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
}; //==>>> 함수는 오브젝트에 있는 데이터로 인정하지 않으며, 제이슨으로 넘기는걸 제외 시킴

json = JSON.stringify(rabbit);

console.log(json);

json = JSON.stringify(rabbit, ["birthDate"]); // ==>> 원하는 프로퍼티만 제이슨으로 변환 가능함
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
}); // ==>> 원하는 프로퍼티만 제이슨으로 변환 가능함
console.log(json);

console.clear();

//2. JSON to Object
//parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

//유용한 사이트 JSON Diff, JSON Beautifier, JSON Parser, JSON Validator
