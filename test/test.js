var assert = require("assert"),
    escapeRegExp = require("../src/index");


describe("escapeRegExp(string)", function() {
    it("should escape the RegExp special characters", function() {
        assert.equal(
            escapeRegExp(/[.*+?\^${}()|\[\]\/\\]/.source),
            "\\[\\.\\*\\+\\?\\\\\\^\\$\\{\\}\\(\\)\\|\\\\\\[\\\\\\]\\\\\\/\\\\\\\\\\]"
        );
    });
});
