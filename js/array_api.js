//1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("π₯");
  console.log(result);
}
//2. make an array out of a string
{
  const planets = "π,π,π,πͺ";
  const planetsArray = planets.split(",", 2);
  console.log(planetsArray);
}

//3. make this array look like this : [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); //π₯π₯π₯λ¦¬λ²μ€λ₯Ό μ¬μ©νλ©΄ λ¦¬λ²μ€ λμμμ²΄μ κ°μ²΄μμκ° λ¦¬λ²μ€ λ¨
}
console.clear();

//4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array); //splice λ κΈ°μ‘΄ λ°°μ΄μ λ³νμν€λ©΄μ μλνλ apiμ

  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(result2);
  console.log(array2); //sliceλ κΈ°μ‘΄ λ°°μ΄μ λ³νμν€μ§ μκ³  μλ‘μ΄ λ°°μ΄μ λ§λ€μ΄μ€
}

// μλ¬Έ..

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

//5λ² λ¬Έμ  90 μ  μ΄μμΈ μ¬λμ μ°ΎμΌλΌ

{
  //const overSpec = students.filter();
  //console.log(overSpec);
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

console.clear();

//6λ². μμ λ±λ‘ν νμλ§ μ°ΎμΌλΌ

{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

//7λ². νμ‘΄ λ°°μ΄μμ μ μλ§ μμ λ½μμ λ°°μ΄λ‘ λ§λ€κΈ°

console.clear();

{
  //const result = students.map((student) => student.score === true);
  //console.log(result);
  const result = students.map((student) => student.score);
  console.log(result);
}

//8λ². νμμ€μ 50μ λ³΄λ€ μ μ λ?μ μ¬λμ΄ μλμ§ True or False λ‘ νμ νλΌ
console.clear();

{
  //const result = students.filter((student) => student.score <= 50);
  //console.log(result);

  const result = students.some((student) => student.score <= 50);
  console.log(result); //<====λͺ¨λ² λ΅μ, μ΄μ€μ νλλΌλ μ΄μ‘°κ±΄μ μΆ©μ‘±νλ©΄ Trueλ‘ λ°ν

  const result2 = students.every((student) => student.score <= 50);
  console.log(result2); //<<<=== λͺ¨λ  μ‘°κ±΄μ΄ μ΄μ‘°κ±΄μ μΆ©μ‘±ν΄μΌ νΈλ£¨λ‘ λ°ν
}
console.clear();

//9λ². νμλ€μ νκ· μ μλ₯Ό κ΅¬νλΌ!! (κ° μ΄λ €μ γ )
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
//10λ². νμλ€μ λͺ¨λ  μ μλ₯Ό μ€νΈλ§μΌλ‘ λ³κ²½νλΌ

{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50) // μκ±΄ λ³΄λμ€λ‘ λ€λ₯Έ νν° 50μ  λ³΄λ€ λμ λλ€λ§ μΆμΆ, ν APIμ λ³ν μ¬μ© κ°λ₯ν¨μ μλ €μ£Όλ μμ 
    .join();

  console.log(result);
}

//λ³΄λμ€. Q 10  sorted in ascending order
//result should be '45, 66, 80, 88, 90'
console.clear();

{
  //const result = students.sort((a, b) => {
  //  console.log(a);
  //  console.log(b);
  //});
  //console.log(result);  << λμ μ€λ΅ μΌλ§λ κ°νμΈκ°

  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);
}
