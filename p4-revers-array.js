// reverse array and make new
function reverseArray(arr) {
	let newArray = []
	let end = arr.length
	for (let i = 1; i <= end; i ++ ) {
		let element = arr[arr.length - i]
		newArray.push(element)
	}
	return newArray
}

// reverse and modify existing
function reverseArrayInPlace(arr) {
	// swap elements , first with last, second with second-to-last
	let mid = Math.floor(arr.length / 2)
	for (let i = 0; i < mid; i++ ) {
		let a = arr[i]
		let b = arr[arr.length - i - 1]
		arr[i] = b 
		arr[arr.length - i - 1] = a
	}
	return arr
}
