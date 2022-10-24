const revert = (phrase) => {

    let reverted = '';
    for (let i = phrase.length - 1; i >= 0; i--) {
        reverted += phrase[i];
    }

    return reverted;
};

const result = revert('Привет мир');
console.log('result: ', result);