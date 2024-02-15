// no forloop or map ..  saw on linkedin wanted to do it

// const noLoop = (start, end) => {
// 	return Array.from(Array(end - start + 1), (_, i) => i + start);
// };

// I think this is more what they were asking for (no iteration)
const noLoop = (start, end) => {
	let result = Array.from(Array(end - start + 2).keys()).slice(1);
	return result;
};

// Test case
console.log(noLoop(1, 50));

// Execute in terminal  => node noIteration.js
