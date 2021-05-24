/* 1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */

function insertString (string, num, input) {
    var output = '';

    for(var i = 0; i < string.length; i++) {

        if(num === i) {
            output += input;
            output += string[i];
            
        } else {
            output += string[i];
        }

        if (num === 1) {
            output = input + string
        }
    }
    return output;
}
var string = "My random string", input = "JS ", num=10;
console.log(insertString(string,num,input));

/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]*/


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
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]*/

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




/*4. Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number*/

function reverse(input){
    var x = 0;
    while (input !== 0) {
        x *= 10;
        x += input % 10;
        input = Math.floor(input / 10);
    }
    console.log(x);
}
reverse(12345);

//drugi način 

var a = 12345;
function reversesNumber(numb) {
    var result = 0;
    while(numb > 0) {
        result *= 10; // 0 * 10, 5 * 10
        result += numb % 10; // 0 + 5, 50 + 4 
        numb = numb - numb % 10; //12340, 1230
        numb = numb / 10; // 1234, 123 ... 0.0
    }
    return result;
}
console.log(reversesNumber(a));
console.log(5 % 10);

/*5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] ->; -2
[7, 9, 0, -2], 2 ->; [0, -2]*/

function getLast (arr, num) {
    var output = [];
    for (var i = arr.length-num; i <= arr.length-1; i++) {
        output[output.length] = arr[i]
    }
    return output;
}
var arr = [7, 9, 0, -2];
var num = 2; 
console.log(getLast(arr,num));

/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -&gt; [0, 0, 0, 0, 0, 0]
2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
2 -&gt; [null, null]*/

function create (number, output){
    var test = [];
    if(!output){
        output = null;
    }
    for(var i = 0; i < number; i++){
        test[test.length] = output;
    }
    return test
}
console.log(create(2));

/*7. Write a function that says whether a number is perfect.
28 -&gt; 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.*/

var input = 28;
function perfectNumber(number){
    var sum = 0;
    var perfect;
    for(var i = 2; i < number; i++){
        if(number % i === 0){
            sum += i;
        }
        if(sum === number){
            perfect = "The " + number + " is perfect number";
        } else{
            perfect =  "The " + number + " isn't a perfect number";
        }
    }
    return perfect;
}
console.log(perfectNumber(input));


/*8. Write a function to find a word within a string.
"The quick brown fox", "fox" -> "'fox' was found 1 times"
"aa bb cc dd aa", "aa" -> "'aa' was found 2 times" */

function apperanceOfWord (string, word) {
    
    var counter = 0;
    for ( var i = 0; i < string.length; i++) {
        if ( word[i] === string[word] ) {
            counter++
        }
        
    }
    
    return counter;
}

console.log(apperanceOfWord("The quick brown fox", "fox"));

/*9. Write a function to hide email address.
&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot;*/

function hideEmail(email){
    var newEmail = email[0] + email[1]+ email[2] + "...";
    var p = false; // da li je stiglo do karaktera @
    for(var i = 3; i < email.length; i++){
        if(email[i] === "@"){
            p = true // true je kad stigne do tog karaktera @
        }
        if(p){ // kad stigne do karaktera @ (ako je p = true) vrsi se upis
            newEmail += email[i];
        }
    }
    return newEmail;
}
var something = "myemailaddresssssss@bgit.rs";
console.log(hideEmail(something));


/*10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/


function frequent(array){
    var counter = 0;
    var maxCounter = 0;
    var item;
    for(var i = 0; i < array.length; i++){
        for(var j = i; j < array.length; j++){
            if(array[i] === array[j]){
                counter++; // broj ponavljanja trenutnog elementa
            }
        }
        if(counter > maxCounter){
            item = array[i]; //nalazi najcesci element areja
            maxCounter = counter; // broji ponavljanja najcesceg elementa
        }
        counter = 0; // resetujemo counter da ne bi racunao i pojave svih prethodnih elementa
    }
    return item;
}
console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));