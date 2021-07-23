class Festival {
  constructor() {
    this.listOfTotalMovies = [];
    this.listOfTotalPrograms = [];
  }
  
  addMovie(movie) {
    this.listOfTotalMovies.push(movie);
  }
  addProgram(program) {
    this.listOfTotalPrograms.push(program);
  }
}



class Movie {
  constructor(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
  }
  genreShort() {
    return (
      this.genre.charAt().toUpperCase() +
      this.genre.charAt(this.genre.length - 1).toUpperCase()
      );
    }
    getData() {
      return this.title + ", " + this.length + "min, " + this.genreShort();
    }
  }
  
  class Program {
    constructor(date) {
      this.date = new Date(date);
      this.listOfMovies = [];
    }
    addMovie(movie) {
      if (!movie || !(movie instanceof Movie)) {
        alert("Invalid movie input!")
      }
      this.listOfMovies.push(movie);
    }
    countMovies() {
      return this.listOfMovies.length;
    }
    
    totalMovieLength() {
      var count = 0;
      this.totalMovieLength.forEach(function(element){
        count+=element.length;
      })
      return count;
    }
    getProgramDate() {
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      var date = day + "/" + month + "/" + year;
      return date;
    }
    getData() {
      var total = this.getProgramDate();
      if(this.countMovies() === 0) {
        total+= ", Program to be announced!";
        return total;
      }
      if(this.countMovies() === 1) {
        return total+=", " + this.countMovies() + " movie, duration: " + this.totalMovieLength +"min";
      }
      total+=", " + this.countMovies() + " movies, duration: " + this.totalMovieLength +"min";
      return total;
    }
  }