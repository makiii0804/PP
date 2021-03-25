/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var e = 3;
var a = [5, -4.2, 18, 7];
var check = 'no';

for ( var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        check = 'yes';
    }
    
}
    console.log(check);


/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var array = [-3, 11, 5, 3.4, -8];
var help = [];

for ( i = 0; i < array.length; i++) {
    if ( array[i] > 0) {
        help[i]=array[i]*2
    } else {
        help[i]=array[i];
    }
}
console.log(help);


/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var array1 = [4, 2, 2, -1, 6];
var res = 0; //3

for (var i = 0; i < array1.length; i++) {
    if (array1[res] > array1[i]) {
        res = i;
    }
}
console.log(array1[res] + ", " + res);   


/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

var a = [4, 2, 2, -1, 6];
var drugi; 
var prvi = a[0]; 

for ( var i = 0; i < a.length; i++) {
    if (a[i] < prvi) {
        drugi = prvi; //100=100; 100=4; 4=2
        prvi =a[i] // 100 = 4; 4=2; 2=-1
    }
}
console.log(drugi);

/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

var niz = [3, 11, -5, -3, 2];
var zbir=0;

for ( var pozicija = 0; pozicija < niz.length; pozicija++) {
    if (niz[pozicija] > 0) {
        zbir+=niz[pozicija];
    }
}
console.log(zbir);


/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/


var a = [2, 4, -2, 7, -2, 4, 2];
var symmetric = false;

for ( var start = 0 , end = a.length-1; start < end; start ++, end --) {
    if (a[start] === a[end]) {
        symmetric = true;
    }
}
if ( symmetric === true) {
    console.log('The array is symmetric');
} else {
    console.log('The array isn\'t symmetric');
}



/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var output = [];

if (a.length === b.length) {
    for ( var i = 0, j = 0; i < a.length; i++, j++) {
        output[j] = a[i];
        j++;
        output[j] = b[i];
    }
    console.log(output);
} else {
    console.log('Ovo se može izvršiti samo ukoliko su nizovi iste dužine');
}

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var output = [];

for (var i = 0; i < a.length; i++) {
    output[i] = a[i]    
}
for (var i = output.length, j = 0; i < a.length+b.length; i++, j++) {
    output[i] = b[j];    
}
console.log(output);



/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8]*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var output = [];

for (var i = 0, j = 0; i < a.length; i++) {
    if( e !== a[i]) {
        output[j] = a[i];
        j++
    }
}
console.log(output);

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