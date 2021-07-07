'use strict';

function Person (name, surname) {
    if(!name || !surname) {
        throw new Error('This input is required!')
    }
    this.name = name;
    this.surname = surname;
    
    this.getData = function () {
                
        return `${this.name} ${this.surname}`;
    }
}

function Seat (number, category) {
    
    number = number || Math.round(90 * Math.random() + 10);
    category = category || 'e';
    
    if(!number) {
        throw new Error('This input is required!')
    }
    
    this.number = number;
    this.category = category;

    if (!['e', 'b'].includes(category)) {
        throw new Error('Invalid category input')
    }
    
    this.getData = function () {
        
        return `${this.number} ${this.category.toUpperCase()}`;
    }
}

function Passenger (person, seat) {
    if(!person || !(person instanceof Person)) {
        throw new Error('Invalid input')
    }
    if(!seat || !(seat instanceof Seat)) {
        throw new Error('Invalid input')
    }
    
    this.person = person;
    this.seat = seat;
    
    this.getData = function () {
        
        return `${seat.getData()}, ${person.getData()}`;
    }
}

function Flight (relation, date) {
    
    if(!relation || !date) {
        throw new Error('This input is required!')
    }
    
    this.relation = relation;
    this.date = date;
    
    this.listOfPassengers = [];
    
    this.addPassenger = function (passenger) {
        
        if (!passenger || !(passenger instanceof Passenger)) {
            throw new Error('Invalid input')
        }
        
        this.listOfPassengers.push(passenger);
    }
    
    this.getData = function () {

        let result = `${this.date}, ${this.relation}
        `

        this.listOfPassengers.forEach(function (passenger) {
            
            result+=`${passenger.getData()}
            `; 
            
            
        })
        
        return result;
        
        
    }
    
    this.numberOfPassengers = function () {
        return this.listOfPassengers.length;
    } 
    
}


function Airport () {
    this.name = 'Nikola Tesla';
    this.listOfFlights = [];
    
    
    this.addFlight = function (flight) {
        if (!flight || !(flight instanceof Flight)) {
            throw new Error('Invalid input')
        }
        
        this.listOfFlights.push(flight);
    }
    
    this.getTotalPassengerNumber = function () {
        
        let count = 0;
        this.listOfFlights.forEach(function(flight) {
            count += flight.numberOfPassengers()
        })
        return count;
    }
    
    this.getData = function () {
        
        let result = `Airport: ${this.name}, total passengers: ${this.getTotalPassengerNumber()}
        `;

        this.listOfFlights.forEach(function(flight) {
            result += flight.getData();
        })
        return result;
    }
}

function createFlight (relation, date) {
    
    return new Flight(relation, date);
}

function createPassenger (name, surname, number, category) {
    let person = new Person(name, surname)
    let seat = new Seat(number, category)
    return new Passenger(person, seat);
}



let airPort = new Airport();

let flight1 = createFlight('Belgrade - New York', 'Oct 25 2017');
let flight2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017');

let passenger1 = createPassenger('John', 'Snow', 1, 'b');
let passenger2 = createPassenger('Cercei', 'Lannister', 2, 'b');
let passenger3 = createPassenger('Daenerys', 'Targaryen',14);
let passenger4 = createPassenger('Tyrion', 'Lannister');

flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);

flight2.addPassenger(passenger3);
flight2.addPassenger(passenger4);

airPort.addFlight(flight1);
airPort.addFlight(flight2);

console.log(airPort.getData());



