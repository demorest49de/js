'use strict';

const cart = {
    items: [],
    get totalPrice() {
        return this.calculateItemPrice();
    },
    count: 0,
    add(name, price, amount = 1) {
        const product = {
            name,
            price,
            amount,
        };
        this.items.push(product);
        this.increaseCount(amount);
        this.calculateItemPrice();
    },
    increaseCount(amount) {
        this.count += amount;
    },
    calculateItemPrice() {
        let totalForAllProducts = 0;
        for (const item of this.items) {
            totalForAllProducts += item.price * item.amount;
        }
        return totalForAllProducts;
    },
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Общая стоимость корзины: ${this.totalPrice} рублей`);
    },
};

cart.add('red wine', 2000, 3);
cart.add('white wine', 1000, 1);
cart.add('parmesane', 300, 1);
cart.add('black angus', 1500, 2);

cart.print();
