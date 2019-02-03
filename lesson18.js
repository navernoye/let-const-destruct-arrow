// 1 
// Деструктурируйте массив 
// const array = ["13","Jack","Walker","Sincere@april.biz"]; 
// const [age, name, surname, site] = array;
// console.log(age);

// 2 
// Деструктурируйте первые 3 элемента массива, остальные получите с помощью spread оператора 
// const array = ["2","JackErvin","Howell","Shanna@melissa.tv","010-692-6593","anastasia.net"]; 
// const [age, name, surname, site, ...rest] = array;
// console.log(rest);

// 3 
// Деструктурируйте массив, установите каждому элементу значение по умолчанию. 
// const array = ["3","Clementine","Bauch","Nathan@yesenia.net"]; 
// const [age = "5" , name = "John", surname = "Bobby", site = "bob.com"] = array;
// console.log(name);

// 4 
// Деструктурируйте объект 
// const obj = { 
// "id": 1, 
// "name": "Leanne Graham", 
// "username": "Bret", 
// "email": "Sincere@april.biz" 
// }; 
// const{id, name, username, email} = obj;
// console.log(username);

// 5 
// Деструктурируйте объект, присвойте свойство объекта в переменную с другим именем 
// const obj = { 
// "id": 2, 
// "name": "Ervin Howell", 
// "username": "Antonette", 
// "email": "Shanna@melissa.tv" 
// }; 
// const{id = "3", name = "Kolya", username = "Vika", email = "@@@"} = obj;
// console.log(username);

// 6 
// Деструктурируйте первые 2 элемента объекта, остальные получите с помощью spread оператора 
// const obj = { 
// "id": 6, 
// "name": "Mrs. Dennis Schulist", 
// "username": "Leopoldo_Corkery", 
// "email": "Karley_Dach@jasper.info" 
// }; 
// const{id, name, ...rest} = obj;
// console.log(rest);

// 7 
// Деструктурируйте объект(Я в вас верю) 
// const obj = { 
// "id": 5, 
// "name": "Chelsey Dietrich", 
// "username": "Kamren", 
// "email": "Lucio_Hettinger@annie.ca", 
// "address": { 
//     "street": "Skiles Walks", 
//     "suite": "Suite 351", 
//     "city": "Roscoeview", 
//     "zipcode": "33263", 
//     "geo": { 
//         "lat": "-31.8129", 
//         "lng": "62.5342" 
//         } 
//     }, 
// "phone": "(254)954-1289", 
// "website": "demarco.info", 
// "company": { 
//     "name": "Keebler LLC", 
//     "catchPhrase": "User-centric fault-tolerant solution", 
//     "bs": "revolutionize end-to-end systems" 
//     } 
// }; 
// const{id, name, username, email, address:{street, suite, city, zipcode, geo: {lat, lng}}, phone, website, company:{name:n, catchPhrase,bs}} = obj;
// console.log(lng);

// 8 
// Напишите функцию которая деструктурирует объект user, и выводит информацию о пользователе. 
// (Функция имеет параметры по умолчанию, используйте строку-шаблон) 

// const obj = { 
// "id": 5, 
// "name": "Chelsey Dietrich", 
// "username": "Kamren", 
// "email": "Lucio_Hettinger@annie.ca" 
// }; 

// function getInfo({id:i = "0", name:n = "anonymous", username:u = "unknown", email:e = "unknown"}={}) { 
//     return `Hello dear ${n}
//     id : ${i}
//     username : ${u}
//     email : ${e}`
// } 

// console.log(getInfo(obj)); 
// console.log(getInfo()); 


// 9 
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов: 
// Используйте метод reduce, spread оператор 

// function sum(...rest){
//    const res = rest.reduce((a, b) => a + b, 0);
// //    const res = Array.prototype.reduce.call(arguments, (a, b) => a + b, 0); // вариант 2
//    return console.log(res);
// }

// sum(); 
// sum(1); 
// sum(1, 2); 
// sum(1, 2, 3); 
// sum(1, 2, 3, 4);


// 10 
// const arr = [5,6,7,3,4]; 
// // console.log(Math.min.apply(Math, arr));

