const getRandom = (min, max, number) => {

    number = Math.trunc((Math.random() * (max - min)) + min);
    if (number === 0) number = Math.abs(number);
    return number;
};
const randomArrayV3 = (length, n, m, parity) => {
    const array = [];
    array.length = length;
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    max += 1;
    min -= 1;

    for (let i = 0; i < array.length; i++) {
        let number = 0;
        if (parity === 'even') {
            do {
                number = getRandom(min, max, number);
            } while (number % 2);
        } else if (parity === 'odd') {
            do {
                number = getRandom(min, max, number);
            } while (!(number % 2));
        }
        array[i] = number;
    }

    return array;
};

console.log('task03: ', randomArrayV3(45, -12, 1, 'even'));