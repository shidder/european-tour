'use strict';

var tabButtons = document.querySelector('.tabs');
var greeceButton = document.getElementById('greece-btn');
var albaniaButton = document.getElementById('albania-btn');
var macedoniaButton = document.getElementById('macedonia-btn');
var montenegroButton = document.getElementById('montenegro-btn');
var croatiaButton = document.getElementById('croatia-btn');


var greeceCard = document.getElementById('greece-card');
var albaniaCard = document.getElementById('albania-card');
var macedoniaCard = document.getElementById('macedonia-card');
var montenegroCard = document.getElementById('montenegro-card');
var croatiaCard = document.getElementById('croatia-card');




tabButtons.onclick = function (evt) {
  var target = evt.target;
  if(target === greeceButton) {
    greeceCard.classList.remove('card__wrapper--hidden')
     albaniaCard.classList.add('card__wrapper--hidden')
  macedoniaCard.classList.add('card__wrapper--hidden')
   montenegroCard.classList.add('card__wrapper--hidden')
   croatiaCard.classList.add('card__wrapper--hidden')
  } else if(target === albaniaButton) {
    albaniaCard.classList.remove('card__wrapper--hidden')
     greeceCard.classList.add('card__wrapper--hidden')
    macedoniaCard.classList.add('card__wrapper--hidden')
   montenegroCard.classList.add('card__wrapper--hidden')
   croatiaCard.classList.add('card__wrapper--hidden')
  } else if(target === macedoniaButton) {
    macedoniaCard.classList.remove('card__wrapper--hidden')
     greeceCard.classList.add('card__wrapper--hidden')
    albaniaCard.classList.add('card__wrapper--hidden')
   montenegroCard.classList.add('card__wrapper--hidden')
   croatiaCard.classList.add('card__wrapper--hidden')
  } else if(target ===  montenegroButton) {
    montenegroCard.classList.remove('card__wrapper--hidden')
     greeceCard.classList.add('card__wrapper--hidden')
    albaniaCard.classList.add('card__wrapper--hidden')
    macedoniaCard.classList.add('card__wrapper--hidden')
   croatiaCard.classList.add('card__wrapper--hidden')
  }else if(target === croatiaButton) {
    croatiaCard.classList.remove('card__wrapper--hidden')
     greeceCard.classList.add('card__wrapper--hidden')
     albaniaCard.classList.add('card__wrapper--hidden')
    macedoniaCard.classList.add('card__wrapper--hidden')
   montenegroCard.classList.add('card__wrapper--hidden')

  }
 }





/*

tabButtons.onclick =  function(event) {
  var target = event.target;
  switch (target) {
    case greeceButton :
    return greeceCard.classList.remove('card__wrapper--hidden');
  case albaniaButton :
    return albaniaCard.classList.remove('card__wrapper--hidden');
}
}
*/
var currentCard = document.getElementById('greece-card')
var chooseCard = function (value) {
  switch (currentCard) {
    case albaniaButton :
      return  albaniaCard.classList.remove('card__wrapper--hidden');
    case macedoniaButton :
      return macedoniaCard.classList.remove('card__wrapper--hidden');
    case montenegroButton :
      return montenegroCard.classList.remove('card__wrapper--hidden');
    case croatiaButton:
      croatiaCard.classList.remove('card__wrapper--hidden')
    default:
      return  greeceCard.classList.remove('card__wrapper--hidden');
  }
}
tabButtons.addEventListener('change', chooseCard);
