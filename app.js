// changing case
//  task 1
// var username = prompt("Name", "Enter your name");
// alert(username.toUpperCase());

// task 2
// var userName = prompt("Name", "Enter Your Name");
// var spaceFind = userName.indexOf(" ");
// var firstName = userName[0].toUpperCase() + userName.slice(1, spaceFind);
// var lastName =
//   userName.slice(spaceFind + 1)[0].toUpperCase() +
//   userName.slice(spaceFind + 2);
// var fullname = firstName + " " + lastName;
// alert(fullname);

// measuring lenghths and extracting parts
// task 1
// var model = prompt("Mobile Model", "Enter your favourite mobile model");
// document.write(`your input length is ${model.length}`);

// task 2
// var input = prompt("Input", "Enter any input");
// var index = input.length - 1;
// document.write(`your input's last word is <b>${input.charAt(index)}</b>`);

// finding segments
// task 1
// var word = "Pakistani";
// document.write(`In the word "${word}" the index of n is: ${word.indexOf("n")}`);

// task 2
// var input = prompt("Your Name", "Enter name");
// var contain = false;
// for (var i = 0; i < input.length; i++) {
//   if (
//     input.indexOf("@") !== -1 ||
//     input.indexOf(",") !== -1 ||
//     input.indexOf(",") !== -1 ||
//     input.indexOf("!") !== -1
//   ) {
//     contain = true;
//   }
// }
// if (contain) {
//   alert("Enter valid name");
// }

// task 3
// var str = "the quick brown fox jumps over the lazy dog.";
// document.write(
//   `the occurace of word "the" in sentense ${str} is ${
//     str.split("the").length - 1
//   }`
// );

// finding a charcter at a location
// task 1
// var word = "Pakistan";
// alert(word.charAt(3));

// replacing characters
// task 1
// var replace = "Hyderabad";
// alert(replace.replace("Hyder", "Islam"));

// task 2
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// alert(message.replace(/and/g, "&"));

// rounding numbers
// task 1
// var num = +prompt("Any Number", "Enter any number");
// alert(
//   `number ${num} \n roundoff value ${Math.round(num)} \n ciel value ${Math.ceil(
//     num
//   )} \n floor value ${Math.floor(num)}`
// );

// task 2
// var num = +prompt("Any Negative Number", "Enter any negative number");
// alert(
//   `number ${num} \n roundoff value ${Math.round(num)} \n ciel value ${Math.ceil(
//     num
//   )} \n floor value ${Math.floor(num)}`
// );

// Generating random numbers
// task 1
// var dice = Math.floor(Math.random() * 6);
// alert(dice);

// task 2
// var player1 = prompt("Player1", "Choose Heads or Tails");
// var player2 = prompt("Player2", "Choose Heads or Tails");
// player1 = player1.toLowerCase();
// player2 = player2.toLowerCase();
// var toss = Math.floor(Math.random() * 2);
// if (
//   (player1 === "heads" && toss === 0) ||
//   (player2 === "heads" && toss === 0)
// ) {
//   alert("Tails wins");
// } else {
//   alert("Heads wins");
// }

// task 3
// var secret = 9;
// var user = +prompt("Any Number Between 1 to 10", "Enter number");
// if (user === secret) {
//   alert("You win");
// } else {
//   alert("you loose");
// }

// Converting strings to integers and decimals
// task 1
// var weight = prompt("Weight", "Enter your weight");
// alert(weight);

// Converting strings to numbers, numbers to strings
// task 1
// var num = prompt("Number", "Enter number");
// num = parseFloat(num);
// alert(`number: ${num} \n type of: ${typeof num}`);

// task 2
// var num = 35.36;
// num = num.toString();
// alert(num + "\n" + typeof num);

// Controlling the length of decimals
// task 1
// var percentage = (30 / 45) * 100;
// alert(percentage.toFixed(2));
