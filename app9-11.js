var city = prompt("Please enter your city ");
if ( city === "Karachi") {
	alert("Welcome to the City of Lights");
}
else {
	alert("Please enter a city");
}



var gender = prompt("Please enter your gender");
if ( gender == "Male") {
	alert("Hello Sir");
}
else if ( gender == "Female") {
	alert("Hello Madam");
}

else {
	alert("Please enter a gender");
}





var light = prompt("Please enter the color of traffic light");
if ( light == "Red") {
	alert("Stop");
}
else if ( light == "Yellow") {
	alert("Ready to move");
}
else if ( light == "Green") {
	alert("Move Now");
}

else {
	alert("Please enter the color of the traffic light");
}





var fuel = prompt("Please enter the fuel remaining in your vehicle (in litres) ");
if ( fuel < 0.25) {
	alert("Please refill the fuel in your vehicle");
}
else {
	alert("You are good to go");
}


var a =  4;
if(++a === 5) {
	alert("given condition for variable is true");
}

var b =  82;
if(b++ === 83) {
	alert("given condition for variable is true");
}

var c = 12;
if (c++ === 13) {
	alert("condition 1 is true");
}
if (c === 13) {
	alert("condition 2 is true");
}
if (++c < 14) {
	alert("condition 3 is true");
}
if (c === 14) {
	alert("condition 4 is true");
}



var materialCost = 20000, labourCost = 2000, totalCost = materialCost + labourCost;
if (totalCost === materialCost + labourCost) {
	alert("cost equals");
}


if (true) {
	alert("True");
}
if (false) {
	alert("False");
}

if ("car" < "cat") {
	alert("Car is less than Cat");
}




var Eng = prompt("Enter your marks in English");
var Maths = prompt("Enter your marks in Maths");
var Science = prompt("Enter your marks in Science");

var totalMarks = 300;
var marksObt = Eng+Maths+Science;
var per = (marksObt/totalMarks) * 100;
document.write("<h1> Marks Sheet <br> Total Marks: "+totalMarks+"<br> Marks Obtained: "+marksObt+"<br>");
if (per >= 80) {
document.write("Percentage: "+per+"% <br> Grade: A <br> Remarks: Very Good");
}
if (per <= 79) {
document.write("Percentage: "+per+"% <br> Grade: B <br> Remarks: You need to improve");
}
if (per <= 65) {
document.write("Percentage: "+per+"% <br> Grade: C <br> Remarks: You need to work hard");
}



var a = prompt("Enter a number from 1 to 10");
if (a === 7) {
 alert("Bingo!"); 
}
else if (a === 8 ) {
	alert("You're close");
}


var div = prompt("Enter a number to check whether it's divisible by 3");
if (div % 3 == 0) {
	document.write("<br> <br> Your number is divisible by 3");
}



var evenodd = prompt("Enter a number to check whether it's divisible by 3");
if (evenodd % 2 == 0) {
	document.write("<br> <br> Your number is even");
}
else if (evenodd % 2 == 1) {
	document.write("<br> Your number is odd");
}
else {
	alert("Please enter a number");
}


var Temperature = prompt("Enter the current temperature in celcius");
if (Temperature >= 40) {
	document.write("<br> <br>It is hot outside");
}
if (Temperature >= 30) {
	document.write("<br>It is normal today");
}
if (Temperature >= 25) {
	document.write("<br>It's pretty cool outside");
}
if (Temperature <= 10) {
	document.write("<br>It's going to snow.");
}