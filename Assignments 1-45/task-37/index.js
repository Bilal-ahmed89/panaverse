function make_shirt(message, size) {
    if (message === void 0) { message = "I love TypeScript"; }
    if (size === void 0) { size = "large"; }
    console.log("A ".concat(size, " shirt will be printed with the message: '").concat(message, "'"));
}
make_shirt();
make_shirt(undefined, "medium");
make_shirt("Sorry, we dont have t-shirts in this size", "small");
