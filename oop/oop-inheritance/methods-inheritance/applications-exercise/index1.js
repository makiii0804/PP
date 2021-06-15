function App (name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
App.prototype.getData = function() {
    return this.name + ' ' + this.licence + ' ' + this.stars;
}

function WebApp (name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;