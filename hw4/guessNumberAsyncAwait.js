'use strict';

const rl = require("node:readline/promises").createInterface(process.stdin, process.stdout);
const fs = require("fs/promises");

const trueNumber = Number(Math.floor(Math.random() * 100));

let counter = 1;
let logShema = "";
let answer = "";

console.log("Я загадал число от 0 до 100. Угадаешь?");

function checkAccess(path) {
  return fs.access(path, fs.constants.F_OK)
           .then(() => true)
           .catch(() => false)
}


async function question() {
    const cmd = await rl.question("Введи своё число ");
	
		if (cmd == trueNumber) {
			answer = "Бинго! Это верный ответ. Количество попыток " + counter;
			console.log(answer);
			logShema += Date() + ", " + cmd + ", " + answer + "," + "\n";
			isPlay = false;
			rl.close();
			if (checkAccess("logAA.txt")) {
				fs.appendFile("logAA.txt", logShema);
				console.log('Лог файл был обновлён');
			}
			else if (!checkAccess("logAA.txt")) {
				fs.writeFile("logAA.txt", logShema);
				console.log("Лог файл был создан");
			};
			return
		}
		
		else if (cmd > trueNumber && 0 < cmd && cmd < 100) {  
				answer = "Твоё число " + cmd + ". Это больше загаданного. Это попытка номер " + counter;
		  console.log(answer);
		  logShema += Date() + ", " + cmd + ", " + answer + ", " + "\n";
				counter++
		}
		
		else if (cmd < trueNumber && 0 < cmd && cmd < 100) {
				answer = "Твоё число " + cmd + ". Это меньше загаданного. Это попытка номер " + counter;
		  console.log(answer);
		  logShema += Date() + ", " + cmd + ", " + answer + "," + "\n";
		  counter++
		}
		
		else if (cmd > 100 || cmd < 0 || typeof(cmd) != Number) {
				answer = "Вы ввели неверное значение. Введите число от 0 до 100"
		  console.log(answer);
		  logShema += Date() + ", " + cmd + ", " + answer + "," + "\n";
		};
		
	question();	
};

question();
