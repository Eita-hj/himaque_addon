const { app, BrowserWindow, session } = require("electron");
const path = require("path");

app.on("ready", () => {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: false,
		},
	});
	app.on("activate", () => {
		if (!BrowserWindow.getAllWindows().length) createWindow();
	});
	mainWindow.loadURL("http://himaquest.com/");
	mainWindow.once("ready-to-show", () => {
		mainWindow.show();
	});
	mainWindow.setMenuBarVisibility(false);
	mainWindow.on("close", () => {
		if (process.platform === "darwin") return;
		app.exit();
	});
});

