var a = prompt("Enter anything");
var aAscii = a.charCodeAt(0);
if (aAscii >= 65 && aAscii <= 90) {
	alert("You have entered an uppercase letter");
} 
if (aAscii >= 97 && aAscii <= 122) {
	alert("You have entered an lowercase letter");
} 
if (aAscii >= 48 && aAscii <= 57) {
	alert("You have entered a number");
} 
else {
	alert("It is a Symbol");
}


var num1 = prompt("enter first number");
var num2 = prompt("enter second number");
if (num1 > num2) {
	alert(num1+"is greater");
}
if (num2 > num1) {
	alert(num2+"is greater");
}
if (num1 == num2) {
	alert("both are equal");
}