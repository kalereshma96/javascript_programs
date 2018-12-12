(function () {

    var cardWeights = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
    var cardTypes = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var cards = new Array();

    function card(cardType, weight) {
        this.cardType = cardType;
        this.weight = weight;
    };

    function CreateDeck() {
        cardTypes.forEach(function (weight) {
            cardWeights.forEach(function (type) {
                cards.push(new card(type, weight));
            });
        });
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function shuffleDeck(shuffleCnt) {
        for(var i = 0; i < shuffleCnt; i++) {
            var rndNo = getRandomInt(1, 52);
            var card = cards[i];
            cards[i] = cards[rndNo];
            cards[rndNo] = card;
        }
    }


    CreateDeck();
    console.log(cards);
    shuffleDeck(getRandomInt(10, 25));
    console.log(cards);
})();