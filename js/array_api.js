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

//3. make this array look like this : [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); //🔥🔥🔥리버스를 사용하면 리버스 대상자체의 객체순서가 리버스 됨
}
console.clear();

//4. make new array without the first two elements
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

console.clear();

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

//5번 문제 90 점 이상인 사람을 찾으라

{
  //const overSpec = students.filter();
  //console.log(overSpec);
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

console.clear();

//6번. 수업 등록한 학생만 찾으라

{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

//7번. 현존 배열에서 점수만 쏙쏙 뽑아서 배열로 만들기

console.clear();

{
  //const result = students.map((student) => student.score === true);
  //console.log(result);
  const result = students.map((student) => student.score);
  console.log(result);
}

//8번. 학생중에 50점보다 점수 낮은 사람이 있는지 True or False 로 판정하라
console.clear();

{
  //const result = students.filter((student) => student.score <= 50);
  //console.log(result);

  const result = students.some((student) => student.score <= 50);
  console.log(result); //<====모범 답안, 이중에 하나라도 이조건에 충족하면 True로 반환

  const result2 = students.every((student) => student.score <= 50);
  console.log(result2); //<<<=== 모든 조건이 이조건을 충족해야 트루로 반환
}
console.clear();

//9번. 학생들의 평균점수를 구하라!! (개 어려움 ㅠ)
{
  const result = students.reduce((prev, curr) => {
    console.log("------------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / 5);
}

{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / 5);
}

console.clear();
//10번. 학생들의 모든 점수를 스트링으로 변경하라

{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50) // 요건 보너스로 다른 필터 50점 보다 높은 놈들만 추출, 타 API와 병행 사용 가능함을 알려주는 예제
    .join();

  console.log(result);
}

//보너스. Q 10  sorted in ascending order
//result should be '45, 66, 80, 88, 90'
console.clear();

{
  //const result = students.sort((a, b) => {
  //  console.log(a);
  //  console.log(b);
  //});
  //console.log(result);  << 나의 오답 얼마나 개판인가

  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);
}
