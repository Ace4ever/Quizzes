
// Create a variable that is an empty string.
// Create a variable that holds an empty array.
// Create a variable that holds the value of 2.
// Add the names of ten fruits to the array. Make sure some of the fruits have the letter 'a' in them.
// Set up code to loop over every other item in your array of fruits.
// Inside the loop, check if there is the letter 'a' in the name of the current fruit.
// If there is an 'a' anywhere in the current fruit name, then replace it with an 'e'.
// Add the new name of the fruit to the variable that was initially set up as an empty string (see step 1).
// Update the contents of the fruit-list DOM element with the new fruit name. Each fruit should be displayed as a block-level element type.
// Each block-level element that contains a fruit name should have a background color (of your choice) applied to it.
// The entire fruit list should have a 1px border around it (not each one individually).
// The first fruit's name should be bold text.
// The last fruit's text should be 20px in size and the entire element should have a different background color.

var myString = "";

var fruit = [];

var aNumber = 2;


fruit.push("Bananas", "Apples", "Pineapple", "Avocado", "Peach", "Lemon", "Watermelon", "Olive", "Grape", "Cherry")

console.log("fruit", fruit);

for (var i = 0; i < fruit.length; i += 2) {
	console.log(fruit[i]);
	var changedLetter = fruit[i].replace("a", "e");
	changedLetter.split("");
	console.log("changedLetter", changedLetter);

	myString += "<div>" + changedLetter + "</div>";
	console.log(myString);

};

	var element = document.getElementById("fruit-list");
	element.innerHTML = myString;
	console.log(element.innerHTML);

