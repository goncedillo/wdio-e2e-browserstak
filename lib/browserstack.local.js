require("dotenv").config();

var browserstack = require('browserstack-local');

// creates an instance of Local
var bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
var bs_local_args = { 'key': process.env.BROWSERSTACK_KEY, 'force': 'true', "verbose": true };

// // starts the Local instance with the required arguments
bs_local.start(bs_local_args, function () {
    console.log("Started BrowserStackLocal");
});

process.on("SIGINT", () => {
    console.log("\n Closing Browserstack tunnel gracefuly...");

    if (bs_local.isRunning()) {
        return process.exit();
    }

    bs_local.stop(function () {
        console.log("\n Stopped BrowserStackLocal");
        process.exit();
    });


});

process.stdin.resume();

// // check if BrowserStack local instance is running

// stop the Local instance
