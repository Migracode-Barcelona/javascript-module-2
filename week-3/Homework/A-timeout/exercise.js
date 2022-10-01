/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

//task 1

setTimeout(() => {
    document.querySelector("body").style.backgroundColor = 'purple'

}, 5000)


//task 2

const changeColor = () => {
    let bodyStyle = document.querySelector('body').style
    let colors = ['red', 'purple', 'green', 'pink', 'blue', 'black']
    let index = Math.round(Math.random() * 10)
    if (index >= 0 && index <= 5) {
        bodyStyle.backgroundColor = colors[index]
    }

}

setInterval(() => {
    changeColor()
}, 5000)

