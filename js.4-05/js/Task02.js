const isPrime = (i = 0) => {

    return ((i % 2) && (i % 3) && (i % 5)) ? true : false;
};

for (let i = 0; i < 100; i++) {

    const result = isPrime(i);
    console.log(`result: ${i} - ${result}`);
}