var app = require("../js/pow.js");

describe("A suite", function() {
	it("call pow method", function () {
		var result;

		result = app.pow(3,4);

		expect(result).toBe(81);
	})
})