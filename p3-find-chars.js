function checkBs(word) {
	for (let i = 0; i < word.length; i++ ) {
		let letter = word[i]
		if (letter === 'B') {
			return true
		}
	}
	return false
}

function countChars(word, char) {
	let count = 0
	for (let i = 0; i < word.length; i++) {
		let letter = word[i]
		if (letter === char) {
			count ++
		}
	}
	return count
}
