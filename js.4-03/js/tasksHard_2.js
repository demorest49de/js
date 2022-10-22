let income = +prompt('Введите сумму вашего дохода');
let taxsum = 0;
let calculation = 0;

if (income > 50000) {
    calculation = income - 50000;
    taxsum += calculation * 0.3;
    income -= calculation;
    console.log(`Часть дохода ${income} рублей облагается по ставке 30% от 50000 рублей и составляет ${calculation}`);
}

if (income > 15000) {
    calculation = income - 15000;
    taxsum += calculation * 0.2;
    income -= calculation;
    console.log(`Часть дохода ${income} рублей облагается по ставке 20% от 15000 до 30000 рублей и составляет ${calculation}`);
}

if (income > 0) {
    taxsum += income * 0.15;
    console.log(`Часть дохода ${income} рублей облагается по ставке 15% до 15000 рублей и составляет ${calculation}`);
}


console.log(`Сумма налога составляет: ${taxsum}`);
