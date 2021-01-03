function arrayToList(arr) {
	let list = {}
	list['value'] = arr[0]
	arr.shift()
	list['rest'] = arr.length === 0 ? null : arrayToList(arr)
	return list
}

function listToArray(list) {
	let arr = []
	for (let node = list; node; node = node.rest) {
		arr.push(node.value)
	}
	return arr
}
