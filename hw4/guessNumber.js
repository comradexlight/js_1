const rl = require("readline").createInterface(process.stdin, process.stdout);

const trueNumber = Number(Math.floor(Math.random() * 100));
console.log("Я загадал число от 0 до 100. Угадаешь?");
let counter = 1;
let logShema = [];

function question() {
	rl.question("Введи своё число: ", (cmd) => {
		if (cmd == trueNumber) {
			console.log("Бинго! Это верный ответ.\nКоличество попыток", counter);
            logShema.push(cmd);
			rl.close();
			return
		}
		else if (cmd > trueNumber) {
			console.log("Твоё число", cmd, "Это больше загаданного.\nЭто попытка номер", counter);
            logShema.push(cmd);
            counter++
		}
		else if (cmd < trueNumber) {
			console.log("Твоё число", cmd, "Это меньше загаданного.\nЭто попытка номер", counter);
            logShema.push(cmd);
			counter++
		}
		else if (typeof(cmd) !== Number) {
			console.log("Вы ввели неверное значение. Введите число от 0 до 100");
            logShema.push(cmd);        
		};
		question();
	});
};

question();
