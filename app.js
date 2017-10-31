
require("dotenv").config();
const body = require("body-parser");
const express = require("express");
const app = express();
const blog = require("./modles/blog");
const sql = require("./assets/sql");

app.use(express.static("assets"));


app.set("view engine", "ejs");
app.use(body.urlencoded());
app.use(body.json());


function renderBlog(res,message) {
	blog.findAll().then(function(title) {
		res.render("blog", {
			title:title,
			body: message,
		});
	});
}

app.get("/", function(req, res) {
	res.render("portfolio");
});

app.get("/blog", function(req, res) {
	renderBlog(res);
});

app.get("/form", function(req, res) {
	res.render("form");
});

app.post("/blog", function(req, res) {
	blog.create({
		title: req.body.title,
		body: req.body.message,
	})
	.then(function() {
		renderBlog(res);
	});
});

sql.sync().then(function() {
	const port = process.env.PORT || 3000;

	app.listen(port, function() {
		console.log("Listening at http://localhost:" + port);
	});
});
