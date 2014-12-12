function openDoor() {
	GLOBAL.domainEvents.emit("doorOpen", "from module 2");
}

module.exports = {
	openDoor: openDoor
};