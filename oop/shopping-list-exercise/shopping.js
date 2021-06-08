'use strict';

function Product (name, price, expDate) {
    this.productId = (4 * Math.random() +1).toFixed(4);
    this.name = name;
    this.price = price.toFixed(3);
    this.expDate = new Date(expDate);
}

function ShoppingList () {
    
    this.listOfProducts = [];
}

var banana = new Product ('banana', 100, '12 Oct 2021');
console.log(banana);