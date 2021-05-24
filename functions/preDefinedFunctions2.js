/*1. Write a function that converts an array of strings into an array of numbers. Filter
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

/*2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247”*/

function joinElements (array) {
    var outputString = '';
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] !== null) {
            outputString+=array[i];

        }
    }
    return outputString;
}
var niz =  [NaN, 0, 15, false, -22, '', undefined, 47, null]
console.log(joinElements(niz));


/*3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '';, undefined, 47, null]
Output: [15, -22, 47]*/

function falsyElements (array) {
    var outputArray = [];

    for(var i = 0; i < array.length; i++) {
        if (parseInt(array[i])) {
            outputArray[outputArray.length]=(array[i]);
        }
    }
    return outputArray;
}

var test = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(falsyElements(test));

/*4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/

function isInteger (array) {
    var result= 0;

    for ( var i = 0; i < array.length; i++) {
        if (parseInt(array[i]) === array[i]) {
            result++
        }
    }
    return result;
}

var test = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log(isInteger(test));


/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2*/

function isFloat(array) {
    var result= 0;
    var int;
    
    for ( var i = 0; i < array.length; i++) {
        int = parseInt(array[i])
        if(isFinite(int) && parseFloat(array[i]) !== int) {
             result++
        }
    }
    return result;
}


var test = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log(isFloat(test));


