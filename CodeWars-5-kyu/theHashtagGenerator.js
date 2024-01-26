/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false 
*/

function generateHashtag(str) {
	const trimmedString = str.trim();

	if (trimmedString === "") {
		return false;
	}

	let result = "#";

	trimmedString.split(" ").map((word) => {
		if (word.length > 0) {
			result += word.charAt(0).toUpperCase() + word.slice(1);
		}
	});

	if (result.length > 140) {
		return false;
	}

	return result;
}

// Test case
console.log(generateHashtag("     Codewars is nice     "));

// Execute in terminal  => node theHashtagGenerator.js
