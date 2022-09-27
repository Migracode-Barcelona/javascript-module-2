/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) {
        currentAddress = newAddress;
    },
    celebrateBirthday: function () {
        this.age = this.age + 1;
    }
};