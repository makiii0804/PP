'use strict';

function Genre (name) {
    if(!name) {
        throw new Error('This field is required!')
    }
    this.name = name;
    
    this.getData = function () {
        
        /*  'Action' -> AN
        'Drama' -> DA
        'Comedy' -> CY  */
        
        
        return this.name.charAt().toUpperCase() + this.name.charAt(name.length - 1).toUpperCase()
    }
}

function Movie (title, genre, length) {
    if(!title || !length) {
        throw new Error('This field is required!')
    }
    if(!genre || !(genre instanceof Genre )) {
        throw new Error ('Invalid input')
    }
    
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        /*The Shawshank Redemption, 130min, AN*/

        return this.title + ', ' + this.length +'min, ' + this.genre.getData();
    }
}

function Program (date) {
    if(!date) {
        throw new Error ('This field is required!')
    }
    this.date = new Date(date);
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.listOfMovies = [];
    this.totalNumOfMovies = this.listOfMovies.length;

    this.addMovie = function (movie) {
        if(!movie || !(movie instanceof Movie)) {
            throw new Error ('Invalid input.')
        }
        this.listOfMovies.push(movie);
    }

    this.totalLengthofMovies = function () {
        var count = 0;
        this.listOfMovies.forEach(function(movie) {
            count+=movie.length;
        })
        return count;
    }

    this.getData = function () {
        /*Date, program length from all movies
First movie title, length and genre
Second movie title, length and genre
Third movie title, length and genre
Fourth movie name and length and genre*/

        var final = this.day + ' '+ this.month + ' ' + this.year + ', ' + this.totalLengthofMovies() +'min' + '\n';

        this.listOfMovies.forEach(function(movie) {
            final+=movie.getData();
        })
        return final;
    }
}

function Festival (name, numOfMovies) { //and number of movies in all programs
    if(!name || !numOfMovies) {
        throw new Error ('This field is required!')
    }
    this.name = name;
    this.numOfMovies = numOfMovies;
    this.listOfPrograms = [];
    
    this.addProgram = function (program) {
        if(!program || !(program instanceof Program)) {
            throw new Error ('Invalid input.')
        }
        this.listOfPrograms.push(program);
    }
}
var genre1 = new Genre('Action');
var movie1 = new Movie('Titanic', genre1, 120);

var program1 = new Program('12 Oct 2021');
program1.addMovie(movie1)
console.log(program1.getData());

