"use strict";
function Product(name, price, expDate) {
  if (!name || !price || !expDate) {
    throw new Error("This field is required!");
  }
  this.productId = Math.round(Math.random().toFixed(5) * 100000);
  this.name = name;
  this.price = price.toFixed(3);
  this.expDate = new Date(expDate);
  this.shortName = function () {
    return `${this.name.charAt().toUpperCase()}${this.name
      .charAt(name.length - 1)
      .toUpperCase()}`;
  };
  this.getInfo = function () {
    return `${this.shortName()}${this.productId}, ${this.name}, ${this.price}`;
  };
}
function ShoppingBag() {
  this.listOfProducts = [];
  this.addProduct = function (product) {
    if (!(product instanceof Product)) {
      throw new Error("Invalid input.");
    }
    if (product.expDate - new Date() > 0) {
      this.listOfProducts.push(product);
    }
  };
  this.getAverage = function () {
    let sum = 0;
    let list = this.listOfProducts.length;
    this.listOfProducts.forEach(function (product) {
      sum += parseFloat(product.price);
    });
    return `The average price is: ${(sum / list).toFixed(3)}`;
  };
  this.getMostExpensive = function () {
    let expensive = this.listOfProducts[0];
    this.listOfProducts.forEach(function (product) {
      if (product.price > expensive.price) {
        expensive = product;
      }
    });
    return `The most expensive product is: ${expensive.name}, price: ${expensive.price}`;
  };
  this.calculateTotalPrice = function () {
    let sum = 0;
    this.listOfProducts.forEach(function (product) {
      sum += parseFloat(product.price);
    });
    return `Total price: ${sum.toFixed(3)}`;
  };
}
