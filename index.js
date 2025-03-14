// Function that receives a function and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function.");
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return () => console.log("This is an anonymous function.");
}

// Export the functions if required for testing
module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
