var printMessage = document.getElementById("output-target");
console.log(printMessage);
// var sectionName  = document.getElementsByClassName("article-section").innerHTML;
// console.log(sectionName);
// document.getElementsByTagName('section').addEventListener("click", function (e) {
// 	  printMessage = "You clicked on the" + sectionName + "section";
// });

// printMessage.innerHTML = document.getElementById("page-title").onmouseover
// ("You moved your mouse over header!");

// var textBox = document.getElementById("keypress-input").value

// function printTextbox (e) {
// 	printMessage.innerHTML = textBox
// }



var guineaPig = document.getElementById("guinea-pig");
console.log(guineaPig);

document.getElementById("add-color").addEventListener("click", function(e) {
	guineaPig.style.color = "blue";
});

document.getElementById("make-large").addEventListener("click", function(e) {
	guineaPig.style.fontSize = "50px";
});

document.getElementById("add-border").addEventListener("click", function(e) {
	guineaPig.style.border= "1px solid red";
});

document.getElementById("add-rounding").addEventListener("click", function(e) {
	guineaPig.style.border= "1px solid red";
	guineaPig.style.borderRadius = "10px";
});

