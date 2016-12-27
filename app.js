var $ = jQuery
$(document).ready(function(){
  // Bartender Questions - Constructor Object function
  function Questions (q1, q2, q3, q4){
    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
    this.q4 = q4;
  }
  
  // Bartender Ingredients - Constructor Object function
  function Ingredients (strong, salty, bitter, tart, other) {
    this.strong = strong;
    this.salty = salty;
    this.bitter = bitter;
    this.tart = tart;
    this.other = other;
  }
  
  // Bartender Pantry - Constructor Object function
  function Pantry (ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8) {
    this.ing1 = ing1;
    this.ing2 = ing2;
    this.ing3 = ing3;
    this.ing4 = ing4;
    this.ing5 = ing5;
    this.ing6 = ing6;
    this.ing7 = ing7;
    this.ing8 = ing8;
  }
  
  // Top 4 Bartender questions
  var bartenderQuestions = new Questions('How do you like your drink?',
                                         'Bitter or Sweet?',
                                         'Fruity finish?',
                                         '...with or without ice?'
                                        );
  // Top 5 Bartender ingredients
  var bartenderIngredients = new Ingredients('Rum', 'Salty Olive', 'Gin', 'Brandy', 'Russian Vodka')
  
  // Pirate bartender Pantry
  var pirateBartenderPantry = new Pantry('Whiskey', 'Tequila', 'Vodka', 'Orange Juice', 'Curaçao', 'Sparkiling Wine', 'Cherry on top', 'Campari');
  
  
  // append questions to DOM
  var quest1 = bartenderQuestions.q1;
  var quest2 = bartenderQuestions.q2;
  var quest3 = bartenderQuestions.q3;
  var quest4 = bartenderQuestions.q4;
  
  var question1 = '<li>' + quest1 + '</li>';
  $(question1).appendTo('.questions ul');
  
  var question2 = '<li>' + quest2 + '</li>';
  $(question2).appendTo('.questions ul');
  
  var question3 = '<li>' + quest3 + '</li>';
  $(question3).appendTo('.questions ul');

  var question4 = '<li>' + quest4 + '</li>';
  $(question4).appendTo('.questions ul');
  
  // answers to Bartender questions
  $('form.form').submit (function(event) {
    event.preventDefault();  
    var ans1  = $('#Q1').val();
    var ans2  = $('#Q2').val();
    var ans3  = $('#Q3').val();
    var ans4  = $('#Q4').val();
  
  // choices from bartender questions
    var preferences = {
      quest1: ans1,
      quest2: ans2,
      quest3: ans3,
      quest4: ans4
    }
    
  // Top 5 Non-Alcohlic ingredients 
    function NonAlcoholicIngredients (noalc1, noalc2, noalc3, noalc4, noalc5) {
      this.noalc1 = noalc1;
      this.noalc2 = noalc2;
      this.noalc3 = noalc3;
      this.noalc4 = noalc4;
      this.noalc5 = noalc5;
    };
    
    var bartenderNonAlcholicIngredients = new NonAlcoholicIngredients ('Ginger Ale', "Pineapple Juice", 'Kiwi Juice', 'Grenadine Syrup', 'Peeled Mango')
    
  // Top 3 bartender Fruits  
    function Fruits (f1, f2, f3) {
      this.f1 = f1;
      this.f2 = f2;
      this.f3 = f3
    };
    
    var bartenderFruits = new Fruits ('Cherry', 'Kiwi', 'Pineapple');
  
  // Random Name generator for drinks
    function Name (n1, n2, n3, n4) {
      this.n1 = n1;
      this.n2 = n2;
      this.n3 = n3;
      this.n4 = n4
    }
    
    var drinksName = new Name ('Dry', 'Closure', 'Bloody', 'Function')
    
  // Drinks creator function
    function createDrink () {
      if (ans1 === "STRONG" && ans2 === "BITTER" && ans3 === "YES" && ans4 === "ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = bartenderIngredients[Object.keys(bartenderIngredients)[Math.floor(Math.random()*Object.keys(bartenderIngredients).length)]];
        var ingredient3 = bartenderFruits[Object.keys(bartenderFruits)[Math.floor(Math.random()*Object.keys(bartenderFruits).length)]];
      } else if (ans1 === "NON ALCOHOLIC" && ans4 === "ICE" ) {
        var ingredient1 = bartenderNonAlcholicIngredients[Object.keys(bartenderNonAlcholicIngredients)[Math.floor(Math.random()*Object.keys(bartenderNonAlcholicIngredients).length)]];
        var ingredient2 = bartenderNonAlcholicIngredients[Object.keys(bartenderNonAlcholicIngredients)[Math.floor(Math.random()*Object.keys(bartenderNonAlcholicIngredients).length)]];
        var ingredient3 = bartenderFruits[Object.keys(bartenderFruits)[Math.floor(Math.random()*Object.keys(bartenderFruits).length)]];
      } else if (ans1 === "NON ALCOHOLIC" && ans4 === "NO ICE" ) {
        var ingredient1 = bartenderNonAlcholicIngredients[Object.keys(bartenderNonAlcholicIngredients)[Math.floor(Math.random()*Object.keys(bartenderNonAlcholicIngredients).length)]];
        var ingredient2 = bartenderNonAlcholicIngredients[Object.keys(bartenderNonAlcholicIngredients)[Math.floor(Math.random()*Object.keys(bartenderNonAlcholicIngredients).length)]];
        var ingredient3 = bartenderFruits[Object.keys(bartenderFruits)[Math.floor(Math.random()*Object.keys(bartenderFruits).length)]];
      } else if (ans1 === "STRONG" && ans2 === "BITTER" && ans3 === "YES" && ans4 === "NO ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = bartenderIngredients[Object.keys(bartenderIngredients)[Math.floor(Math.random()*Object.keys(bartenderIngredients).length)]];
        var ingredient3 = bartenderFruits[Object.keys(bartenderFruits)[Math.floor(Math.random()*Object.keys(bartenderFruits).length)]];
      } else if ( ans2 === "SWEET" && ans3 === "YES" && ans4 === "NO ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient3 = bartenderFruits[Object.keys(bartenderFruits)[Math.floor(Math.random()*Object.keys(bartenderFruits).length)]];
      } else if ( ans2 === "SWEET" && ans3 === "YES" && ans4 === "ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient3 = bartenderFruits[Object.keys(bartenderFruits)[Math.floor(Math.random()*Object.keys(bartenderFruits).length)]];
      } else if ( ans2 === "SWEET" && ans3 === "NO" && ans4 === "ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient3 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
      } else if ( ans1 === "STRONG" && ans3 === "NO" && ans4 === "ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient3 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
      } else if ( ans2 === "SWEET" && ans3 === "NO" && ans4 === "NO ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient3 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
      } else if ( ans1 === "STRONG" && ans3 === "NO" && ans4 === "NO ICE") {
        var ingredient1 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient2 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
        var ingredient3 = pirateBartenderPantry[Object.keys(pirateBartenderPantry)[Math.floor(Math.random()*Object.keys(pirateBartenderPantry).length)]];
      }
      var ingredient4 = ans4 === "ICE" ? "Ice" : "No Ice!!";
      var randomName1 = drinksName[Object.keys(drinksName)[Math.floor(Math.random()*Object.keys(drinksName).length)]];
      var randomName2 = drinksName[Object.keys(drinksName)[Math.floor(Math.random()*Object.keys(drinksName).length)]];
      var drinkName = randomName1 + ' ' + randomName2;
      var drink = '<li>' + '<h3>' + drinkName + '</h3>=  ' + ingredient1 + ', ' + ingredient2 + ', ' + ingredient3 + ', ' + ingredient4 + '</li>';
      $(drink).appendTo('.drink ul');
    };
   createDrink() 
  });
});