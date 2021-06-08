'use strict';

function Product (name, price, expDate) {
    this.productId = (4 * Math.random() +1).toFixed(4) *10000;
    this.name = name;
    this.price = price.toFixed(3);
    this.expDate = new Date(expDate);

    this.getInfo = function () {

        return this.name.charAt().toUpperCase() + this.name.charAt(name.length-1).toUpperCase() + this.productId + ', ' + this.name +', ' + this.price;
    }
}

function ShoppingList () {

    this.listOfProducts = [];

    this.addProduct = function (product) {
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
        return (sum / list).toFixed(3);
    }
    this.getMostExpensive = function () {
        var expensive = this.listOfProducts[0];
        this.listOfProducts.forEach(function(product) {
            if(product.price > expensive.price) {
                expensive = product;
            }

        })
        return expensive;
    }
    this.calculateTotalPrice = function () {
        var sum = 0;
        
        this.listOfProducts.forEach(function (product) {
            sum += parseFloat(product.price);
        })
        return sum.toFixed(3);
    }
}

var banana = new Product ('banana', 100, '12 Oct 2021');
var apple = new Product ('apple', 200, '12 Oct 2021');
console.log(banana.getInfo());
var list = new ShoppingList ();
list.addProduct(banana);
list.addProduct(apple);
console.log(list.calculateTotalPrice());