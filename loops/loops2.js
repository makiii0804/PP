/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var e = 3;
var a = [5, -4.2, 18, 7];
var output = 'no';

for(i = 0; i < a.length; i++) {
    if(e === a[i]) {
        output = ('yes');
    }
}
console.log(output);


/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var array = [-3, 11, 5, 3.4, -8];
var result= [];

for(var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
        result[i]= array[i]*2;
    } else {
        result[i] = array[i];
    }
}
console.log(result);


/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var b = [4, 2, 2, -1, 6];
var min = b[0];


for ( var i = 0; i < b.length; i++) {
    if (min > b[i]) {
        min=b[i];
    }
}
console.log(min);

/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/


var c = [3, 11, -5, -3, 2];
var result = 0;

for(var i = 0; i < c.length; i++) {
    if(c[i] > 0) {
        result+= c[i];
    }
}
   
console.log(result);


/*6.Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

var p = 0;
var array = [2, 4, -2, 7, -2, 4, 2];
for(i = 0; i < array.length/2; i++){
    if(array[i] != array[array.length-1-i]){
        p = 1;
    }
}
if(p === 0){
    console.log("Array is symetric");
} else{
    console.log("Array is not symetric");
}




/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/


var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var string = "[";

for(var i = 0; i < array1.length; i++){

    string += array1[i] + "," + array2[i];
    if ( i < array1.length -1) {
        string+=',';
    } else {
        string+= ']';
    }
  }
  console.log(string);




  /*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/



var inp1 = [4, 5, 6, 2];
var inp2 = [3, 8, 11, 9];
var out = [];

for ( var i = 0; i < inp1.length+inp2.length; i++) {

    if ( i < inp1.length) {
        out[out.length]=inp1[i];
    } else {
        var newIndex = i - inp1.length;
        out[out.length] = inp2[newIndex];
    }
             
}    
    
console.log(out);


/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var test= [];

for (var i = 0; i < a.length; i++) {

    if(a[i] !== e) {
        test[test.length] = a[i];
    }
    
}
console.log(test);


/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var res = [];
for( var i = 0; i < a.length; i++ ) {
    if (i === p) {
        res[res.length] = e;
    } 
    res[res.length] = a[i];
}
console.log(res);