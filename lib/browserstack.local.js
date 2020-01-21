require("dotenv").config();

var browserstack = require('browserstack-local');
var bs_local = new browserstack.Local();
var bs_local_args = { 'key': process.env.BROWSERSTACK_KEY, 'force': 'true', "verbose": true };

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
