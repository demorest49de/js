const revert = (phrase) => {

    let reverted = '';
    for (let i = phrase.length - 1; i >= 0; i--) {
        reverted += phrase.charAt(i);
        console.log(reverted);
    }
};

revert('Привет мир');