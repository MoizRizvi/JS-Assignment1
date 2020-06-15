var a = 10;
document.write("Result: <br> The Value of a is: "+a);
document.write("<br>.....................<br>");

document.write("<br> The Value of ++a is: "+ ++a);
document.write("<br> Now the Value of a is: "+ a);

document.write("<br> <br> The Value of a++ is: "+ a++);
document.write("<br> Now the Value of a is: "+ a);


document.write("<br> <br> The Value of --a is: "+ --a);
document.write("<br> Now the Value of a is: "+ a);

document.write("<br> <br> The Value of --a is: "+ a--);
document.write("<br> Now the Value of a is: "+ a);




var a = 2, b = 1, c = --a - --b, d = --a - --b + ++b, result = --a - --b + ++b + b--;
document.write(" <br><br> at --a a is: 1 because or pre decrement");
document.write("<br> at --a - --b it is: 1 because of pre decrement b is 0");
document.write("<br> at --a - --b + ++b it is: 3 because of pre increment b is equal to 2");
document.write("<br> at --a - --b + ++b + b-- it is: " + result);


var name = prompt("Please enter your name ");
if (name != null) {
	alert("Hello "+name);
}


var number = prompt("Enter a number ", 5);
var a;
	for (a = 1; a <= 10; a++) {
 document.write("<br>"+ number + "x" + a + "=" + number * a);
}