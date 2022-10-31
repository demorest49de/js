const randomArrayV2 = (length, n, m) => {

    const array = [];
    array.length = length;
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    max += 1;
    min -= 1;

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.trunc((Math.random() * (max - min)) + min);

        if (array[i] === 0) {
            array[i] = Math.abs(array[i]);
        }
    }

    return array;
};

console.log('task02: ', randomArrayV2(35, 2, -11));
