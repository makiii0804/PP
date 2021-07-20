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
  }

  getData() {
    this.day = this.date.getDate();
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    return this.day + "/" + this.month + "/" + this.year;
  }
}