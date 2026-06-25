const EventEmitter = require("events");
const emitter = new EventEmitter();

// Create a listener function
const welcomeUser = (name) => {
  console.log(`Welcome ${name}`);
};

// Add the listener
emitter.on("userCreated", welcomeUser);

// Trigger the event
emitter.emit("userCreated", "Sushant");
// Output: Welcome Sushant


// Trigger the event again
emitter.emit("userCreated", "Sushant");



// Remove the listener
emitter.off("userCreated", welcomeUser);


// Trigger the event again
emitter.emit("userCreated", "Sushant");
// No output because the listener was removed

