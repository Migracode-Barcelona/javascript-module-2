/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE

const values = Object.values(kitten)
values.forEach(value => {
    console.log(value)
})