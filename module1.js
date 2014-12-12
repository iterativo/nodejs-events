function openDoor(eventEmitter) {
	eventEmitter.emit("doorOpen", "from module 1");
}

module.exports = {
	openDoor: openDoor
};