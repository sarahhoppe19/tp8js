//java script code for memory game - TP8JS

//set up card tracker
cardsClicked = 0;

function cardClicked(what) {
  //making sure the card hasn't already been matched
  if (!what.classList.contains("matched")) {
  
    if (what.classList.contains("clicked")) {
      //it's already clicked
      what.classList.remove("clicked");
      cardsClicked--;

    } else {
      //it's not already clicked
      what.classList.add("clicked");
      cardsClicked++;

      if (cardsClicked == 2) {
        //compare cards values/images
        cardCompare();
      }
    }
  }
}

function cardCompare() {
  clickedCards = document.getElementsByClassName("clicked");
  
  //first element is clickedCards[0]
  //second element is clickedCards[1]
  
  matched = false;  //track if anything matched
  
  if (clickedCards[0].classList.contains("banana") && clickedCards[1].classList.contains("banana")) {
    matched = true; //matched banana
  } else  if (clickedCards[0].classList.contains("orange") && clickedCards[1].classList.contains("orange")) {
    matched = true; //matched orange
  } else if (clickedCards[0].classList.contains("strawberry") && clickedCards[1].classList.contains("strawberry")) {
    matched = true; //matched strawberry
  } else if (clickedCards[0].classList.contains("blueberry") && clickedCards[1].classList.contains("blueberry")) {
    matched = true; //matched blueberry
  }
  
  if (matched) {
    //hide cards
    removeCards(clickedCards[0], clickedCards[1]);
  } else {
    //unflip cards
    unflipCards(clickedCards[0], clickedCards[1]);
  }  
}

function removeCards(cardA, cardB) {
  pause = setTimeout(function() {
  
    cardA.classList.add("matched");
    cardB.classList.add("matched");

    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardsClicked = 0;
  }, 1000);
}

function unflipCards(cardA, cardB) {
  pause = setTimeout(function() {
  
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");

    cardsClicked = 0;
  }, 1000)
}

//when page loads
window.onload = function() {
  cardList = document.getElementsByClassName("card"); //collection of cards
  
  cardCount = cardList.length; //how many cards are on the board
  
  for (i = 0; i < cardCount; i++) {
    cardList[i].onclick = function() {
      cardClicked(this);
    }
  }
  
  
}