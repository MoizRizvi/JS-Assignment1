var a = 3, b = 5,
c = a+b;
document.write("Sum of "+a+" and "+b+" is "+c+"<br>");

var a = 3, b = 5,
c = a-b;
document.write("Difference of "+a+" and "+b+" is "+c+"<br>");


var a = 3, b = 5,
c = a*b;
document.write("Product of "+a+" and "+b+" is "+c+"<br>");


var a = 3, b = 5,
c = a/b;
document.write("Quotient of "+a+" and "+b+" is "+c+"<br>");


var a = 3, b = 5,
c = a%b;
document.write("Remainder of "+a+" and "+b+" is "+c+"<br> <br> <br> <br>");




var x;
document.write("Value after variable declaration is: "+x+"<br>");
x = 11;
document.write("Initial value is:"+x+"<br>");
x++;
document.write("Value after increment is: "+x+"<br>");
a = x + 7;
document.write("Value after addition is: "+a+"<br>");
a--;
document.write("Value after decrement is: "+a+"<br>");
c = a % 3;
document.write("The Remainder is: "+c+"<br> <br> <br>");



var p = 600,
b = p*5;
document.write("Total cost to buy 5 tickets to a movie is "+b+"PKR <br> <br> <br>");




document.write("<h1>Table of 13 </h1><br>");
var a;
for (a = 1; a <= 10; a++) { 
document.write("13" + "x" + a + "=" + 13*a + "<br>"); 
}
document.write("<br> <br> <br> <br>");



var C = 41,
f = (C * 9/5) + 32;
document.write(C+" Celsius is "+f+" in Farhenheit Degrees <br>");

var F = 98,
c = (F - 32) * 5/9;
document.write(F+" Farhenheit is "+c+" in Celsius Degrees <br>");



var $item1 = 100,
$item2 = 50,
_item1 = 2,
_item2 = 4,
shipping = 80,
total = ($item1 * _item1) + ($item2 * _item2) + shipping;
document.write("<h1> Shopping Cart</h1><br> <br>"+"Price of item 1 is "+$item1+"<br> Quantity of item 1 is "+_item1+"<br> Price of item 2 is "+$item2+"<br> Quantity of item 2 is "+_item2+"<br> Shipping Price is "+shipping+'<br> <br> Total Price is '+total+"<br> <br> <br>");



var totalMarks = 400,
obtMarks = 380,
per = (obtMarks / totalMarks) * 100;
document.write("<h1> Marksheet </h1><br> Total Marks obtained by Student "+obtMarks+"<br>Total Marks "+totalMarks+"<br><br> Percentage is : "+per);



var u = 10 * 165.96, s = 25 * 44.21, c = u + s;
document.write("<br> <br> <h1>Total Currency in PKR</h1> <br>" + c);

var $s = 5 + 5 * 10 / 2;


var currentYear = 2020, birthYear = 1996, _a = currentYear - birthYear;
document.write("<br> <br> <h1>Age Calculator</h1> <br> Current Year is"+currentYear+"<br> Your Birth Year is "+birthYear+"<br>Your age is "+_a);


var r = 32, c = 2 * 3.14 * r, $area = 3.14 * (r * r);
document.write("<br> <h1>The Geometizer</h1> <br> Radius of a circle is "+r+"<br> Circumference is"+c+"<br> Area is "+$area+"<br>"); 


var $favSnack = "Biryani", currentAge = 23, maxAge = 45, platesPerDay = 2, totalPlates = (((2 * 31) * 12) * 22);
document.write("<h1>The Lifetime Supply Calculator</h1> <br> Favorite Snack: "+$favSnack+" <br> Current Age: "+currentAge+"<br> Estimated Maximum Age: "+maxAge+"<br> Snacks Per Day: "+platesPerDay+"<br> You should have at least "+totalPlates+" of Biryani to last your lifetime. Although 3 should be enough for now, else will rot. &#128512");  







