escapeURL = "https://en.wikipedia.org/wiki/Dachshund";
backURL = "https://www.google.com/search?q=dachshund"

function escape() {
	window.open(escapeURL)
	location.replace(backURL);
}
window.onload = function() {
	preloadEscape='<link rel="prefetch" href="' + escapeURL + '" as="document">'
	preloadBack='<link rel="prefetch" href="' + backURL + '" as="document">'
	console.log(preloadEscape,preloadBack)
	document.getElementsByTagName('head')[0].innerHTML+=(preloadEscape)
	document.getElementsByTagName('head')[0].innerHTML+=(preloadBack);
	window.onkeydown = function(key) {
		if (key.keyCode == 27) {
			escape();
		}
	}
}