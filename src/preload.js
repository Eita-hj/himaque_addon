window.addEventListener("load", async () => {
	globalThis.addonApp = true;
	document.getElementsByClassName("orenosakuhin")[0].innerHTML = ""
	fetch("http://hcqtools.com/addon/code.js", {
		cache: "no-store",
	})
		.then((n) => n.text())
		.then(eval);
});
