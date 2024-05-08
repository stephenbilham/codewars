function encode(string) {
	// Replace all lowercase vowels with corresponding numbers
	return string.replace(/[aeiou]/g, (match) => {
		switch (match) {
			case "a":
				return "1";
			case "e":
				return "2";
			case "i":
				return "3";
			case "o":
				return "4";
			case "u":
				return "5";
		}
	});
}

function decode(string) {
	// Replace all numbers with corresponding vowels
	return string.replace(/[1-5]/g, (match) => {
		switch (match) {
			case "1":
				return "a";
			case "2":
				return "e";
			case "3":
				return "i";
			case "4":
				return "o";
			case "5":
				return "u";
		}
	});
}

// Example usage:
console.log(encode("hello")); // Output: "h2ll4"
console.log(decode("h3 th2r2")); // Output: "hi there"
