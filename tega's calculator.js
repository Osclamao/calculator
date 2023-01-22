var play = document.getElementById("disp");

function display(value) {
	play.value += value;
}

function remove() {
	play.value = "";
}

function cback() {
	document.getElementById("img").src = "../poster backgrounds/iback.jpg"
}

function rcback() {
	document.getElementById("img").src = "../poster backgrounds/back.jpg"
}

function aback() {
	document.getElementById("img").src = "../poster backgrounds/bback.jpg"
}

function equal() {
	var answer = eval(play.value)

	play.value = answer;
}

function back() {
		play.value = play.value.slice(0,-1);
	}