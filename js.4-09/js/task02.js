const getUniqIpsCount = () => {
    return new Set(listIPv4).size;
};

console.log(`Количество уникальныйх ip адресов: ${getUniqIpsCount()}`);