// const min = Math.min(...arr);
// console.log(min);

// Напишите аналогичный вызов метода без использования метода apply, и применением spread оператора 

// 11 
// Перепишите цикл через map 
// Код ниже получает из массива строк новый массив, содержащий их длины: 

// const arr = ["Есть", "жизнь", "на", "Марсе"]; 

// // var arrLength = []; 
// // for (var i = 0; i < arr.length; i++) { 
// // arrLength[i] = arr[i].length; 
// // } 
// const arrLength = arr.map(a => a.length)

// console.log( arrLength ); // 4,5,2,5 
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map, 
// метод map должен принимать стрелочную функцию, исправить объявления переменных(уберите var) 


// 12 
// Массив частичных сумм 
// На входе массив чисел, например: arr = [1,2,3,4,5]. 
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм. 
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно. 
// То есть: 
// для arr = [ 1, 2, 3, 4, 5 ]
// const arr = [ 1, 2, 3, 4, 5 ];
// const arr2 = [-2,-1,0,1];
// function getSums( arg ){
//     let resArr = [];
//     for (let i = 1; i <= arg.length ; i++ ){
//         const item = arg.slice(0, i);
//         const sum = item.reduce((a, b) => a + b, 0);
//         resArr.push(sum);
//     }
//     console.log ( resArr );
// }
// getSums( arr );
// getSums( arr2 );
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ] 
// Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2]. 
// Функция не должна модифицировать входной массив. 
// В решении используйте метод arr.reduce. 
// В решение используйте стрелочные функции, обэявления переменных с помощью const/let 

// 13 
// Получите массив положительных чисел.(В решение используйте стрелочные функции) 
// const arr = [1,-1, 2, -2, 3];
// const positiveArr = arr.filter(el => el > 0);
// console.log( positiveArr );


// 14 
// Отсортируйте массив в обратном порядке.(В решение используйте стрелочные функции) 
// const arr = [1,5,3,6,2,7,12,24,8,9];
// const sortArr = arr.sort((a, b) => a - b < 0);
// console.log( sortArr );

// 15 
// Перепишите данный декоратор с помощью стрелочных функций. Исправьте объявления переменных 
// function defer(f, ms) { 
// return function() { 
// var args = arguments; 
// var ctx = this; 
// setTimeout(function() { 
// return f.apply(ctx, args); 
// }, ms); 
// } 
// }

// function defer(f, ms){
//     return (...rest) => setTimeout( (() => f(rest)), ms )
// }

// function sayHi(who) { 
// console.log('Привет, ' + who); 
// }

// const sayHiDeferred = defer(sayHi, 2000); 
// sayHiDeferred("Вася"); 

// 16 
// Вызов user.checkPassword() в коде ниже должен, при помощи ask, 
// спрашивать пароль и вызывать loginOk/loginFail в зависимости от правильности ответа. 
// Однако, его вызов приводит к ошибке. Почему? 
// Исправьте двумя способами 

// "use strict"; 
// Способ 1 - через bind
// function ask(question, answer, ok, fail) { 
// const result = prompt(question, ''); 
// if (result.toLowerCase() == answer.toLowerCase()) ok(); 
// else fail(); 
// } 

// const user = { 
// login: 'Василий', 
// password: '12345', 

// loginOk: function() { 
// alert( this.login + ' вошёл в сайт' ); 
// }, 

// loginFail: function() { 
// alert( this.login + ': ошибка входа' ); 
// }, 

// checkPassword: function() { 
// ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this)); 
// } 
// }; 

// user.checkPassword();

//Способ 2 - стрелочные функции 
// function ask(question, answer, ok, fail) { 
//     const result = prompt(question, ''); 
//     if (result.toLowerCase() == answer.toLowerCase()) ok(); 
//     else fail(); 
// } 
    
// const user = { 
//     login: 'Василий', 
//     password: '12345', 
    
//     checkPassword: function() {return ask("Ваш пароль?", this.password, () => alert( this.login + ' вошёл в сайт' ), () => alert( this.login + ': ошибка входа' ))}
// } 
    
// user.checkPassword();