// homework part 1

// blue button

const blueButton = document.getElementById('blueBtn');
const jumbotronSection = document.querySelector('.jumbotron');
const donateBikeButton = document.getElementById('donate-button');
const volunteerButton = document.getElementById('volunteer-button');

function changeColorBlue (color1, color2, color3, color4) {
    jumbotronSection.style.background = color1;
    donateBikeButton.style.background = color2;
    volunteerButton.style.background = color3;
    volunteerButton.style.color = color4;

};

blueButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(changeColorBlue("#588fbd", "#ffa500", "black", "white"));
});

// orange button

const orangeButton = document.querySelector('#orangeBtn');

function changeColorOrange (color1, color2, color3, color4) {
    jumbotronSection.style.background = color1;
    donateBikeButton.style.background = color2;
    volunteerButton.style.background = color3;
    volunteerButton.style.color = color4;

};

orangeButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(changeColorBlue("#f0ad4e", "#5751fd", "#31b0d5", "white"));
});

// green button

const greenButton = document.querySelector('#greenBtn');

function changeColorGreen (color1, color2, color3) {
    jumbotronSection.style.background = color1;
    donateBikeButton.style.background = color2;
    volunteerButton.style.background = color3;
};

greenButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(changeColorBlue("#87ca8a", "black", "#8c9c08"));
});

// homework part 2

// const submitButton = document.querySelector('button[type=submit]');

// const formFields = document.getElementsByClassName("form-group");

// function required () {
//     var empt = document.forms["#exampleInputEmail1"]["#example-text-input"]["#exampleTextarea"].value;
//     if (empt.length < 0) {
//         formFields.style.backgroundColor = "red";
//         return invalid;
//         }
//     } else {
//         alert('Thank you for filling out the form');
//         return valid;
//     }
// }