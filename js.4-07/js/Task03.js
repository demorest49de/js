const randomArrayV3 = (length, n, m, parity = '') => {

    const array = [];
    array.length = length;

    let min = n;
    let max = m;

    if (n > m) {
        min = m;
        max = n;
    }

    max += 1;
    min -= 1;

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.trunc((Math.random() * (max - min)) + min);

        if (array[i] === 0) {
            array[i] = Math.abs(array[i]);
        }
    }

    if(parity === ''){
        return array;
    }

    if (parity === 'even') {
        const evenNumbers = [];
        array.forEach((item) => {
            if (!(item % 2)) {
                evenNumbers.push(item);
            }
        });

        return evenNumbers;
    } else if (parity === 'odd') {
        const oddNumbers = [];

        array.forEach((item) => {
            if (item % 2) {
                oddNumbers.push(item);
            }
        });

        return oddNumbers;
    }

    return array;
};

console.log('task03: ', randomArrayV3(45, -11, 0, 'even'));