require("dotenv").config();

const assert = require("assert");

describe("A test case", () => {
    it("should run perfectly", async () => {
        await browser.url(process.env.E2E_BASE_URL)
        const title = await (await browser.$("#onlyp")).getText();
        assert.strictEqual(title, 'Hi!')
    });
});