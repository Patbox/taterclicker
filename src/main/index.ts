let num: bigint = 0n;

// @ts-ignore
const tater: HTMLImageElement = document.getElementById('tater');
// @ts-ignore
const numbers: HTMLDivElement = document.getElementById('numbers');




tater.onclick = function () {
	let data = localStorage.getItem('🥔');
	if (data == 'Infinity' || data == '-Infinity' || data == 'NaN' || data == '-NaN' || data == null) data = '0';
	num = BigInt(data);
	num = num + 1n;

	if (num % 20n == 0n) {
		document.body.style.backgroundColor = randomColor();
	}

	localStorage.setItem('🥔', num.toString());

	numbers.innerHTML = num.toString().replace('n', '');

	if (num >= 100) {
		tater.src = 'https://cdn.discordapp.com/emojis/559880832148439077.png';
	}

	if (num >= 200) {
		tater.src = 'https://cdn.discordapp.com/emojis/707018250961289276.png';
	}

	if (num >= 500) {
		tater.src = 'https://cdn.discordapp.com/emojis/749221602486517780.png';
	}

	if (num >= 1000) {
		tater.src = 'https://cdn.discordapp.com/emojis/757177176419467305.png';
	}
};

function randomColor() {
	const x = Math.floor(Math.random() * 7);

	switch (x) {
		case 0:
			return '#4281A4';
		case 1:
			return '#C1666B';
		case 2:
			return '#48A9A6';
		case 3:
			return '#A24936';
		case 4:
			return '#3E5641';
		case 5:
			return '#FF9A6B';
		case 6:
			return '#C99DA3';
		case 7:
			return '#996888';
	}
}
