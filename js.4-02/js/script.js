'use strict';

const name = prompt(`Введите наименование товара`)
const quantity = +prompt(`Введите количество товара`)
const category = prompt(`Введите катергорию товара`)
const price = +prompt(`Введите цену товара`)

console.log(`тип данных: количество - ${typeof (quantity)} и цены - ${typeof (price)}`);
console.log(`На складе ${quantity} единицы товара "${name}" на сумму ${quantity * price} деревянных`);