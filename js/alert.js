let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", ''),
    tempA1 = prompt("Введите обязательную статью расходов в этом месяце", '')
    tempA2 = prompt("Во сколько обойдется", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
appData.expenses.first = tempA1;
appData.expenses.second = tempA2;
alert(appData.budget / 30);

console.log(appData);