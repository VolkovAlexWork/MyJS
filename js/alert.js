let money, time;
function start(){
   money = +prompt("Ваш бюджет на месяц?", '');
   time = prompt("Введите дату в формате YYYY-MM-DD", '');

   while (isNaN(money) || money =="" || money == null){
      money = +prompt("Ваш бюджет на месяц?", '');
   }
}
   start();
 let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

 function chooseExpenses() {
    let first, second, regexNum;
    for (let i=0; i<2; i++){
       first = prompt("Введите обязательную статью расходов в этом месяце", '');
       second = prompt("Во сколько обойдется", '');
       regexNum = /\d/g;

       if (typeof (first) === 'string' && first != null && first !="" && first.match(regexNum) == null
           && typeof (second) === 'string' && second != null && second.match(regexNum) != null){
          appData.expenses[first] = second;
       }else {
          alert("Error");
       }
    }
 }
 chooseExpenses();

function detectDayBudget(){
   appData.moneyPerDay = (appData.budget / 30).toFixed();
   alert("Money per day: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
   if (appData.moneyPerDay<100){
      console.log("Мінімальний рівень достатку");
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
      console.log("Середній рівень достатку");
   }else if (appData.moneyPerDay > 20000){
      console.log("Високий рівень достатку");
   }else {console.log("Виникла помилка");}
}
detectLevel();
 function checkSavings() {
   if (appData.savings == true){
      let save = +prompt("Яка сума накоплення?"),
          percent = +prompt("Під який відсоток?");
      appData.monthIncom = save/100/12*percent;
      alert("Доход в місяць з депозиту: " + appData.monthIncom);
   }
}
checkSavings();

 function chooseOptExpenses(){
    let optExpenses;
    for (let i = 1; i<=3; i++){
       optExpenses = prompt("Стаття необовязкових витрат?", "");
       appData.optionalExpenses[i] = optExpenses;
    }
 }
chooseOptExpenses();
 console.log(appData);