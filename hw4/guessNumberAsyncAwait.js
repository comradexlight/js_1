'use strict';

const rl = require("node:readline/promises").createInterface(process.stdin, process.stdout);
const fs = require("fs");

const trueNumber = Number(Math.floor(Math.random() * 100));

let counter = 1;
let logShema = "";
let answer = "";
let isPlay = true;

function time() {
  return new Date;
};

console.log("Я загадал число от 0 до 100. Угадаешь?");

async function question() {
    const cmd = await rl.question("Введи своё число ");
    console.log(cmd);
    rl.close();
};

question();
