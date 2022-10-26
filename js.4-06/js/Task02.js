const getAverageValue = (arr) => {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }

    return Math.floor(sum / arr.length);
};

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const averageValue = getAverageValue(allCashbox);
console.log('averageValue: ', averageValue);