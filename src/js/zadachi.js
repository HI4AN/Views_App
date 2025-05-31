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

// 4 Необходимо в зависимоти входных строк вернуть верное число
// вход = 'понедельник'
// выход = 1
// вход = 'вторник'
// выход = 2
// вход = 'член'
// выход = 'Введен не существующий день'

// // 1. if способ
// let denNedeli;
// let den = 'член';
// if (den === 'понедельник'){
//   console.log(denNedeli = 1);
// } else if (den === 'вторник'){
//   console.log(denNedeli = 2);
// } else if (den === 'член' ){
//   console.log(denNedeli = 'Введен не существующий день');
// }; 

// // 2. switch способ
// let den = 'понедельник';
// let denNedeli;
// switch (den) {
//   case 'понедельник':
//   console.log(denNedeli = 1);
//   break;
//   case 'вторник':
//   console.log(denNedeli = 2);
//   break;
//   case 'член':
//   console.log(denNedeli = 'Введен не существующий день');
//   break;
// };


// // 5 Необходимо в зависимоти входнго число вернуть нужную строку
// // вход = 0-12
// // выход = 'ребенок'
// // вход = 12-18
// // выход = 'подросток'
// // вход = 18-50
// // выход = 'взрослый'
// // вход = 50-100
// // выход = 'старый'
// // вход = 100 и больше 
// // выход = 'смерть'
// // вход = меньше 0 
// // выход = 'пока не родился'

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

// let num = 12;
// let vozrast;
//
// switch (true) {
//   case (num >= 0.1 && num <= 12):
//     console.log( vozrast = 'ребенок');
//     break;
//   default:
//     console.log('пока не родился');
//     break;
// }



// let num = 3;
// let vozrast;
// switch (num) {
//   case num >= 0.1 && num <= 12:
//   console.log(vozrast = 'switch ребенок');
//   default: {
//     console.log('switch dada');
//   }
// };


// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }
// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл
// for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;  
//         console.log(i);
//   }

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for (let i = 2; i <= 10; i++){
//   if (i % 2 !== 0) {  
//     continue;  
//   }
// console.log(i);
// }


// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. 
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.
//  Цикл, который нужно переписать:
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }

// let i = 2
//   while (i < 16) {
//    i++;
//     if (i % 2 === 0)
//     continue;
// console.log(i);
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать 
// так же, как и обращаться к ним: arr[0]
// let arr = []
//   for (let i = 0 ;i <= 5; i++){
//   arr [i]= 5 + i; 
//   }
//   console.log(arr);
//   return arr
  

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить 
// как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// let arr = [1,2,4,5,6];
// let result = [];
// for (let i = 0; i <arr.length; i++){
//   result[i]=arr[i];
// };
// console.log(result);


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const arr = [ 5, 10, 'Shopping', 20, 'Homework' ];
//   for (let i = 0; i < arr.length; i++){
//      if (typeof(arr[i]) === 'number') {
//       arr[i]=arr[i]*2;
//   } else if (typeof(arr[i]) === 'string'){
//       arr[i]=`${arr[i]} - done`;
//   }
// }
// console.log(arr);

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// let data = [5, 10, 'Shopping', 20, 'Homework' ];
// let result = [];
// for (let i = 1; i <= data.length; i++){
// result[i - 1]=data[data.length - i] 
// }
// console.log(result);




