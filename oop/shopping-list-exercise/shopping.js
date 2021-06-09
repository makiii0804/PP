'use strict';

function Product (name, price, expDate) {
    if(!name || !price || !expDate) {
        throw new Error ('This field is required!')
    }
    this.productId = (4 * Math.random() +1).toFixed(4) *10000;
    this.name = name;
    this.price = price.toFixed(3);
    this.expDate = new Date(expDate);
    
    this.getInfo = function () {
        
        return this.name.charAt().toUpperCase() + this.name.charAt(name.length-1).toUpperCase() + this.productId + ', ' + this.name +', ' + this.price;
    }
}

function ShoppingBag () {
    
    this.listOfProducts = [];
    
    this.addProduct = function (product) {
        if(!(product instanceof Product)) {
            throw new Error ('Invalid input.')
        }
        if(product.expDate - new Date() > 0) {
            this.listOfProducts.push(product);
        }
    }
    this.getAverage = function () {
        var sum = 0;
        var list = this.listOfProducts.length;
        this.listOfProducts.forEach(function (product) {
            sum += parseFloat(product.price);
        })
        return 'The average price is: ' + (sum / list).toFixed(3);
    }
    this.getMostExpensive = function () {
        var expensive = this.listOfProducts[0];
        this.listOfProducts.forEach(function(product) {
            if(product.price > expensive.price) {
                expensive = product;
            }
            
        })
        return 'The most expensive product is: ' + expensive.name + ', price: ' + expensive.price;
    }
    this.calculateTotalPrice = function () {
        var sum = 0;
        
        this.listOfProducts.forEach(function (product) {
            sum += parseFloat(product.price);
        })
        return sum.toFixed(3);
    }
}



function PaymentCard (accBalance, cardStatus, validDate) {
    if(!accBalance || !cardStatus || !validDate) {
        throw new Error('This field is required!')
    }
    this.accBalance = accBalance.toFixed(2);
    this.cardStatus = cardStatus;
    this.validDate = new Date (validDate);
    
    
    if(!(this.validDate - new Date() > 0)) {
        throw new Error ('This credit card is expired.')
    }
    
    
    if(this.cardStatus !== 'active') {
        throw new Error ('This credit card is inactive.')
    }
    
}


function checkOutAndBuy ( shoppingBag, paymentCard) {
    if(!(shoppingBag instanceof ShoppingBag)|| !shoppingBag) {
        throw new Error('Invalid input.')
    }
    if(!(paymentCard instanceof PaymentCard)|| !paymentCard) {
        throw new Error('Invalid input.')
    }
        
    if(parseFloat(paymentCard.accBalance) >= shoppingBag.calculateTotalPrice()) {
        return  'Purchase is successiful.' 
    }

    else {
        return 'Purchase is not successiful! Missing amount: ' + (shoppingBag.calculateTotalPrice() - paymentCard.accBalance)
    }
}

var product1 = new Product ('Banana', 100, '12 Oct 2021');
var product2 = new Product ('Apple', 200, '12 Nov 2020');
var product3 = new Product ('Avocado', 300, '17 Jul 2021')

var card = new PaymentCard(200, 'active', '30 Dec 2021')

console.log(product1.getInfo());
console.log(product2.getInfo());
console.log(product3.getInfo());


var bag = new ShoppingBag ();

bag.addProduct(product1);
bag.addProduct(product2);
bag.addProduct(product3);


console.log(bag.listOfProducts);
console.log(bag.getAverage());
console.log(bag.getMostExpensive());
console.log(bag.calculateTotalPrice());
console.log(checkOutAndBuy(bag, card));