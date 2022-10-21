const rain = Math.round(Math.random() * 1);
console.log(rain === 1 ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!');

const math = +prompt('Введите кол-во баллов по математике:');
const russian = +prompt('Введите кол-во баллов по русскому языку:');
const compScience = +prompt('Введите кол-во баллов по информатике:');

const minPoints = 265;

if (math + russian + compScience >= minPoints) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('Вы не поступили на бюджет!(');
}

const withdraw = +prompt(`Введите сумму: `);

if (withdraw % 100 === 0) {
    console.log(`Заберите деньги: ${withdraw}`);
} else {
    console.log(`Введите сумму кратную 100`);
}