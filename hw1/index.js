while (true) {
    const n = Math.round(Math.random());

    const userGuess = prompt("Я загадал число, попробуйте угадать (0 - орёл, 1 решка):");
    
    if (userGuess === "q") {
        break;
    } else if (isNaN(userGuess) || (+userGuess !== 0 && +userGuess !== 1)) {
        alert("Вы ввели некорректное значение!");
    } else if (userGuess == n) {
            alert ("Вы угадали!");
    } else {
            alert("Вы не угадали!");
    }
}
    
