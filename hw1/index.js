let isPlay = true
while (isPlay) {
    let n = Math.floor(Math.random() * 1000);
    console.log(n);

    while (true) {
        const userGuess = prompt("Я загадал число в диапазоне от 0 до 999 включительно, попробуйте угадать:");
        if (userGuess === "exit") {
            isPlay = false;
            break;
        } else if (isNaN(userGuess) || (+userGuess < 0) || (+userGuess > 999)) {
            alert("Вы ввели некорректное значение!");
        } else if (userGuess > n){
            alert("Ваше число больше загаданного, попробуйте ещё!");
        } else if (userGuess < n){
            alert("Ваше число меньше загаданного, попробуйте ещё!");
        }else {
            alert("Вы угадали!");
            break;
        }
    }
}
