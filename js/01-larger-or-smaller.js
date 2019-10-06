var number1 = parseInt(window.prompt("Enter first number"));
var number2 = parseInt(window.prompt("Enter second number"));

if(number1 > number2) {
    window.document.write("First number is larger than Second: " + number1);
}

else if(number1 < number2) {
    window.document.write("Second number is larger than First: " + number2);
}

else {
    window.document.write("Both numbers are equal !");
}