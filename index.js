let player = []
let cards = []
let sum = 0
isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.querySelector("#player-el")

function getRandomCard() {
    
    let randomCard = Math.floor( Math.random() *13) + 1
    if (randomCard === 1){
        return 11
    } else if (randomCard > 10){
        return 10
    } else {
        return randomCard
    }
}

function startGame(){

player = {
    name: "Yobby",
    chips: "500"
}
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message= "Do you want to draw a new card?"
    } else if (sum === 21) {
        message= "Congratulations! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
   messageEl.textContent = message
   playerEl.textContent = player.name + ": $" + player.chips
}

function newCard() {
    
    if ( isAlive === true && hasBlackJack === false){
        let Card = getRandomCard()
        sum += Card
        cards.push(Card)
        renderGame()
    }
 
    
}

