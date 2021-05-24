/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]*/



function duplicate (array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++) {
        newArr.push(array[i]);
        newArr.push(array[i]);
    }
    return newArr;
}

var input = [2, 4, 7, 11, -2, 1];
console.log(duplicate(input));


// drugi način


function diplicateArrayElements(array) {
    var newArray = [];
    array.forEach(function (el) {
      newArray.push(el, el);
    });
    return newArray;
  }
  
console.log(diplicateArrayElements([2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]));
  

/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

function removeElement (array) {

    var sortedArr = array;
    array.sort(function(a, b) {
    return a - b;
    });

    var newArr = [];

    for (var i = 0; i < sortedArr.length; i++) {

        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);

        }
      
    }

    return newArr;
}

var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
console.log(removeElement(input));


/*var a = [3, 5, 1, 7, 'test'];

a.sort(); // [1, 3, 5, 7, 'test'];

var numbers = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

var positiveElements = someArray.filter (function(el) {
    return el % 2 === 0
});
*/




/*3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/


function isOdd(array) {
    var result = false;
    var oddNumber = array.filter(function(number) {
        if (number % 2 !== 0) {
            result = true;
        }

    })

    return result;

}
console.log(isOdd([1, 2, 9, 2, 1]));




/*b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function countElement (array) {
    var result = 0;
    var mid;
    if (array.length % 2 === 0) {
        result = 'Error';
    }

    for (var i = 0; i < array.length; i++) {
        if ( array.length % 2 === 1) {
            mid = array[parseInt(array.length /2)];
        }
    }
    for (var i = 0; i < array.length; i++) {
        if(array[i] < mid) {
            result++;
        }
    }
    return result;
}

console.log(countElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

function findMin(array) {
    var output = { minValue: array[0] };
    for (var i = 0; i < array.length; i++) {
      if (array[i] < output.minValue) {
        output.minValue = array[i];
      }
    }
    output.minLastIndex = array.lastIndexOf(output.minValue);
    return output;
  }
  
  console.log(findMin([1, 4, -2, 11, 8, 1, -2, 3]));

  
  /*5. a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]*/

function lessThanAGivenElement(array, num) {
  var output = [];
  array.forEach(function (el) {
    if (el < num) {
      output[output.length] = el;
    }
  });

  return output;
}
console.log(lessThanAGivenElement([2, 3, 8, -2, 11, 4], 6));


/*b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]*/

function substring (array, substring) {
    var output = [];
    var temp = array[0]
    for (var i = 0; i < array.length; i++) {
        if(substring.charAt(i) === array[i]){

            
        }
    }
}


/*c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/


/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}]*/


/*b. Write a function that calculates the total price of your shopping list.*/


/*c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.*/





/*d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/

/*7.
a. Write a function that checks if a given string is written in all capitals.*/


/*b. Write a function that checks if a given string contains any digits.*/


/*c. Write a function that checks if a given string is a valid hexadecimal color.*/


/*d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.*/


/*e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/



/*8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days*/

var date1 = new Date();
var date2 = new Date('04/08/2022');

var differenceInTime = date2.getTime() - date1.getTime();
var differenceInDay = Math.floor(differenceInTime / (1000 * 3600 *24));

console.log(differenceInDay);

/*9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds*/

var departure = '8:22:13';
var arrival = '11:43:22';

function trip (dep, arr) {
  var currentDep = new Date();
  var currentArr = new Date();
  dep = dep.split(':');
  arr = arr.split(':');
  currentDep.setUTCHours(parseInt(dep[0]));
  currentDep.setUTCMinutes(parseInt(dep[1]));
  currentDep.setUTCSeconds(parseInt(dep[2]));

  currentArr.setUTCHours(parseInt(arr[0]));
  currentArr.setUTCMinutes(parseInt(arr[1]));
  currentArr.setUTCSeconds(parseInt(arr[2]));
  var timeTravel = currentArr - currentDep;
  var h = Math.floor(timeTravel /  (1000 * 3600));
  var m = Math.floor(timeTravel / (1000 * 60));
  m %= 60;
  var s = Math.floor(timeTravel / 1000);
  s %= 60;
  console.log(h + ' hours ' + m + ' minutes ' + s + ' seconds ');
}
trip(departure, arrival);



/*10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.*/


function Point (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

var pointSpace = new Point (3,5,1);
var secondPoint = new Point (4,2,9);

/*b. Write a function that calculates the distance between two points in the space.*/

function distance (p1, p2) {
var result = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) + (p1.z - p2.z) * (p1.z - p2.z))

return result.toFixed(3);

}
console.log(distance(pointSpace, secondPoint));

/*11.
a. Write a function that generates a random integer value between 5 and 20.*/

function randomInteger (min, max) {
  return ((max - min) * Math.random()) + min;
  
}

console.log(randomInteger(5,20));

/*b. Write a function that generates a random integer value between 50 and 100.*/
var result1 =  randomInteger(50,100)
console.log(result1);

/*c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.*/

function arrayOfRandoms (numb, func) {
  var arr = [];
  for (var i = 0; i < numb; i++) {
    arr[i] = func(i+1, 10*(i+1));
  }
  return arr;
}
console.log((arrayOfRandoms(7, randomInteger)));


/*12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)*/

function shuffle (array) {
  array.forEach(function(el, i) {
    var randomIndex = parseInt(Math.random()*array.length);
    var p = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = p;
    
  })
  return array;
}

console.log((shuffle([3, 6, 11, 2, 9, 1])));