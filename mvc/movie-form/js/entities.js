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