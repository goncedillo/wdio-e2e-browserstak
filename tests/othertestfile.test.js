require("dotenv").config();

const assert = require("assert");

describe("Another test case", () => {
    it("should add paragraph", async () => {
        await browser.url(process.env.E2E_BASE_URL)

        const button = await $("#push-btn");

        await button.click();

        const message = await $(".message");

        message.waitForExist(5000);

        assert.ok(message, "Print new message");
    });
});