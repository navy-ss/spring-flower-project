let subjects = document.querySelectorAll(".study-subjects");
let tabcontent = document.querySelectorAll(".tabcontent");
let tablinks = document.querySelectorAll(".tablinks");
let slideIndex = 1;
let data = [];

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  if (n > subjects.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = subjects.length;
  }
  for (i = 0; i < subjects.length; i++) {
    subjects[i].classList.add("d-none");
  }
  subjects[slideIndex - 1].classList.remove("d-none");
  subjects[slideIndex - 1].classList.add("d-block");

  if (n < subjects.length) {
    subjects[slideIndex].classList.remove("d-none");
    subjects[slideIndex].classList.add("d-block");
  }
}

function displayContent(event, tabName) {
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("d-none");
  }
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].classList.add(
      "text-decoration-underline"
    );
  }
  document.querySelector(`#${tabName}`).classList.remove("d-none");
  document.querySelector(`#${tabName}`).classList.add("d-block");
}
function fetchStudentData(func) {
  fetch("data.json")
    .then((response) => response.json())
    .then((result) => {
      data = JSON.parse(JSON.stringify(result)).students;
      func();
    });
}

function profile() {
  const details = data[Number(sessionStorage.getItem("studentID")) - 1];
  const name = document.querySelector("#fullName");
  const fathersName = document.querySelector("#fathersName");
  const dob = document.querySelector("#dob");
  const address = document.querySelector("#address");
  const phone = document.querySelector("#phone");
  const rollNo = document.querySelector("#rollNum");
  const displayPic = document.querySelector(".dp");

  rollNo.innerText = details.rollNum;
  name.innerText = details.fullName;
  fathersName.innerText = details.fatherName;
  dob.innerText = details.dob;
  address.innerText = details.Address;
  phone.innerText = details.phoneNumber;
  displayPic.src = details.profilePath;
}

function login() {
  const userName = document.querySelector("#username");
  const passWord = document.querySelector("#password");
  const loginBtn = document.querySelector("#submit");
  const errorMsg = document.querySelector("#error-msg");
  let flag = false;

  function checkValidStudent() {
    for (let element of data) {
      if (
        userName.value === element.username &&
        passWord.value === element.password
      ) {
        flag = true;
        sessionStorage.setItem("studentID", element.id);
        sessionStorage.setItem("username", element.fullName);
        loginHandler();
      }
    }
  }

  function loginHandler() {
    if (flag) {
      window.location.href = "welcome.html";
    } else {
      errorMsg.classList.remove("d-none");
      errorMsg.classList.add("d-block");
    }
  }
  loginBtn.addEventListener("click", checkValidStudent);
}

function result() {
  const subject_section = document.querySelector(".subjects-section");
  const dropdown = document.querySelector("#subject-dropdown");
  const marks = document.querySelector("#marks");
  const grade = document.querySelector("#grade");
  const subject_name = document.querySelector("#subject");

  const findMarks = (marks, subjectName) => marks[subjectName];
  function findGrades(mark) {
    if (mark === 100) return "Exemplary";
    else if (mark < 100 && mark >= 80) return "First class with Distinction";
    else if (mark < 80 && mark >= 65) return "First class";
    else if (mark < 65 && mark >= 50) return "Average";
    else if (mark < 50) return "Arrear - Reappear";
  }
  dropdown.addEventListener("change", () => {
    var value = dropdown.options[dropdown.selectedIndex].value;
    subject_section.classList.add("d-block");
    subject_name.innerText = value;
    const findMark = findMarks(
      data[Number(sessionStorage.getItem("studentID")) - 1].marks[0],
      value
    );
    marks.innerText = findMark;
    grade.innerText = findGrades(findMark);
  });
}
