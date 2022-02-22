'use strict';

// JS for lab 11 BusMall

let totalVotes = 25; //count for how many votes have been cast

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
  this.src = `img/${name}.${fileExtention}`;
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

  /////////////////////////////////////////////////////
  // when i use a while loop it crashes my browser?? //
  /////////////////////////////////////////////////////

  while(itemOne === itemTwo || itemOne === itemThree || itemTwo === itemThree){
    itemTwo = getRandomImg();
    itemThree = getRandomImg();
  }

  // while(itemOne === itemTwo){
  //   itemTwo = getRandomImg();
  // }

  // while(itemOne === itemThree || itemTwo === itemThree){
  //   itemThree = getRandomImg();
  // }

  /////////////////////////////////////
  // end of loop thats causing issue //
  /////////////////////////////////////

  imgOne.src = allItems[itemOne].src;
  imgOne.alt = allItems[itemOne].name;
  allItems[itemOne].views++;

  imgTwo.src = allItems[itemTwo].src;
  imgTwo.alt = allItems[itemTwo].name;
  allItems[itemTwo].views++;

  imgThree.src = allItems[itemThree].src;
  imgThree.alt = allItems[itemThree].name;
  allItems[itemThree].views++;

  console.log(itemOne);
  console.log(itemTwo);
  console.log(itemThree);

}

createImgs();

// Event - handler

function handleClick(event){
  totalVotes--;

  let imgClicked = event.target.alt;

  for(let i = 0; i < allItems.length; i++){
    if(imgClicked === allItems[i].name){
      allItems[i].clicks++;
    }
  }

  //creates my images
  createImgs();

  if(totalVotes === 0){
    myContainer.removeEventListener('click', handleClick);
  }
}

// button showing the results
function handleShowList(){
  if(totalVotes === 0){
    for(let i = 0; i < allItems.length; i++){
      let li = document.createElement('li');
      li.textContent = `${allItems[i].name} had ${allItems[i].clicks} votes, and was seen ${allItems[i].views}`;
      displayList.appendChild(li);
    }
  }
}

myContainer.addEventListener('click', handleClick);

resultsButton.addEventListener('click', handleShowList);
