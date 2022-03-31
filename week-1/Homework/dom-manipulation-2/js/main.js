// homework part 1

const blueButton = document.getElementById('blueBtn');
const jumbotronSection = document.querySelector('.jumbotron');
const donateBikeButton = document.getElementById('donate-button');
const volunteerButton = document.getElementById('volunteer-button');

function changeColors (color1, color2, color3, color4) {
    jumbotronSection.style.background = color1;
    donateBikeButton.style.background = color2;
    volunteerButton.style.background = color3;
    volunteerButton.style.color = color4;

};

// blue button

blueButton.addEventListener("click", (event) => {
    event.preventDefault();
    changeColors("#588fbd", "#ffa500", "black", "white");
});

// orange button

const orangeButton = document.querySelector('#orangeBtn');

orangeButton.addEventListener("click", (event) => {
    event.preventDefault();
    changeColors("#f0ad4e", "#5751fd", "#31b0d5", "white");
});

// green button

const greenButton = document.querySelector('#greenBtn');

greenButton.addEventListener("click", (event) => {
    event.preventDefault();
    changeColors("#87ca8a", "black", "#8c9c08", "black");
});

// homework part 2
// STEP 1 Selecting DOM elements
const selectForm = document.querySelector("form");
const selectSubmitButton = document.querySelector("form button");
const inputEmail = document.getElementById("exampleInputEmail1");
const inputName = document.getElementById("example-text-input");
const describeYourselfArea = document.getElementById("exampleTextarea");

// STEP 2 Creating Event Handler

function onSubmit(e) {
  {
    e.preventDefault();
    if
      (inputEmail.value.trim().length === 0 ||
      inputEmail.value.trim().includes("@") === false ||
      inputName.value.trim().length === 0 ||
      describeYourselfArea.value.trim().length === 0)
    {
    inputEmail.style.backgroundColor = "red";
    inputName.style.backgroundColor = "red";
    describeYourselfArea.style.backgroundColor = "red";
    } else {
      alert("Thank you for filling out the form");
      inputEmail.value = "";
      inputName.value = "";
      describeYourselfArea = "";
          }
  }
}

/// Adding event listener
selectSubmitButton.addEventListener("click", onSubmit);