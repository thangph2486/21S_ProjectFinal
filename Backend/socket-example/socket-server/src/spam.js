const CardsService = require('./script')
const cardS = new CardsService()
let card = cardS.CARDS.slice()
console.log(cardS.isGreater1("07♠", "04♣"))