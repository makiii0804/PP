/*1. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/

function Recipe (name, type, complexity, arrIngridients, time, instructions) {
    this.name = name;
    this.type = type;
    this.complexity = complexity;
    this.arrIngridients = arrIngridients;
    this.time = time;
    this.instructions = instructions;

    this.printIngridients = function () {
        return this.arrIngridients;
    },

    this.canBePreparedFast = function (prepTime) {
       return this.prepTime < 15
    
    };
    this.changeTypeOfCuisine = function (newType) {
        return this.type = newType;
    }
    this.delete = function(arrIngridients){
        newList = [];
        for(var i = 0; i < this.list.length; i++){
            if(this.arrIngridients[i] !== a){
                newList[newList.length] = this.arrIngridients[i];
            }
        }
        this.arrIngridients= newList;
    }

}
 
var spagete = new Recipe('bolonjeze', 'italian', 1, ['origano', 'kečap'], 5, 'staviti ulje u tiganj' );
console.log(spagete.canBePreparedFast());



 