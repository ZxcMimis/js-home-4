// 1 завдання
const field1 = prompt("Введіть значення для першого поля:");
const field2 = prompt("Введіть значення для другого поля:");

if (field1 && field2) {
    alert("Обидва поля заповнені")
} else {
    alert("Не всі поля заповнені");
}

// 2 завдання

const number1 = prompt("Введіть перше число:");
const number2 = prompt("Введіть друге число:");
const num1 = Number(number1);
const num2 = Number(number2);

if (num1 + num2 > 10) {
    alert("Сума більша за 10");
} else {
    alert("Сума менша або дорівнює 10");
}


// 3 завдання

const text = prompt("Введіть текст: ")

if (text === "JavaScript") {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}

// 4 завдання

const text1 = prompt("Введіть число: ");

if (text1 >= 10 && text1 <= 20) {
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}

// 5 завдання

const name = prompt("Введіть ім`я");
const email = prompt("Введіть пошту");
const password = prompt("Введіть пароль");

if (name.length >= 3 && email.includes("@") && password.length >= 6) {
    window.location.href = "https://www.twitch.tv";
} else {
    alert("Помилка!");
}


