let subjects = document.querySelectorAll(".study-subjects");
let tabcontent = document.querySelectorAll(".tabcontent");
let tablinks = document.querySelectorAll(".tablinks");
let slideIndex = 1;
showSlides(slideIndex);

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
  console.log(tabName);
  for (let i = 0; i < tabcontent.length; i++) {
    console.log(tabcontent[i]);
    tabcontent[i].classList.add("d-none");
  }
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].classList.add(
      "text-decoration-underline"
    );
  }
  document.querySelector(`#${tabName}`).classList.remove("d-none");
  document.querySelector(`#${tabName}`).classList.add("d-block");
  // evt.currentTarget.className += " active";
}
displayContent(event, "upcoming");
