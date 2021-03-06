//Variable declaration and initialization
/*2. Save a string (text) describing your current mood in a variable and print it out in console.

var mood='tired';

console.log(mood);*/

//var a=2;
//var b=3;
//var c=5;
//var d=6;

//a=b+2;
//console.log(a);

//Arithmetic operators
/*9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?*/

/*a*=2;
b+=3;
c/=5;
d-=7;
console.log(a,b,c,d);*/

/*10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

/*var name='Marija';
var age=25;
var doYouHaveACat=false;
var doYouHaveADog=true;*/

//console.log(typeof(name));

//Logical operators
/*12. Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/
/*var a=5;
var b=3;
console.log(a==b);*/

/*var c= 'naocare';
var d= 'torba';
console.log(a==b);

/*13. Use the console to check the results you think should go in the following table:*/

/*var p=true;
var q=true;
console.log(p&&q);
console.log(p||q);*/

/*var p=true;
var q=false;
console.log(p&&q);
console.log(p||q);*/

/*var p=false;
var q=true;
console.log(p&&q);
console.log(p||q);*/

/*var p=false;
var q=false;
console.log(p&&q);
console.log(p||q);*/

/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/

/*var age = 27;

if(age >0 && age <=120) {
    console.log(true);
}
else{
    console.log(age + ' is false value');
}*/

//ili

/*var age = 25;
if(age < 0 && age > 120) {
    console.log('Age is not correct value'); 
}
else {
    console.log('Age is correct value');
}*/

/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/

var speed = 87;

if(speed >=60 && speed <=120) {
    console.log('true');
}
else {
    console.log('false');
}
