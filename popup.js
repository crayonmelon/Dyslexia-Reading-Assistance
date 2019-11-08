console.log("the background is working?");

var colourChoice = "yellow";

function run(tab) {

	let params = {
		active: true,
		currentWindow: true
	}
	chrome.tabs.query(params, gotTabs);

	function gotTabs(tabs){

		let msg = {
			txt: "hello",
			colour: colourChoice
		}

		chrome.tabs.sendMessage(tabs[0].id, msg);
	}
}

function yellowClick() {
	colourChoice = "yellow";
	console.log("yellow");
}

function blueClick() {
	colourChoice = "blue";
	console.log("blue");
}

function redClick() {
	colourChoice = "red";
	console.log("red");
}

function greenClick() {
	colourChoice = "green";
	console.log("green");
}

function pinkClick() {
	colourChoice = "pink";
	console.log("pink");
}

document.getElementById('yellowColour').addEventListener('click', yellowClick);
document.getElementById('blueColour').addEventListener('click', blueClick);
document.getElementById('redColour').addEventListener('click', redClick);
document.getElementById('greenColour').addEventListener('click', greenClick);
document.getElementById('pinkColour').addEventListener('click', pinkClick);
document.getElementById('buttonClicked').addEventListener('click', run);



