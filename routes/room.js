const connection = function(io){
	io.of("/host")
		.on("connection", (socket) => {
			socket.emit("message", "Hello Host!");
		});

	io.of("/client")
		.on("connection", (socket) => {
			socket.emit("message", "Hello Client!");
		});
};

module.exports = {
	connection
};