'use strict' 

// 1 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 7;
// let season;

// if (month === 1 || month === 2 || month === 12) {
//    season = 'Зима';
// } else if (month === 3 || month === 4 || month === 5){
//     season = 'Весна';
// } else if (month === 6 || month === 7 || month === 8){
//     season = 'Лето';
// } else if (month === 9 || month === 10 || month ===11){
//     season = 'Осень';
// };
// console.log(`Сезон года:${season}`);


// 2 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let stroca = 'abcde';
// let firstSimvol = stroca[0];
// if (firstSimvol === 'a') { 
//     stroca = 'правда';
// } else if (firstSimvol !== 'a') { 
//     stroca = 'не правда';
// };
// console.log(`Первая буква а это: ${firstSimvol}`);

// 3 Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let number = 12345;
// let firstSimvol = String(number)[0]; // Преобразуем число в строку и берём первый символ
//     firstSimvol = String(number)[1];
//     firstSimvol = String(number)[2];
// if (firstSimvol === '1' || firstSimvol === '2' || firstSimvol === '3') {
//     console.log('да');
// } else {
//     console.log('нет');
// }

// Необходимо в зависимоти входных строк вернуть верное число
// вход = 'понедельник'
// выход = 1
// вход = 'вторник'
// выход = 2
// вход = 'член'
// выход = 'Введен не существующий день'

// let denNedeli;
// let den = 'член';

// if (den === 'понедельник'){
//   console.log(denNedeli = 1);
// } else if (den === 'вторник'){
//   console.log(denNedeli = 2);
// } else if (den === 'член' ){
//   console.log(denNedeli = 'Введен не существующий день');
// }; 


let den = 'понедельник';
let denNedeli;
switch (den) {
  case 'понедельник':
  console.log(denNedeli = 1);
  break;

  case 'вторник':
    console.log(denNedeli = 2);
  break;

  case 'член':
    console.log(denNedeli = 'Введен не существующий день');
    break;
};


// Необходимо в зависимоти входнго число вернуть нужную строку

// вход = 0-12
// выход = 'ребенок'

// вход = 12-18
// выход = 'подросток'

// вход = 18-50
// выход = 'взрослый'

// вход = 50-100
// выход = 'старый'

// вход = 100 и больше 
// выход = 'смерть'

// вход = меньше 0 
// выход = 'пока не родился'

// let num = 0;
// let vozrast;
// if (num >= 0.1 && num <= 12){
//   console.log(vozrast = 'ребенок');
// } else if (num >= 12 && num <= 18){
//   console.log(vozrast = 'подросток');
// } else if (num >= 18 && num <= 50){
//   console.log(vozrast = 'взрослый');
// } else if (num >= 50 && num <= 100){
//   console.log(vozrast = 'старый');
// } else if (num >= 100 && num <100){
//   console.log(vozrast = 'смерть');
// } else if (num >= 0 ){
//   console.log(vozrast = 'пока не родился')
// };







