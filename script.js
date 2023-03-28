"use-strict";
console.log("java script is scripting...");

window.addEventListener("load", start);

const navne = ["Harry", "Ron", "Hermione"];

const flere = ["Ginny", "Neville", "Cho"];

console.log(navne);
console.log(navne.length);
console.log(navne.at(0));
console.log(navne[1]);
console.log(navne.concat(flere));

console.log("######################");

const hasNeville = navne.includes("Neville");
const ronIndex = navne.indexOf("Ron");
const drengene = navne.slice(0, 2);
const lilleRon = navne.indexOf("ron");

console.log("hasNevillle: " + hasNeville);
console.log("indexOf Ron: " + ronIndex);
console.log("slice: " + drengene);
console.log("indexOf ron: " + lilleRon);

console.log("################################");

// const harry = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// const ron = {
//   firstName: "Ron",
//   lastName: "Weasley",
// };

// const hermione = {
//   firstName: "Hermione",
//   lastName: "Granger",
// };

async function start() {
  const students = await getStudent("array.json");

  let student = students[0];
  console.log(
    `${student.firstName} ${student.lastName} is a student at Hogwarts`
  );

  students.forEach(addStudent);
  // addStudent(students[0]);
  // addStudent(students[1]);
  // addStudent(students[2]);
}

function addStudent(student) {
  const list = document.querySelector("#students");
  list.insertAdjacentHTML(
    "beforeend",
    `<li>${student.firstName} ${student.lastName}</li>`
  );
}

async function getStudent(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
