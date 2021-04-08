// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {

	array.sort((a,b) => {return a-b})
	const minVals = array[0] * array.filter(num => num === array[0]).length
	const maxVals = array[array.length-1] * array.filter(num => num === array[array.length-1]).length
	const total = array.reduce(((a, c) => {return a+c}), (-minVals-maxVals))

	return(total)
};

// console.log(sumWithoutHighestAndLowest([6,10, 2, 1, 1, 8, 10]))
module.exports = sumWithoutHighestAndLowest;
