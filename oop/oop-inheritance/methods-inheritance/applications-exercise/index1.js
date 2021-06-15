function App (name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
App.prototype.getData = function() {
    return this.name + ' ' + this.licence + ' ' + this.stars;
}
App.prototype.isCCLicence = function() {
    if (this.licence === 'CC'){
        return 'This licence is ' + this.licence;
    } else {
        return 'This licence is not CC';
    }
}
App.prototype.like = function() {
    this.stars+=1;
}
App.prototype.showStars = function() {
    return this.stars;
}




function WebApp (name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getWebData = function() {
    return this.getData() + ' ' + this.url + ' ' + this.technologies;
}
WebApp.prototype.reactBased = function() {
    if (this.technologies === 'React') {
        return 'One of technologies is ' + this.technologies;
    } else {
        return 'This technology is not React'
    }
}

function MobileApp (name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getMobileData = function () {
    return this.getData() + ' ' + this.platforms;
}
MobileApp.prototype.forAndroid = function () {
    if (this.platforms === 'Android') {
        return 'One of platforms is ' + this.platforms;
    } else {
        return 'This platform is not Android'
    }
}




var web1 = new WebApp('GitHub', 'https://github.com', 'jQuery', 'true', 4);
console.log(web1.getWebData());
//console.log(web1.reactBased());
console.log(web1.isCCLicence());
var mob1 = new MobileApp('PlayStore', 'Android', true, 5);
//console.log(mob1.getMobileData());
console.log(mob1.forAndroid());
//mob1.like();
console.log(mob1.showStars());