var assert = require("assert");
import { multiply } from "../src/main";

describe("Main module", function () {
    it("should multiply two numbers", function () {
        assert.equal(multiply(7, 4), 28);
    });
});
