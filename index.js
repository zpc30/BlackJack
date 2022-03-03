let player = {
    name: 'Luka',
    credit: 145,
    sayHello: function(){
        console.log('hello');
    }
}

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = '';
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards');
let sumEl = document.getElementById('sum-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': $' + player.credit;

function getRandomCard() {
    let random = Math.floor(Math.random()*13) + 1;
    if (random  > 10) {
        return 10;
    } else if (random === 1) {
        return 11;
    } else {
        return random;
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ', ';
    }
    sumEl.textContent = 'Sum: ' + sum;
    if (sum <= 20) {
        msg = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        msg = 'You\'ve got Blackjack!';
        hasBlackJack = true;
    } else {
        msg = 'You\'re out of the game!';
        isAlive = false;
    }
    messageEl.textContent = msg;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let drawNew = getRandomCard();
        sum += drawNew;
        cards.push(drawNew);
        renderGame();
    }
}