// function removeActive() {
//   for (let i = 0; i < ratings.length; i++) {
//     ratings[i].classList.remove("active");
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("form");
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     confirm("Are you sure to submit the following data?");
//   });
// });

//day night shift

let icons = document.getElementById("modes");
icons.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icons.src = "svg/icons8-bright.svg";
  }
  else{
    icons.src = "svg/moon-regular (1).svg"
  }
}

// feedback

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
  if (e.target.classList.contains("rating")) {
    removeActive();
    e.target.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        
        <b>Thank You! </b> </br>                                                        
        Feedback : ${selectedRating}
        </br></br>
        We'll use your feedback to improve our customer support
        </br>
        </br>
    `;
});
