'use strict';

var CONTINETS = Object.freeze({
    EUROPE:'EU',
    ASIA: 'AS',
    AFRICA: 'AF',
    SOUTHAMERICA: 'SA',
    NORTHAMERICA: 'NA',
    AUSTRALIA: 'AU'
});


function Country (name, odds, continent) {
    
    if (!name || !odds || !continent) {
        throw new Error('This field is required!')
    }
    
    if(!['EU', 'AS', 'AF', 'SA', 'NA', 'AU'].includes (continent)) {
        throw new Error('Invalid input')
    }
    
    
    
    this.name = name;
    this.sh = this.name[0] + this.name[1] //proveriti prva dva slova
    this.odds = odds;
    this.continent = continent;
}


function Person (name, surname, dateOfBirth) {
    
    if(!name || !surname || !dateOfBirth) {
        throw new Error('This field is required!')
    }
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = new Date(dateOfBirth);
    this.day = this.dateOfBirth.getDate();
    this.month = this.dateOfBirth.getMonth() + 1;
    this.year = this.dateOfBirth.getFullYear();
    this.currentYear = new Date().getFullYear();
    this.personsAge = this.currentYear - this.year;
    
    
    this.getData = function() {
        var result ='';
        
        //SR, 1050.00 eur, Pera Peric, 29 years
        result += this.name + ' ' + this.surname  + ', '  + this.personsAge + ' years';
        
        return result;
    }
}

function Player(person, betAmount, country) {
    if (!person || !(person instanceof Person)) {
        throw new Error("Invalid input");
    }
    if (!country || !(country instanceof Country)) {
        throw new Error("Invalid input");
    }
    if (!betAmount) {
        throw new Error("Invalid input");
    }
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.winAmount = this.country.odds * this.betAmount

        
    this.getData = function () {
        //SR, 1050.00 eur, Pera Peric, 29 years
        
        return this.country.sh.toUpperCase() + ', ' + this.winAmount + ' eur' + ', ' + this.person.getData()
        
        
    }
    
    
}


function Address(country, city, postalCode, street, number) {
    if (!country || !(country instanceof Country)) {
        throw new Error("Invalid input");
    }
    if (!city || !postalCode || !street || !number) {
        throw new Error("This field is required!");
    }
    
    this.country = country;
    
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
    
    this.getData = function () {
        
        //Nemanjina 4, 11000 Beograd, SR
        return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country.sh.toUpperCase(); //proveriti za country
    }
}


function BettingPlace(address) {
    
    if (!address || !(address instanceof Address)) {
        throw new Error("Invalid input");
    }
    this.address = address;
    this.listOfPlayers = [];
    
    
    this.addPlayer = function (player) {
        
        if (!player || !(player instanceof Player)) {
            throw new Error("Invalid input");
        }
        
        this.listOfPlayers.push(player);
    }
    
    this.numberOfPlayers = function() {
        
        return this.listOfPlayers.length;
    }
    
    this.sumOfBets = function () {
        var sum = 0;
        this.listOfPlayers.forEach(function(player) {
            sum+=player.winAmount
        })
        return sum;
    }
    
    //Nemanjina, 11000 Belgrade, sum of all bets: 50000eur sum of players bet amount 
    
    this.getData = function() {
        var result = this.address.street + ', '+ this.address.postalCode + ' ' + this.address.city + ', sum of all bets: ' + this.sumOfBets() + ' eur\n '
        
        this.listOfPlayers.forEach(function(player) {
            result+='\t' + player.getData() + '\n';
        })
        return result;
    }
    
    
}



function BettingHouse(competition) {
    if (!competition) {
        throw new Error("This field is required!"); //DOVRSITI
    }
    this.competition = competition;
    this.listOfBettingPlaces = [];
    
    this.addBettingPlace = function (bettingplace) {
        if (!bettingplace || !(bettingplace instanceof BettingPlace)) {
            throw new Error("Invalid input");
        }
        this.listOfBettingPlaces.push(bettingplace);
    }


    /*this.numberOfBettPlaces = function() {
        
        return this.listOfBettingPlaces.length;
    }*/
    
    /*this.totalNumberOfBettPlaces = function () {
        var count = 0;
        
        this.listOfBettingPlaces.forEach(function(bettingplace) {
            count+= bettingplace.numberOfBettPlaces();
            
        })
        return count;
    }*/

    this.totalNumberOfPlayers = function () {
        var count = 0;
        
        this.listOfBettingPlaces.forEach(function(bettingplace) {
            count+= bettingplace.numberOfPlayers();
            
        })
        return count
    }

    this.totalBets = function () {
        var sum = 0;
        this.listOfBettingPlaces.forEach(function(bettingplace) {
            sum+=bettingplace.sumOfBets()
        })
        return sum;
    }
    
    this.getData = function () {
        
        /*Football World Cup Winner, 2 betting places, 4 bets
        Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
        SR, 1050.00 eur, Pera Peric, 29 years
        SR, 1050.00 eur, Pera Peric, 29 years
        Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
        GR, 1050.00 eur, Pera Peric, 29 years
        SR, 1050.00 eur, Pera Peric, 29 years
        
        There are 3 bets on Serbia*/

        var result = this.competition + ', ' + this.listOfBettingPlaces.length + ' betting places, ' + this.totalNumberOfPlayers() + ' bets\n';

        this.listOfBettingPlaces.forEach(function(bettingplace) {
            result+= bettingplace.getData();
            
        })
        
        return result;

    }
}   

function createPlayer (name, surname, date, bet, countryName, odds, continent) {
    var person = new Person(name, surname, date);
    var country = new Country(countryName, odds, continent);
    
    return new Player(person, bet, country);
}

function createBettingPlace (country, odds, continent, city, postalCode, street, number) {
    var country1 = new Country(country, odds, continent)
    var address1 = new Address(country1, city, postalCode, street, number)
    
    return new BettingPlace(address1);
}

var sport = new BettingHouse('Football World Cup Winner');

var player1 = createPlayer('Pera', 'Peric', '27 Oct 1991', 1000, 'Srbija', 1.50, CONTINETS.EUROPE);
var player2 = createPlayer('Marko', 'Markovic', '17 Nov 1995', 1100, 'Srbija', 1.20, CONTINETS.EUROPE);
var player3 = createPlayer('Jovan', 'Jovanovic', '07 Apr 1998', 2000, 'Srbija', 2.50, CONTINETS.EUROPE);
var player4 = createPlayer('Milos', 'Peric', '30 Sep 1992', 900, 'Srbija', 1.00, CONTINETS.EUROPE);

var bett1 = createBettingPlace('Srbija', 1.50, CONTINETS.EUROPE, 'Beograd', 11000, 'Nemanjina', 4);
var bett2 = createBettingPlace('Srbija', 1.20, CONTINETS.EUROPE, 'Beograd', 11000, 'Beogradska', 11);



bett1.addPlayer(player1);
bett1.addPlayer(player2);
bett2.addPlayer(player3);
bett2.addPlayer(player4);

sport.addBettingPlace(bett1);
sport.addBettingPlace(bett2);



console.log(sport.getData());