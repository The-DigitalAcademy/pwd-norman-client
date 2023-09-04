
const cartManager = {
    /**
     * adds new item to cart array in localStorage
     * @param {*} item {id, name,, litre, price, image}
     */
    addItem: function (item ) {
        console.log(item);
        const cart = this.getCart()
        cart.push(item)
        this.updateCart(cart)
    },
    /**
     * removes item with itemId from cart array in localStorage
     * @param {string} itemId id of item
     */
    removeItem: function(itemId) {
        const cart = this.getCart()
        const itemIndex = cart.findIndex((item => item.id == itemId))
        if (itemIndex < 0) return
        cart.splice(itemIndex, 1)
        this.updateCart(cart)
    },
    updateCart: function(newCart) {
        const jsonCart = JSON.stringify(newCart)
        localStorage.setItem('cart', jsonCart)
    },
    /**
     * returns array of cart items
     * @returns {[]} array of cart items
     */
    getCart: function() {
        const jsonCart = localStorage.getItem('cart')
        if (!jsonCart) {
            localStorage.setItem('cart', JSON.stringify([]))
            return []
        }
        return JSON.parse(jsonCart)
    }
}

export default cartManager