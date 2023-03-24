const subject_section = document.querySelector(".subjects-section");
const dropdown = document.querySelector("#subject-dropdown");
const marks = document.querySelector("#marks");
const grade = document.querySelector("#grade");
const subject_name = document.querySelector("#subject");

function getMarks(subject) {
  if (subject === "English") return 87;
  else if (subject === "Language") return 60;
  else if (subject === "Mathematics") return 100;
  else if (subject === "Physics") return 75;
  else if (subject === "Chemistry") return 50;
  else if (subject === "Computer") return 99;
}

const findMark = (marks) => console.log(marks.subject);
function findGrades(mark) {
  if (mark === 100) return "Exemplary";
  else if (mark < 100 && mark >= 80) return "First class with Distinction";
  else if (mark < 80 && mark >= 65) return "First class";
  else if (mark < 65 && mark >= 50) return "Average";
  else if (mark < 50) return "Arrear - Reappear";
}
function result() {
  if (subject === "English") return 87;
  else if (subject === "Language") return 60;
  else if (subject === "Mathematics") return 100;
  else if (subject === "Physics") return 75;
  else if (subject === "Chemistry") return 50;
  else if (subject === "Computer") return 99;
}
dropdown.addEventListener("change", () => {
  var value = dropdown.options[dropdown.selectedIndex].value;
  subject_section.classList.add("d-block");
  subject_name.innerText = value;
  const findMark = getMarks(value);
  marks.innerText = findMark;
  grade.innerText = findGrades(findMark);
});
