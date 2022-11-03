const randomArrayV3 = (length, n, m, parity = '') => {

    const min = Math.trunc(Math.min(n, m)) - 1;
    const max = Math.trunc(Math.max(n, m)) + 1;

    return Array(length).fill().map(() => {
        let number = 0;

        switch (parity) {
            case 'even':
                do {
                    number = Math.trunc(Math.random() * (max - min) + min);
                } while (number % 2);
                return number;
                break;
            case 'odd':
                do {
                    number = Math.trunc(Math.random() * (max - min) + min);
                } while (!(number % 2));
            default:
                return number = Math.trunc(Math.random() * (max - min) + min);
                break;
        }
    });
};

console.log('task03: ', randomArrayV3(45, 3, -13, 'odd'));