/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/

var a1 = 3;
var b1 = -7;
var c1 = 2;
var result= '';

if(a1*b1*c1 > 0) {
    result = 'The sign is +';
}
else {
    result = 'The sign is -';
}
console.log(result);

/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
var result;

if(a>b && a>c && a>d && a>e) {
    result = a;
}
else if(b>a && b>c && b>d && b>e) {
    result = b;
}
else if(c>a && c>b && c>d && c>e) {
    result = c;
}
else if(d>a && d>b && d>c && d>e) {
    result = d;
}
else if(e>a && e>b && e>c && e>d) {
    result = e;
}
console.log(result);

/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

var x = 0;
var y = -1;
var z = 4;


if(x>y && y>z) {
    console.log(x,y,z);
}
else if(x>z && z>y) {
    console.log(x,z,y);
}
else if(y>x && x>z) {
    console.log(y,x,z);
}
else if(y>z && z>x) {
    console.log(y,z,x);
}
else if(z>x && x>y) {
    console.log(z,x,y);
}
else if(z>y && y>x) {
    console.log(z,y,x);
}

/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X*/

var m = 10;
result = '';

if(typeof m === 'number') {
    
    if(m % 2 === 0) {
        result = m/2;
    }
    else {
        result = 'X';
    }
    console.log(result);
}

/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.*/

var j = 2;
var k = 5;
var result;

if(j>k) {
    result = 'Number ' + j + ' is greater than number ' + k;
}
else if(k>j) {
    result = 'Number ' + k + ' is greater than number ' + j;
}
console.log(result);

/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F*/

var C=60;
var F;

if(F === undefined) {
    F=(9*C/5) + 32;
    console.log(C + '°C is ' + F + '°F');
}
else if(C === undefined) {
    C=(F-32)*5/9;
    console.log( F + '°F is ' + C + '°C');
}

/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/

var num = 11;
var result;

if(num > 13) {

    result = (num-13)*2;
}
else if(num < 13) {
    result = 13 - num;
}
console.log(result);

/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/

var int1 = 12;
var int2 = 5;
var result;

if( int1 === int2) {
    result = (int1 + int2) * 3;
}
else if(int1 !== int2) {
    result = int1 + int2;
}
console.log(result);

/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
Output : - Output : true Output : true*/

var num1 = 60;
var num2 = 10;

if(num1 === 50 || num2 === 50 || num1+num2 === 50) {
    console.log(true);

}
else{
    console.log('-');
}

/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/

var givNum = 234;

if(givNum >=20 && givNum <=100) {
    console.log('20 ⇔ 100');
}
else if(givNum >=100 && givNum <=400) {
    console.log('100 ⇔ 400');
}
else {
    console.log('-');
}
