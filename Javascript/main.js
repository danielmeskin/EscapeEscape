escapeURL = "https://en.wikipedia.org/wiki/Dachshund";
backURL = "https://www.google.com/search?q=dachshund"

function escape() {
	window.open(escapeURL)
	location.replace(backURL);
}
window.onload = function() {
	window.onkeydown = function(key) {
		if (key.keyCode == 27) {
			escape();
		}
	}
}