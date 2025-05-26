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

const num = 50;
if (num < 49) {      /*  Первое условие и оно ложь */
    console.log('Error'); 
} else if (num > 100){  /*  Второе условие - разветвляем условие   */
    console.log('Много'); 
} else {
    console.log('Ok'); 
}








