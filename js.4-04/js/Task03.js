'use strict';

const calculate =
    (total = 0, itemsCount = 0, promocode = '') => {
        let totalWithDiscount = total;
        if (itemsCount > 10) {
            totalWithDiscount -= totalWithDiscount * .03;
            console.log('Если товаров больше 10, то ко всей' +
                ' сумме применяется скидка 3% ко всей сумме: ', totalWithDiscount);
        }

        if (total > 30000) {
            totalWithDiscount -= (total - 30000) * .15;
            console.log('При сумме, превышающей 30 000,' +
                ' применяется скидка 15% к сумме превышения: ', totalWithDiscount);
        }

        if (promocode === 'METHED') {
            totalWithDiscount -= totalWithDiscount * .1;
            console.log('Если промокод равен "METHED", то скидка 10%: ', totalWithDiscount);
        }

        if (promocode === 'G3H2Z1' && totalWithDiscount > 2000) {
            totalWithDiscount -= 500;
            console.log('Если промокод равен "G3H2Z1", то скидка 500 рублей, ' +
                'но только если сумма  корзины после' +
                ' предыдущих скидок превышает 2000р: ', totalWithDiscount);
        }
    };

// calculate(500,11)

// calculate(32000,1)

// calculate(500,1,'METHED')
// calculate(32500,1,'METHED')

// calculate(2000,11,'G3H2Z1')
// calculate(32500,11,'G3H2Z1')