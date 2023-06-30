// 1. დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.

// Write a function called generateRandomNumber that takes a minimum number and a maximum number as arguments and returns a random number between the minimum and maximum values (inclusive).

// function generateRandomNumber(min, max) {
//     let range = max - min;
//     let random = Math.floor(Math.random() * (range + 1)) + min;
//     return random;
// }

// console.log(generateRandomNumber(5, 10))
// console.log(generateRandomNumber(20, 30))

// 2. დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// Write a function called capitalizeWords that takes a sentence (string) as an argument and returns a new sentence where the first letter of each word is capitalized.

// function capitalizeWords(sentence) {
//     let capitalizedSentence = "";
//     let capitalizeNextLetter = true;

//     for (let i = 0; i < sentence.length; i++) {
//         const char = sentence.charAt(i);

//         if (char === " ") {
//             capitalizeNextLetter = true;
//             capitalizedSentence += " ";
//         } else {
//             if (capitalizeNextLetter) {
//                 capitalizedSentence += char.toUpperCase();
//                 capitalizeNextLetter = false;
//             } else {
//                 capitalizedSentence += char;
//             }
//         }
//     }
//     return capitalizedSentence;
// }

// console.log(capitalizeWords("hello, my name is temo"))

// 3. დაწერეთ ფუნქცია, რომელიც მიესალმება მომხმარებელს თუ გადაცემული ექნება მისი სახელი, მაგალითად: "გამარჯობა, თემო". თუ არაფერი ექნება გადაცემული, გამოაკონსოლოს:"გამარჯობა, უცნობო"

// function greeting(name = "უცნობო") {
//     // if (name) {
//     //     console.log(`გამარჯობა, ${name}`);
//     // } else {
//     //     console.log(`გამარჯობა, უცნობო`);
//     // }

//     // console.log(`გამარჯობა, ${name || "უცნობო"}`)

//     console.log(`გამარჯობა, ${name}`);
// }

// greeting()

// 4. დაწერე პროგრამა რომელიც გამოავლენს ორ გუნდს შორის გამარჯვებულს მათ მიერ 3 თამაშში მიღებული ქულების საშუალოზე დაყრდნობით

// function declaration
// function averageDec(a, b, c) {
//     return (a + b + c) / 3
// }
// console.log(averageDec(1, 2, 3))

//  function expression

// const averageExp = function(a, b, c) {
//     return (a + b + c) / 3
// }
// console.log(averageExp(1, 2, 3))

// const average = (a, b, c) => (a + b + c) / 3;

// const teamFirst = average(1, 2, 3);
// const teamSecond = average(3, 2, 1);

// function checkForWinner(first, second) {
//     if (first > second){
//         console.log(`მოიგო პირველმა გუნდმა ${first} ქულით`);
//     } else if (first < second) {
//         console.log(`მოიგო მეორე გუნდმა ${second} ქულით`);
//     } else {
//         console.log("ფრეა");
//     }
// }

// checkForWinner(teamFirst, teamSecond)

// 5. დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი მარტივია თუ არა.

// Write a program to check if a number is prime or not.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(17));
