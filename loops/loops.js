/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/


var result = '';

for (var i = 0; i <=15; i++) {
    if (i%2 === 0) {
        result=( i +' is even');

    } 

    else {
        result=( i +' is odd');
    }
    console.log(result);
}

/*2. Write a program to sum the multiples of 3 and 5 under 1000.*/

var result = 0;

for (var i = 0; i < 1000; i++) {

    if (i%3 === 0 && i%5 === 0) {

        result += i;
    }
}
console.log(result);

/*3. Write a program to compute the sum and product of an array of integers.*/

var a = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;
var product=1;

for ( var i = 0; i < a.length; i++) {

    sum +=a[i];
    product*=a[i];
    
}
console.log('Sum ' + sum + ' product ' + product);


/*4. Write a program which prints the elements of the following array as a single string.
var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var pr = '';

for(i=0; i < x.length; i++) {
    pr+=x[i];
    
}
console.log(pr);



/*5. Write a program that prints the elements of the following array.
var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ];*/

var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ];
var element = '';

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        element += a[i][j] + '\t'
        
    }
    element+= '\n';
    
}
console.log(element);

/*6. Write a program that outputs the sum of squares of the first 20 numbers.*/


var sum = 0;

for( var i = 1; i <=20; i++) {
    sum+=i*i;
}
console.log(sum);


/*7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.*/

var grades = [80, 77, 88, 95, 68];

var allGrades = 0;

for( var i = 0; i < grades.length; i++) {

    allGrades+=grades[i];
}

var average = allGrades/grades.length;
console.log(average);

if(average < 60 ) {
    console.log('F');
}
else if (average < 70) {
    console.log('D');
}
else if (average < 80) {
    console.log('C');
}
else if (average < 90) {
    console.log('B');
}
else if (average < 100) {
    console.log('A');
}



/*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).*/


for( var i = 1; i <= 100; i++) {
    if (i%3 === 0 && i%5 !== 0) {
        console.log('Fizz');
    }
    else if (i%5 === 0 && i%3 !== 0) {
        console.log('Buzz');
    }
    else if (i%5 === 0 && i%3 === 0) {
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }
}