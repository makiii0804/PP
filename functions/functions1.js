/*1. Write a program that calculates the maximum of two given numbers.*/

function max(number1 , number2) {
    if (number1 > number2) {
        return number1;
    } else if ( number1 < number2) {
        return number2;
    } else {
        return 'numbers are equal';
    }
}
console.log(max(3,7));


/*2. Write a program that checks if a given number is odd.*/

function isOdd (number) {
     if (number%2 === 1) {
        return number + ' is odd'
    } else {
        return number + ' is even'
    }
}
console.log(isOdd(7));

/*3. Write a program that checks if a given number is a three digit long number.*/


function isThreeDigit (number) {
    var string = number + ''; 
    var result;

    if ( string.length === 3) {
        result = true;
    } else {
        result = false; }
    
    return result;
}

console.log(isThreeDigit(100));


/*4. Write a program that calculates an arithmetic mean of four numbers.*/

function arithmetic (array) {
    var c=0;
    for (var i = 0; i < array.length; i++) {
        c += array[i]; 
    }
    return c/array.length
}


var a = [2, 5, 6, 8];
console.log(arithmetic(a));

/*function avgOfFour(a, b, c, d) {
    var sum = (a+b+c+d);
    var avg = sum /4;

    return avg;
}
console.log(avgOfFour(1,2,3,4));

function avgOfAll() {
    var avg;

    var sum = 0;
    var numOfArgs = arguments.length;

    for (var i = 0; i < numOfArgs; i++) {
        var currentNum = arguments[i];
        sum+= currentNum;
    }

    avg = sum / numOfArgs
    return avg;
}

/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****       */

function chart (number) {
    var star = '';
    for ( var i = 0; i < number; i++) {
        for ( var j = 0; j < number; j++) {
            if ( i === 0 || i === number -1) {
                star+='*';
            } else if ( j === 0 || j === number-1) {
                star+= '*';
            } else {
                star+=' ';
            }
        }
        star+='\n'
    }
    return star;
}
console.log(chart(10));

/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *      */
function rowChart () {
    var result = '';
    var numOfArgs = arguments.length;

    for(var i = 0; i < numOfArgs; i++) {
        for ( var j = 0; j < arguments[i]; j++) {
            result += '*';
        }
        result+= '\n';
    }
    
  /*for (var i = 0; i < number1; i++) {
      result+='*';
  }
  result+='\n'
  for (var j = 0; j < number2; j++ ) {
    result+='*';
  }
  result+='\n'
  for ( var k = 0; k < number3; k++) {
    result+='*';
  }*/
 return result
 
}

var b = 4;
console.log(rowChart(5,3,7));



/*7. Write a program that calculates a number of digits of a given number.*/

function numberOfDigits (number) {
    
    var string = number +''; 
    return string.length;
}
 
 var someNum = 55;
 console.log(numberOfDigits(someNum));


/*
function numOfDigits(num) {
    var digitCounter = 0;
    var absNum = num;

    if (num < 0) {
        num+=1;
    }
    for(var i = absNum; i >= 1; i/=10) {
        digitCounter++;
    }
    return digitCounter;
}
console.log(numOfDigits(-100));*/

/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/

function apperanceOfSeven (array, number) {
    var count = 0;
    for( var i = 0; i < array.length; i++) {
        if (number === array[i]) {
            count += 1;
        }
    }
    return count;
} 

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
console.log(apperanceOfSeven(a, e));

/*9. Write a program that calculates the sum of odd elements of a given array.*/

function sumOfOddElements (array) {
    var sum=0;
    for ( var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            sum+=array[i];
        }
    }
    return sum;
}
var a = [11, 21, 7, 18, 14, 27];
console.log(sumOfOddElements(a));

/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

function apperanceOfLetter (longString, inputLowerLetter, inputUpperLetter) {
    var counter = 0;
    for ( var i = 0; i < longString.length; i++) {
        if ( inputLowerLetter === longString[i] || inputUpperLetter === longString[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(apperanceOfLetter('marijaMARIJA', 'a', 'A'));


/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/

function concatinate (string,number) {
      var concatinateString = '';
    for (var i = 0; i < number; i++) {
        concatinateString+=string;
    }
   return concatinateString;
}
var a = 'abc';
var b = 4;
console.log(concatinate(a, b));


