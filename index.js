var module1 = require("./module1"),
	module2 = require("./module2"),
	events = require("events"),
	eventEmitter = new events.EventEmitter();

eventEmitter.on("doorOpen", ringBell);

GLOBAL.domainEvents = eventEmitter;

module1.openDoor(eventEmitter);
module2.openDoor();

function ringBell(mssg){
	console.log("ring ring " + mssg);
}