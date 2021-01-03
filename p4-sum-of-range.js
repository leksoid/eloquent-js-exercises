// range functiom, takes 2 arguments and returns an array

function range(start, end, step = 1) {
	let arr = []
	if (start > end) {
		for (start; start >= end; start += step ) {
			arr.push(start)
		}
	} else {
		for (start; start <= end; start += step ) {
			arr.push(start)
		}
	}
	console.log(arr)
	return arr
}

// sum function, sum all arguments

function sum(...arr) {
	let result = 0
	for (let number of arr) {
		result += number
	}
	return result
}
