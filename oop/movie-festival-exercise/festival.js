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

function Program (date, totalNumOfMovies) {
    if(!date || !totalNumOfMovies) {
        throw new Error ('This field is required!')
    }
    this.date = new Date(date);
    this.totalNumOfMovies = totalNumOfMovies;
    this.listOfMovies = [];
}

function Festival (name, numOfMovies) { //and number of movies in all programs
    if(!name || !numOfMovies) {
        throw new Error ('This field is required!')
    }
    this.name = name;
    this.numOfMovies = numOfMovies;
    this.listOfPrograms = [];
}

var genre1 = new Genre('Action')
var movie1 = new Movie('Titanic', genre1, 120)
console.log(movie1.getData());