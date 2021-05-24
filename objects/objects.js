/*1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!*/

/*var coffee = {
name: 'nescaffe',
strenght: 'light',
flavour: 'vanilla',
milk: true,
sugar: true,
}
console.log(coffee.flavour);*/


/*2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.*/

/*var movie = {
    title: 'Titanic',
    actors: {
        actor1: {
            firstName: 'Leonardo',
            lastName: 'Di Caprio',
        },

        actor2: {
            firstName: 'Kate',
            lastName: 'Winslet',
        }
    },

    director: {
        firstName: 'James',
        lastName: 'Cameroon',
    },
    genre: 'Romance',

    popularity: '7.8/10 IMDB reference'

}

console.log(movie.title);
console.log(movie.actors);
console.log(movie.actors.actor1.firstName);
console.log(movie.actors.actor2);*/

function createMovie(t, d, g, gr) {
    var movie = {
        title: t,
        director: d,
        genre: g,
        imdbGrade: gr,
    }
    return movie
}
var titanic = createMovie ('Titanic', 'James Cameroon', 'Romance', 7.8)
var reservoirOfDogs = createMovie ('Reservoir of dogs','Peter Jackson', 'thriller', 8.7)
console.log(titanic);
console.log(reservoirOfDogs);

/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.*/


function testProject (description, language, gitUrl, developmentStatus) {
    var project = {
        description: description,
        language: language,
        gitRepository: gitUrl,
        inDevelopment: developmentStatus,
    


        printGit: function () {
            return project.gitRepository;
        },
        isJavaScript: function () {
            if (project.language === 'JavaScript') {
                return 'language is JavaScript';
            } else {
                return 'language is ' + project.language;
            }
        },
        isInDevelopment: function () {
            if(project.inDevelopment === true) {
                return 'project is in development';
            } else {
                return 'project is not in development';
            }
        }

    }
    return project;
}

var login = testProject ('login form for facebook', 'Php', 'https://github.com/makiii0804', true);

console.log(login);

console.log(login.printGit());
console.log(login.isJavaScript());
console.log(login.isInDevelopment());



/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/

function testRecipe (name, type, complexity, arrIngridients, time, instructions) {

    if ( complexity > 5 || complexity < 1) {
        console.log('Please enter valid value between 1 and 5 :) ');
        return;

    }

    var recipe= {
        name: name,
        typeOfCuisine: type,
        complexity: complexity,
        ingridients: arrIngridients,
        prepTime: time,
        prepInstructions: instructions,

        printIngridients: function () {
            console.log(recipe.ingridients)
        },

        checkTime: function () {
            if (recipe.prepTime < 15) {
                console.log('Time for preparing meal is less than 15min');
            } else if ( recipe.prepTime = 15) {
                console.log('Time for preparing meal is 15min');
            } else {
                console.log('Time for preparing meal is ' + recipe.prepTime +'min');
            }
        
        },
        
        deleteGivenIngredient: function() {
            recipe.ingridients.pop()
            return recipe.ingridients;
        }


        
    }   


    
}




var spagete = testRecipe ('bolonjeze', 'italian', 1, ['origano', 'kečap'], '15min', 'staviti ulje u tiganj' );
console.log(spagete);



















/* 3.function createProject ( desc, lang, url, dev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl: url,
        isInDev: dev,
        printRepository: function () {
            console.log(url);
        },
        isJavaScript: function () {
            return lang === 'JavaScript';
        
        },
        isDevelopment: function () {
            return dev ? 'project is in development' : 'project is not in development'
        }
    }
    return project;
}
var calculator = createProject ('program that calculates..', 'Java Script', 'https:/github', true);
var blog = createProject ('blog portal', 'wordpress', 'https:/github', false);

console.log(calculator);
console.log(blog);

calculator.printRepository();
blog.printRepository();

console.log(calculator.isDevelopment());
console.log(blog.isDevelopment());*/
