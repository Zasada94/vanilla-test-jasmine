function add(a, b) {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	}
	throw Error("ojojoj");
}

module.exports = add;
