/*1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N
kids.&quot;
Call that function 3 times with 3 different values for the arguments.*/

var tellFortune = function(numberOfChildren, partnersName, geoLocation, jobTitle) {
    var output = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' + partnersName + ' with ' + numberOfChildren + ' kids';
    return output;
}
console.log(tellFortune(3, 'Nikola', 'Belgrade', 'programmer'));
console.log(tellFortune(3, 'Marija', 'Belgrade', 'ATC'));

/*2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy&#39;s age.
● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.*/

var calculateDogAge = function (yourPuppyAge, yourAge) {
    var output = 'Your doggie is ' + yourPuppyAge*7 + ' years old in dog years!\n' + 'You are ' +yourAge*7 + ' years old in dog years!' ;
    return output;
}
console.log(calculateDogAge(7,26));
console.log(calculateDogAge(5,35));
console.log(calculateDogAge(7,45));

/*3. Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
X&quot;
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/


/*4. It&#39;s hot out! Let&#39;s make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output &quot;NN°F is NN°C.&quot;*/

var celsiusToFahrenheit = function(celsius) {
    var c = celsius;
    var fahrenheit = (9*c/5) + 32;
    return c + '°C is ' + fahrenheit + '°F';
}
console.log(celsiusToFahrenheit(30));

var fahrenheitToCelsius = function(fahrenheit) {
    var f = fahrenheit;
    var celsius = (f-32)*5/9;
    return f + '°F is ' + celsius + '°C';
}
console.log(fahrenheitToCelsius(60));