const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function(req, res, next) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/mobile", function(req, res, next){
	res.sendFile(path.join(__dirname, "../public/mobile.html"));
});

module.exports = router;
