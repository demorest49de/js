let income = +prompt('Введите сумму вашего дохода');

if(isNaN(income)){
    income = +prompt('Вы ввели неправильное значение.')
} else{
    if(income > 0 && income <= 15000){
        console.log(`Сумма налога по доходу ${income} по ставке 13% состовляет ${income * 0.13}`)
    }
    else if(income > 15000 && income <= 50000){
        console.log(`Сумма налога по доходу ${income} по ставке 20% состовляет ${income * 0.2}`)
    }else if(income > 50000){
        console.log(`Сумма налога по доходу ${income} по ставке 30% состовляет ${income * 0.3}`)
    }
}
