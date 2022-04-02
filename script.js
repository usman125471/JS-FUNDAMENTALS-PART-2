"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive :D");

// //const interface = 'Audio' ;
// //const private = 5471 ;

// //33* Functions   -PART-2-

// function logger() {
//   console.log("My name is Muhammad Usman");
// }

// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //34* Function Declarations vs Expressions   -PART-2-

// // Function Decleration
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(age1);

// // Function Expression
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge(1991);
// console.log(age1, age2);

// //35* Arrow Functions   -PART--2

// // Function Expression
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// // Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntillRetire = (birthYear, firstname) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstname} retires in ${retirement} years.`;
// };

// console.log(yearsUntillRetire(1991, "Muhammad Usman"));
// console.log(yearsUntillRetire(2000, "Muhammad Saifal"));

// //36* Functions Calling Other Functions   -PART-2-

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// //37* Reviewing Functions    -PART-2-

// const calcage = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntillRetire = (birthYear, firstname) => {
//   const age = calcage(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstname} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log("person has already been retired");
//     return -1;
//   }
// };

// console.log(yearsUntillRetire(2002, "Muhammad Usman"));
// console.log(yearsUntillRetire(1950, "Muhammad Saifal"));

// //   CODING CHALLENGE N0: # 1   -PART-2-

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// //Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas) {
//     console.log(`Dolphin wins... (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins...(${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// //39* Introduction to Arrays   -PARR-1-

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "petr";

// const friends = ["Michael", "Steven", "Petr"];
// console.log(friends);

// const y = new Array("1991", "1980", "1920", "1920");

// console.log(friends[2]);
// console.log(friends[1]);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Usman";
// console.log(friends);

// //friends = ['bob' , 'aoa']

// const firstName = "Usman";
// const usman = ["firstName", "Bilal", 2037 - 2002, "programmer", "hello"];
// console.log(usman);

// console.log(usman.length);

// // Exersice

// const calcage = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1997, 2002, 2010, 2018];

// const age1 = calcage(years[0]);
// const age2 = calcage(years[2]);
// const age3 = calcage(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcage(years[0]),
//   calcage(years[2]),
//   calcage(years[years.length - 1]),
// ];
// console.log(ages);

// //40* Basic Array Opreations (Mrthods)

// const friends = ["Michael", "Steven", "Petr"];

// //Add Elements
// friends.push("usman"); //adds element to the last in the array
// console.log(friends);

// friends.unshift("john"); //adds element in first of array
// console.log(friends);

// //Remove Elements
// friends.pop(); //removes last element of array
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //removes first element of array
// console.log(friends);

////////////////////////////////////////////////////////////////////////
