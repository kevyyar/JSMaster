const hi = () => {
    // console.log('Hi')
    console.log(this)
}

// hi()

const person = {
    name: 'Kev',
    last: 'Barreto',
    age: 28,
    fullName() {
        const {name, last, age} = this;
        return (`${name} ${last} is ${age} years old`)
    },
    printBio() {
       const fullName = this.fullName()
        console.log(`${fullName} is the person so respect it!`)
    }
}

// person.printBio()
////////////////////////////////////////////////////////////////
const annoyer = {
    phrases: ['literally', 'cray cray', 'suh dude', 'YOLO', 'aight then'],
    pickPhrase() {
        const {phrases} = this
        const phraseIndex = Math.floor(Math.random() * phrases.length)
        return phrases[phraseIndex]
    },
    start() {
        this.timerID = setInterval(() => {
            console.log(this.pickPhrase())
        }, 2000)
    },
    stop() {
        clearInterval(this.timerID)
    }

}
// annoyer.start()
// console.log(annoyer.pickPhrase())

/////////////////////////////////////////////////////////////

const myDeck = {
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,K,Q,A',
    deck: [],
    drawnCards: [],
    initializeDeck() {
        const { suits, values, deck } = this
        for(let value of values.split(',')) {
            for(let suit of suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
    return deck
    },
    drawCard() {
        const card = this.deck.pop()
        this.drawnCards.push(card)
        return card
    },
    drawMultipleCards(numCards) {
       const cards = []
       for(let i = 0; i < numCards; i++) {
           cards.push(this.drawCard())
       }
       return cards
    }
}
console.log(myDeck.initializeDeck())
console.log(myDeck.drawCard())
console.log(myDeck.drawMultipleCards(9))