const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const loginBtn = document.querySelector("#submit");
const errorMsg = document.querySelector("#error-msg");
let flag = false;
let studentsArr = "";
fetch("data.json")
  .then((response) => response.json())
  .then((data) => (studentsArr = data));
function checkValidStudent() {
  for (let element of studentsArr.students) {
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
