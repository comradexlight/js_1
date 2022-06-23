const rl = require("readline").createInterface(process.stdin, process.stdout);

trueNumber = Number(Math.floor(Math.random() * 100));
console.log("Я загадал число от 0 до 100. Угадаешь?");
let counter = 1;

function question() {
	rl.question("Введи своё число: ", (cmd) => {
		console.log();
		if (cmd == trueNumber) {
			console.log("Бинго! Это верный ответ.\nКоличество попыток", counter);
			rl.close();
			return
		}
		else if (cmd > trueNumber) {
			console.log("Твоё число", cmd, "Это больше загаданного.\nЭто попытка номер", counter);
			counter++
		}
		else if (cmd < trueNumber) {
			console.log("Твоё число", cmd, "Это меньше загаданного.\nЭто попытка номер", counter);
			counter++
		}
		else if (cmd.typeof !== Number) {
			console.log("Вы ввели неверное значение. Введите число от 0 до 100");
		};
		question();
	});
};

question();