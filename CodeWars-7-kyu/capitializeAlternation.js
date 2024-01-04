/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */

function capitalize(s) {
	let s1 = "",
		s2 = "";

	for (let i = 0; i < s.length; i++) {
		const letter = s[i];

		if (i % 2) {
			s1 += letter.toUpperCase();
			s2 += letter.toLowerCase();
		} else {
			s1 += letter.toLowerCase();
			s2 += letter.toUpperCase();
		}
	}

	return [s1, s2];
}

// work around two

// function capitalize(s){
//     const s1 = s.split("").map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter).join("");
//     const s2 = s.split("").map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join("");
//     console.log([s1, s2]);
//   };

// Test Case
console.log(capitalize("codeWars"));

// Execute in terminal  => node capitializeAlternation.js
