let income = +prompt('Введите сумму вашего дохода');
let taxsum = 0;
let calculation = 0;
if (isNaN(income)) {
    income = +prompt('Вы ввели неправильное значение.');
} else {
    if (income > 0 && income >= 15000) {
        if (income < 15000) {
            calculation = income * 0.13;
        } else {
            calculation = 15000 * 0.13;
        }
        taxsum += calculation;
        console.log(`Часть дохода ${income} рублей облагается по ставке 13% до 15000 рублей и составляет ${calculation}`);
    }

    if (income > 15000) {
        if (income < 50000) {
            calculation = (income - 15000) * 0.2;
        } else {
            calculation = (50000 - 15000) * 0.2;
        }
        taxsum += calculation;
        console.log(`Часть дохода ${income} рублей облагается по ставке 20% от 15000 до 30000 рублей и составляет ${calculation}`);
    }

    if (income > 50000) {
        calculation = (income - 50000) * 0.3;
        taxsum += calculation;
        console.log(`Часть дохода ${income} рублей облагается по ставке 30% от 50000 рублей и составляет ${calculation}`);
    }
}

console.log(`Сумма налога составляет: ${taxsum}`);
