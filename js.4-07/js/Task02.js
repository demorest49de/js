const randomArrayV2 = (length = 1, n = 1, m = 1) => {

    n = Math.abs(n);
    m = Math.abs(m);

    if(n === 0) n = 1;
    if(m === 0) m = 1;

    let min = 0;
    let max = 0;

    if (n < m) {
        min = n;
        max = m;
    } else {
        min = m;
        max = n;
    }
    max += 1;
    const array = [];
    array.length = length;

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.trunc(Math.random() * (max-min) + min);
    }

    return array;
};

console.log(': ', randomArrayV2(35, 10, -1));