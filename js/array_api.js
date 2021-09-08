//1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("🔥");
  console.log(result);
}
//2. make an array out of a string
{
  const planets = "🌚,🌙,🌎,🪐";
  const planetsArray = planets.split(",", 2);
  console.log(planetsArray);
}

//3. make this arrau look like this : [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); //🔥🔥🔥리버스를 사용하면 리버스 대상자체의 객체순서가 리버스 됨
}
console.clear();

//4. make new arrau without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array); //splice 는 기존 배열을 변형시키면서 작동하는 api임

  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(result2);
  console.log(array2); //slice는 기존 배열을 변형시키지 않고 새로운 배열을 만들어줌
}

// 예문..

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
