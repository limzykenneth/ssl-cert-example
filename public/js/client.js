const socket = io("/client");

socket.on("message", (msg) => {
	console.log(msg);
});