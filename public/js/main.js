const socket = io("/host");

socket.on("message", (msg) => {
	console.log(msg);
});
