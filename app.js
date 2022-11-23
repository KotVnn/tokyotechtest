const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
let caseNum = 0;
let count = 1;
const maxCase = 100;
const maxScore = 10;

const guess = (el) => {
	const x = parseInt(el.split(' ')[0]);
	const y = parseInt(el.split(' ')[1]);
	const regex = /^\d \d/g;
	if (!regex.test(el)) {
		console.error('Score must be separated by a space');
		return rl.close();
	}
	if (x >= maxScore || y >= maxScore) {
		console.error('Score need small or equal ' + maxScore);
		return rl.close();
	}
	let countGuess = 1;
	if (x === 0 || y === 0) count = 1;
	else {
		for (let i = 1; i <= x; i++) {
			for (let j = 1; j <= y; j++) {
				countGuess++;
			}
		}
	}
	console.info(countGuess);
}

const inputScore = () => {
	if (count <= caseNum) {
		rl.question(`Case ${count}, score is: `, function (score) {
			guess(score);
			count++;
			inputScore();
		});
	}
};

rl.question('How many case do you want ? ', function (n) {
	const number = parseInt(n);
	if (number <= maxCase) {
		caseNum = parseInt(n);
		inputScore();
	} else {
		console.error('Case need small or equal ' + maxCase);
		rl.close();
	}
});

rl.on('close', function () {
	console.log('\nBYE BYE !!!');
	process.exit(0);
});
