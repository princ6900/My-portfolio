
let login = prompt("Введите логин :");

if (login !== "admin") {
alert("Доступ закрыт");
} else {
let password = prompt("Введите пароль :");

if (password !== "123456") {
alert("Доступ закрыт");
} else {
let confirmPassword = prompt("Повторите пароль :");

if (confirmPassword === "123456") {
     alert("Вам предоставлен полный доступ");
  } else {
     alert("Доступ закрыт");
  }
}
}



const userInput = prompt("Введите число:");
const number = parseInt(userInput);
let sum = 0;
let i = 1;

while (i <= number) {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
}

console.log(`Сумма нечетных чисел от 1 до ${number}: ${sum}`);



const userInput = prompt("Введите число:");

// Преобразуем введенную строку в число
const number = parseInt(userInput);

let sum = 0;

// Считаем сумму нечетных чисел от 1 до введенного числа
for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(`Сумма нечетных чисел от 1 до ${number}: ${sum}`);



// Создаем массив чисел
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];

// Запрашиваем число у пользователя
const userInput = prompt("Введите число:");

// Преобразуем введенную строку в число
const userNumber = parseInt(userInput);

// Используем цикл for для проверки наличия числа в массиве
let found = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === userNumber) {
        found = true;
        break;
    }
}

// Выводим сообщение о результате
if (found) {
    console.log(`Число ${userNumber} найдено в массиве.`);
} else {
    console.log(`Число ${userNumber} не найдено в массиве.`);
}



const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
const userInput = prompt("Введите число:");
const userNumber = parseInt(userInput);

let found = false;
let i = 0;

// Используем цикл while для проверки наличия числа в массиве
while (i < numbers.length) {
    if (numbers[i] === userNumber) {
        found = true;
        break;
    }
    i++;
}

// Выводим сообщение о результате
if (found) {
    console.log(`Число ${userNumber} найдено в массиве.`);
} else {
    console.log(`Число ${userNumber} не найдено в массиве.`);
}




// Массив студентов
const students = [
    {
        name: "Анна",
        age: 20,
        grades: [4, 5, 4, 3, 5]
    },
    {
        name: "Петр",
        age: 22,
        grades: [5, 5, 5, 4, 5]
    },
    {
        name: "Елена",
        age: 21,
        grades: [4, 3, 4, 4, 5]
    }
];

// Функция для вычисления средней оценки студента
function calculateAverageGrade(student) {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / student.grades.length;
}

// Функция для поиска студента с наивысшим средним баллом
function findBestStudent(studentsArray) {
    let bestStudent = studentsArray[0];
    let highestAverage = calculateAverageGrade(studentsArray[0]);

    for (let i = 1; i < studentsArray.length; i++) {
        const currentAverage = calculateAverageGrade(studentsArray[i]);
        if (currentAverage > highestAverage) {
            highestAverage = currentAverage;
            bestStudent = studentsArray[i];
        }
    }

    return bestStudent;
}

// Вызов функции для поиска студента с наивысшим средним баллом
const bestStudent = findBestStudent(students);

// Вывод результата
console.log(`Студент с наивысшим средним баллом: ${bestStudent.name}, средний балл: ${calculateAverageGrade(bestStudent)}`);