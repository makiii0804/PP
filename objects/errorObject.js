var marija = function () {
    var string = 'pera';
    if(string !== 'marija') {
    throw new TypeError('error string')
    }
}

try {
    marija()
} catch (error) {
    console.log(error.message);
}