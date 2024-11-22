const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/gm", (req, res) => {
	let messages = ["just do it", "all the best", "u will win", "u can do it", "i will win"];
	let r = parseInt(Math.random() * messages.length);
	let msg = messages[r];
	res.send({"msg":msg});
	res.end();
});

app.listen(9000, () => { console.log("ready to serve @ 9000"); });