const getAveragePriceGoods = (array) => {
    let sumOfAveragePerDay = 0;
    for (const element of array) {
        const [quantity, total] = element;
        const averagePerDay = total / quantity;
        sumOfAveragePerDay += averagePerDay;
    }

    return sumOfAveragePerDay / array.length;
};

const getAveragePriceGoodsSecondOption = (array) => {
    let sumQuantityAll = 0;
    let sumTotalAll = 0;
    for (const element of array) {
        const [quantity, total] = element;
        sumQuantityAll += quantity;
        sumTotalAll += total;
    }


    return (sumTotalAll / sumQuantityAll);
};

const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const averagePrice = getAveragePriceGoods(allCashbox);
console.log(': ', averagePrice);

const averagePrice2 = getAveragePriceGoodsSecondOption(allCashbox);
console.log(': ', averagePrice2);