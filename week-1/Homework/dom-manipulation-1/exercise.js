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

//#1
console.log(document.querySelectorAll('p'))

//#2
console.log(document.querySelector('div'))

//#3
console.log(document.querySelector('#jumbotron-text'))

//#4
console.log(document.querySelectorAll('.primary-content p'))


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector('#alertBtn')
alertBtn.addEventListener('click', (e) => {
    alert("Thanks for visiting Bikes for Refugees!")
})

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const bgrChangeBtn = document.querySelector('#bgrChangeBtn')
// bgrChangeBtn.addEventListener('click', (e) => {
//     document.querySelector('body').style.backgroundColor = 'purple'
// })


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const addTextBtn = document.querySelector('#addTextBtn')
addTextBtn.addEventListener('click', (e) => {

    const paragraph = document.createElement('p')
    const learnMore = document.querySelector('.heading-underline')

    learnMore.appendChild(paragraph)
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector('#largerLinksBtn')
largerLinksBtn.addEventListener('click', (e) => {

    const allLinks = document.querySelectorAll('a')

    allLinks.forEach(link => {
        link.style.fontSize = '1.5em'
    })

})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addBtn = document.querySelector('#addArticleBtn')
addBtn.addEventListener('click', (e) => {

    const inputField = document.querySelector('.addArticle')
    const paragraph = document.createElement('p')
    paragraph.innerHTML = inputField.value
    const learnMore = document.querySelector('.heading-underline')
    learnMore.appendChild(paragraph)
    inputField.value = ' '
})



/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors = ['blue', 'purple', 'red', 'orange', 'black']
bgrChangeBtn.addEventListener('click', (e) => {

    let bodyStyle = document.querySelector('body').style

    if (bodyStyle.backgroundColor) {
        //find the index
        const index = colors.findIndex((color) => color === bodyStyle.backgroundColor)
        //set the color to the next element in the array
        if (index === 4) {
            bodyStyle.backgroundColor = colors[0]
        } else {
            const newIndex = index + 1
            bodyStyle.backgroundColor = colors[newIndex]
        }
    } else {
        bodyStyle.backgroundColor = colors[0]
    }
})