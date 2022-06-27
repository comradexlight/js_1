'use strict';

const {rejects} = require("assert");
const {resolve} = require("dns");

const rl = require("readline").createInterface(process.stdin, process.stdout);
const fs = require("fs").promises;

const time = new Date;
const trueNumber = Number(Math.floor(Math.random() * 100));

let counter = 1;
let logShema = [];
let answer = String;
let isPlay = true;

console.log("Я загадал число от 0 до 100. Угадаешь?");


function question (quest) {
    return new Promise((resolve, reject) => {
        rl.question((quest, (data) => {
            resolve(data);
        })
    })
}

async function input() {
    while (true) {
        const data = await question("Введите своё число: ");
        console.log("Вы ввели: ", data);
        rl.close();
        break
    };
};

input();
