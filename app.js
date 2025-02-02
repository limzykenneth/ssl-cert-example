const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const index = require("./routes/index");
const room = require("./routes/room");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({
		code: err.status || 500,
		error: err.message
	});
});

// Socket.io connection handler
app.socketIOConnection = room.connection;

module.exports = app;