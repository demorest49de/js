const addPrefix = (names, prefix) => {
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray[i] = prefix + ' ' + names[i];
    }

    return newArray;
};

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const namesWithPrefix = addPrefix(names, 'Mr');

console.log(': ', namesWithPrefix);