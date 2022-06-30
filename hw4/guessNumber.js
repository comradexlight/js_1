'use strict';

const rl = require("node:readline").createInterface(process.stdin, process.stdout);
const fs = require("fs");


const trueNumber = Number(Math.floor(Math.random() * 100));

let counter = 1;
let logShema = "";
let answer = "";

function time() {
  return new Date;
};

function question() {
  rl.question("Введи своё число: ", (cmd) => {
    if (cmd == trueNumber) {
            answer = "Бинго! Это верный ответ. Количество попыток " + counter;
      console.log(answer);
      logShema += time() + ", " + cmd + ", " + answer + "," + "\n";
      rl.close();
      
      fs.access("log.txt", fs.constants.F_OK, function(error){
        if (error) {
          fs.writeFile("log.txt", logShema, (err) => {
            if (err) throw err;
            console.log("Лог файл был создан");
          })
        }
        else {
          fs.appendFile("log.txt", logShema, (err) => {
            if (err) throw err;
            console.log('Лог файл был обновлён');
          });
        };
      });
      
    return
    
    }
    else if (cmd > trueNumber && 0 < cmd && cmd < 100) {  
            answer = "Твоё число " + cmd + ". Это больше загаданного. Это попытка номер " + counter;
      console.log(answer);
      logShema += time() + ", " + cmd + ", " + answer + ", " + "\n";
            counter++
    }
    else if (cmd < trueNumber && 0 < cmd && cmd < 100) {
            answer = "Твоё число " + cmd + ". Это меньше загаданного. Это попытка номер " + counter;
      console.log(answer);
      logShema += time() + ", " + cmd + ", " + answer + "," + "\n";
      counter++
    }
    else if (cmd > 100 || cmd < 0 || typeof(cmd) != Number) {
            answer = "Вы ввели неверное значение. Введите число от 0 до 100"
      console.log(answer);
      logShema += time() + ", " + cmd + ", " + answer + "," + "\n";
    };    
    
    question();
  });
};

console.log("Я загадал число от 0 до 100. Угадаешь?");
question();
