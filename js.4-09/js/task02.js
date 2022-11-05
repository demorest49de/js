const getUniqIpsCount = () => {
    const result = Array.from([...new Set(listIPv4)]);
    return result.length;
};

getUniqIpsCount();