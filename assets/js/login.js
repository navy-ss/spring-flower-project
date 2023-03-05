const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const loginBtn = document.querySelector("#submit");
const errorMsg = document.querySelector("#error-msg");

function loginHandler() {
  if (userName.value === "admin" && passWord.value === "admin") {
    sessionStorage.setItem("username", userName.value);
    window.location.href = "welcome.html";
  } else {
    console.log("yes");
    errorMsg.classList.remove("d-none");
    errorMsg.classList.add("d-block");
  }
}
loginBtn.addEventListener("click", loginHandler);
