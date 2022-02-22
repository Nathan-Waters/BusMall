'use strict';

// JS for lab 11 BusMall

let totalVotes = 0; //count for how many votes have been cast

let allItems = []; //all of the items that will be ran though

//DOM References
let myContainer = document.getElementById('container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsButton = document.getElementById('show-results-button');
let displayList = document.getElementById('display-list');


//items constructor

function Items(name, fileExtention = 'jpg'){
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = 'img/${name}.${fileExtention}';
  allItems.push(this);
}

//creating our items
new Items('bag');
new Items('banana');
new Items('bathroom');
new Items('boots');
new Items('breakfast');
new Items('bubblegum');
new Items('chair');
new Items('cthulhu');
new Items('dog-duck');
new Items('dragon');
new Items('pen');
new Items('pet-sweep');
new Items('scissors');
new Items('shark');
new Items('sweep', 'png');
new Items('tauntaun');
new Items('unicorn');
new Items('water-can');
new Items('wine-glass');

console.log(allItems);

//function to help us randomly select imgs
function getRandomImg() {
  return Math.floor(Math.random() * allItems.length);
}

function createImgs(){
  let itemOne = getRandomImg();
  let itemTwo = getRandomImg();
  let itemThree = getRandomImg();
}

createImgs();
