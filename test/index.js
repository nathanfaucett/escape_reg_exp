var tape = require("tape"),
    escapeRegExp = require("..");


tape("escapeRegExp(string: String)", function(assert) {
    assert.equal(
        escapeRegExp(/[.*+?\^${}()|\[\]\/\\]/.source),
        "\\[\\.\\*\\+\\?\\\\\\^\\$\\{\\}\\(\\)\\|\\\\\\[\\\\\\]\\\\\\/\\\\\\\\\\]",
        "should escape the RegExp special characters"
    );
    assert.end();
});
