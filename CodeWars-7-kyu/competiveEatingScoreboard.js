/*
You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

Chickenwings: 5 points

Hamburgers: 3 points

Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

[
  {name: "Big Bob", score: 134},
  {name: "Habanero Hillary", score: 98}
]
Happy judging!
*/

function scoreboard(whoAteWhat) {
	return whoAteWhat
		.map((obj) => {
			return {
				name: obj.name,
				score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
			};
		})
		.sort((a, b) => {
			if (a.score !== b.score) {
				// Sort by score, highest to lowest
				return b.score - a.score;
			} else {
				// If scores are equal, sort by name, alphabetical order
				return a.name < b.name ? -1 : 1;
			}
		});
}

// Test Case
const participants = [
	{ name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
	{ name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 },
];

console.log(scoreboard(participants));

// Execute in terminal  => node capitializeAlternation.js
