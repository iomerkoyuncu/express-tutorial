const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const messages = [
	{
		name: "Jhon",
		email: "email@email.com",
		message: "Jhon's message",
	},
];

app.post("/contact", (req, res) => {
	const message = req.body;
	console.log(message);
	messages.push(message);
});

app.get("/contact", (req, res) => {
	res.send(messages);
});

app.listen(3001, () => {
	console.log("server running. . .");
});
