'use strict';

const cart = {
  items: [],
  discount: 0,
  set setDiscount(value) {
    switch (value) {
      case 'METHED':
        this.discount = 15;
        break;
      case 'NEWYEAR':
        this.discount = 21;
        break;
      default:
        this.discount = 0;
        break;
    }
  },
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
  },
  increaseCount(amount) {
    this.count += amount;
  },
  calculateItemPrice() {
    let totalForAllProducts = 0;
    for (const item of this.items) {
      totalForAllProducts += item.price * item.amount;
    }
    return totalForAllProducts - (totalForAllProducts * (this.discount / 100));
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    if (this.discount !== 0) {
      console.log(`Ваша скидка состовляет ${this.discount} %`);
    }
    console.log(`Общая стоимость корзины: ${this.totalPrice} рублей`);
  },
};

cart.add('red wine', 2000, 3);
cart.add('white wine', 1000, 1);
cart.add('parmesane', 300, 1);
cart.add('black angus', 1500, 2);
cart.setDiscount = 'NjmlkjEWYEAR';
cart.print();
