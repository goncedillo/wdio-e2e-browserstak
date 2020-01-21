require("dotenv").config();

const assert = require("assert");

describe("Another test case", () => {
    it("should add paragraph", async () => {
        await browser.url(process.env.E2E_BASE_URL)

        const title = await (await browser.$("#push-btn")).click();
        const resultParagraph = await (await browser.$(".message")).isExisting();

        assert.ok(resultParagraph, "Print new message");
    });
});