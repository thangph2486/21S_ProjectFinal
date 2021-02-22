const ShopItem = require('./models/shop-item.model')

class Database {
    item;
    cart
    constructor() {
        this.item = []
        this.cart = []
    }
    /**
     * 
     * @param {ShopItem} item 
     */
    createItem(item) {
        this.item.push(item)
    }
    /**
     * 
     * @returns {ShopItem} Found item 
     */
    getAll() {
        return this.item
    }
    getItemID() {
        'clmm alo?'
    }
}

module.exports = Database