const isPrime = (number = 0) => {
    if (number === 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

for (let i = 1; i < 20; i++) {

    const result = isPrime(i);
    console.log(`result: ${i} - ${result}`);
}