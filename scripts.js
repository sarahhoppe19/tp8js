//java script code for memory game - TP8JS

window.onload = function() {
  cardList = document.getElementsByClassName("card"); //collection of cards
  
  cardCount = cardList.length; //how many cards are on the board
  
  for (i = 0; i < cardCount; i++) {
    cardList[i].onclick = function() {
      this.classList.toggle("clicked");
    }
  }
  
  
}