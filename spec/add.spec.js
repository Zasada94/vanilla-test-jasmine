const add = require("../add");

describe("add", () => {
	it("should add two numbers", () => {
		const sum = add(10, 20);
		expect(sum).toEqual(30);
	});
	it("should throw an error when non-numbers", () => {
		function callAdd() {
			add(null, 2);
		}
		expect(callAdd).toThrowError('ojojoj');
	});
});
