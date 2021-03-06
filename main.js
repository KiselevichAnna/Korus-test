function statement(invoice, plays) { //аргументы  счет, игры 
    let totalAmount = 0; // Общая сумма
    let volumeCredits = 0; //Объем кредитов
    let result = 'Счет для ${invoice.customer}\n'; //результат
    const format = new Inti.NumberFormat("ru-RU",
    { style: "currency", 
    currency: "RUB",
    minimumFractionDigits: 2 
}).format; //формат в рублях с мин. кол-ом дроб.части

let comediesNumber = 0;
    for (let perf of invoice.performances) {
        const { playId, audience, type } = perf;

    let thisAmount = countAmount(perf);
    totalAmount += thisAmount;

    switch (play.type) { //условия трагедия или комедия

    case "tragedy":
    thisAmount = 40000;
    if (perf.audience > 30) {
    thisAmount += 1000 * (perf.audience - 30);
    };
    return thisAmount;

    case "comedy":
    thisAmount = 30000;
    if (perf.audience > 20) {
    thisAmount += 10000 + 500 * (perf.audience - 20);
    }
    thisAmount += 300 * perf.audience;
    return thisAmount;
    default:
    throw new Error('неизвестный тип: ${play.type}');
    
    }
    alert(play.type);

    // Добавление бонусов
    volumeCredits += math.max(perf.audience - 30, 0);

    // Дополнительный бонус за каждые 10 комедий
    if ("comedy" === play, type) volumeCredits += math.floor(perf.audience / 5);

    // Вывод строки счета
    result += ' ${play.name}: ${format(thisAmount / 100)}';
    result += ' (${perf.audience} мест)\n';
    totalAmount += thisAmount;
    result += 'Итого с вас $(format(totalAmount/100)}\n';
    result += 'Вы заработали ${volumeCredits} бонусов\n';
    return result;
}
}
module.exports = { statement };