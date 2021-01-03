// print 7 layer pyramid of #

function ex1() {
	let symb = '#'

	let counter = 0 
	
	while (counter < 7) {
		console.log(symb)
		symb += '#'
		counter++
	}
}

//ex1()

// FizzBuzz

function fizzBuzz() {
	for (let number = 1; number <= 100; number ++) {
		if (number % 3 == 0 && number % 5 == 0) {
			console.log('FizzBuzz')
		} else if (number % 3 == 0) {
			console.log('Fizz')
		} else if (number % 5 == 0) {
			console.log('Buzz')
		} else {
			console.log(number)
		}
	}
}

//fizzBuzz()

function grid(size) {
	let grid = "";

	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			if ((x+y) % 2 == 0) {
				grid += " "
			} else {
				grid += "#"
			}
		}
		grid += "\n"
	}
	console.log(grid)
}

grid(8)