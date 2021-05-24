/*1. Write a function to check whether the `input` is a string or not.
'My random string' -> true
12 -> false*/

function check (input) {
    var output;
    if (typeof input === typeof'string') {
        output = true;
    } else {
        output = false;
    }
    return output;
}

var exemple = 'Marija';
console.log(check(exemple));

/*2. Write a function to check whether a string is blank or not.
'My random string' -> false
' '-> true
12 -> false
false -> false*/

function check (input) {
    var output;
    if (input === typeof'string') {
        output = false;
    } else if (input === ' ') {
        output = true;
    } else {
        output = false;
    }
    return output;
}

var exemple = 'Marija';
console.log(check(exemple));

/*3. Write a function that concatenates a given string n times (default is 1).
'Ha' -> 'Ha'
'Ha', 3 -> 'HaHaHa'*/

function concatinate (string, number) {
    var result = '';
    for ( var i = 0; i < number; i++) {
        result+=string;
    }
    return result;
}
var exemple = 'Ha';
var num = 6;
console.log(concatinate(exemple, num));

/*4. Write a function to count the number of letter occurrences in a string.
'My random string', 'n' -> 2*/

function count (string, letter) {
    var result= 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i]===letter) {
            result++;
        }
    }
    return result;
}
var exemple = 'My random string';
var letter = 'n';

console.log(count(exemple, letter));

/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/

function count (string, letter) {
    var result = -1;
    for (var i = 0; i < string.length; i++) {
        
        if (string[i]===letter) {
            result = i;
            break;
        }
    }
    return result;
}
var exemple = 'My random string';
var letter = 'n';

console.log(count(exemple, letter));

/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/

function count (string, letter) {
    var result = -1;
    for (var i = 0; i < string.length; i++) {
        
        if (string[i]===letter) {
            result = i;
            
        }
    }
    return result;
}
var exemple = 'My random string';
var letter = 'n';

console.log(count(exemple, letter));

/*7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
'My random string' -> ['M', 'y', null, 'r', 'a']
'Random' -> ['R', 'a', 'n','d', 'o', 'm']*/

function replaceSpace (string) {
    var replace = null;
    var outputArray = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            outputArray[i] = replace;
        } else {
            outputArray[i] = string[i];
        }
    }
    return outputArray;
}

var test = 'My random string';
console.log(replaceSpace(test));

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

function prime (number) {
    var primeNum = true; 
    for ( var i = 2; i < number; i++) {
        if (number % i === 0) {
            primeNum = false;
            break;
            
        }
    }
    return primeNum;
    
}
var test = 7;
console.log(prime(test));

/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
'My random string', '_' -> 'My_random_string'
'My random string', '+' -> 'My+random+string'
'My random string' ->; 'My-random-string'*/


function separator (string, sign) {
    
    var final = '';
    
    if(!sign) {
        sign = '-';
    }
    
    for ( var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            final += sign;
        } else {
            final+=string[i];
        }
    }
    return final;
}
var test = 'My random string';
var si = '';
console.log(separator(test,si));


/*10. Write a function to get the first n characters and add “...” at the end of newly created string.*/

function countChar (string, num) {
    var output= '';
    for(var i = 0; i < num; i++) {
        
        output+=string[i]
        
    }
    return output + '...';
}
var string = 'Marija';
var num = 3;

console.log(countChar(string, num));

/*11. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
Output: [1, 21, 42, 1000]*/

function convertArray (array) {
    var array1 = [];
    for ( var i = 0; i < array.length; i++) {
        var j = array1.length;
        if (isFinite(array[i])) {
            array1[j] = parseFloat(array[i]);
        }
    }

    return array1;
}

var niz = ['1', '21', undefined, '42', '1e+3', Infinity]

console.log(convertArray(niz));


/*12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.*/


/*13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -&gt; 1st
11 -&gt; 11th*/
//switch (true)




















function separator (string, sign) {
    var defaultSeparator = '-';
    var final = '';
    for ( var i = 0; i < string.length; i++) {
        if(string[i] === ' ' && sign === ' ') {
            string[i] = defaultSeparator;
            
        } else if ( string[i] === ' ') {
            string[i] = sign;
        }
    }
    return string;
}
var test = 'My random string';
var si = '+';
console.log(separator(test,si));
