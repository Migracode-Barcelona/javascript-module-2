/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const allElementP = document.querySelectorAll('p');
console.log(allElementP[0,5]);

const firstDiv = document.querySelector('.site-header');
console.log(firstDiv);

const jumbotronElement = document.querySelector('#jumbotron-text');
console.log(jumbotronElement);

const primaryContent = document.querySelector('.primary-content');
const primaryAll = primaryContent.querySelectorAll("p");
console.log(primaryAll);


/*Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector('#alertBtn');

alertButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const changeColorButton = document.querySelector('#bgrChangeBtn');

function changeColor (color) {
    document.body.style.background = color;
}

changeColorButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(changeColor("beige"));
});

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addTextButton = document.querySelector('#addTextBtn');
const mainArticles = document.querySelector("#mainArticles");

addTextButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Here a new paragraph";
    mainArticles.appendChild(newParagraph);
});


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const largerLinksButton = document.querySelector('#largerLinksBtn');
const allLinks = document.getElementsByClassName('nav-link');

console.log(largerLinksButton);
console.log("allLinks", allLinks);

largerLinksButton.addEventListener("click", (event) => {
    event.preventDefault();
    [...allLinks].forEach((link) => {
    link.style.fontSize = "25px";
})
});


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addArticleButton = document.querySelector("#addArticleBtn");
const selectInput = document.querySelector("input");

addArticleButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newParagraphAdd = document.createElement("p");
    newParagraphAdd.textContent = selectInput.value;
    mainArticles.appendChild(newParagraphAdd);
    selectInput.value = "";
});


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const changeColorButtonAgain = document.querySelector('#bgrChangeBtn');

let index = 0;

const colorChange = (event) => {
    const colors = ['pink', 'green', 'blue', 'purple', 'orange'];
    event.preventDefault();
    document.body.style.backgroundColor = colors[index];
    if(index === 4) {
        index = 0;
    } else {
    index++;
    };
};

changeColorButtonAgain.addEventListener("click", colorChange);