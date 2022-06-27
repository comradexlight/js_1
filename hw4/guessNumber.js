'use strict';

const rl = require("readline").createInterface(process.stdin, process.stdout);
const fs = require("fs").promises;

const time = new Date;
const trueNumber = Number(Math.floor(Math.random() * 100));

let counter = 1;
let logShema = [];
let answer = String;

console.log("Я загадал число от 0 до 100. Угадаешь?");

function question() {
	rl.question("Введи своё число: ", (cmd) => {
		if (cmd == trueNumber) {
            answer = "Бинго! Это верный ответ.\nКоличество попыток " + counter;
			console.log(answer);
            logShema.unshift(time, "\nновая игра.\n");
            logShema.push(cmd, answer, "\n")
            if (!fs.access("log.txt")) {
                fs.writeFile("log.txt", logShema.toString(), "utf8");
            }
            else if (fs.access("log.txt")) {
                fs.appendFile("log.txt", logShema.toString(), "utf8");
            };
			rl.close();
			return
		}
		else if (cmd > trueNumber && 0 < cmd && cmd < 100) {
            answer = "Твоё число " + cmd + ". Это больше загаданного. Это попытка номер " + counter + "\n";
			console.log(answer);
            logShema.push(cmd, answer);
            counter++
		}
		else if (cmd < trueNumber && 0 < cmd && cmd < 100) {
            answer = "Твоё число " + cmd + ". Это меньше загаданного. Это попытка номер " + counter + "\n";
			console.log(answer);
            logShema.push(cmd, answer);
			counter++
		}
		else if (cmd > 100 || cmd < 0 || typeof(cmd) != Number) {
            answer = "Вы ввели неверное значение. Введите число от 0 до 100\n"
			console.log(answer);
            logShema.push(cmd, answer);        
		};		
		
		question();
	});
};

question();
