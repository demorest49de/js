const getAveragePriceGoods = (array)=>{
    let sumOfArrayAverage = 0;
    for (const element of array) {
        const [one, two ] = element;
        const arrayAverage = two/one;
        sumOfArrayAverage += arrayAverage;
    }

    return sumOfArrayAverage / array.length;
}

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