const randomArrayV3 = (length, n, m, parity = '') => {


    const array = [];
    array.length = length;
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    max += 1;
    min -= 1;

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.trunc((Math.random() * (max - min)) + min);

        if (array[i] === 0) {
            // array[i] = Math.abs(array[i]);
            continue;
        }
    }

    if(parity === ''){
        return array;
    }

    if (parity === 'even') {
        const evenNumbers = [];
        array.forEach((number) => {
            if (!(number % 2)) {
                evenNumbers.push(number);
            }
        });

        return evenNumbers;
    } else if (parity === 'odd') {
        const oddNumbers = [];

        array.forEach((number) => {
            if (number % 2) {
                oddNumbers.push(number);
            }
        });

        return oddNumbers;
    }

    return array;
};

console.log('task03: ', randomArrayV3(45, -11, 0, 'even'));