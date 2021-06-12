class App {
    constructor(name, licence, stars) {
      this.name = name;
      this.licence = licence;
      this.stars = stars;
    }
    getData() {
      return this.name + ' ' + this.licence + ' ' + this.stars;
    }
    isCCLicence() {
      if (this.licence === 'CC'){
        return 'This licence is ' + this.licence;
      } else {
        return 'This licence is not CC';
      }
    } 
  }
  class WebApp extends App {
    constructor(name, url, technologies, licence, stars) {
      super(name, licence, stars);
      this.url = url;
      this.technologies = technologies;
    }
    getWebData() {
      return this.getData() + ' ' + this.url + ' ' + this.technologies;
    }
    reactBased() {
      if (this.technologies === 'React') {
        return 'One of technologies is ' + this.technologies;
      } else {
        return 'This technology is not React'
      }
    }
    
  }
  class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
      super(name, licence, stars);
      this.platforms = platforms;
    }
    getMobileData() {
      return this.getData() + ' ' + this.platforms;
    }
    forAndroid() {
      if (this.platforms === 'Android') {
        return 'One of platforms is ' + this.platforms;
      } else {
        return 'This platform is not Android'
      }
    }
  }
  var web1 = new WebApp('GitHub', 'https://github.com', 'jQuery', 'true', 4);
  console.log(web1.getWebData());
  //console.log(web1.reactBased());
  console.log(web1.isCCLicence());
  var mob1 = new MobileApp('PlayStore', 'Android', true, 5);
  //console.log(mob1.getMobileData());
  console.log(mob1.forAndroid());