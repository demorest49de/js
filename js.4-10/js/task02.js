'use strict';
const getUniqIpsCount = () => new Set(window?.listIPv4).size;

console.log(`Количество уникальныйх ip адресов: ${getUniqIpsCount()}`);
