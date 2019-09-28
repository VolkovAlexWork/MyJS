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
    for (let i=0; i<2; i++){
       let first = prompt("Введите обязательную статью расходов в этом месяце", '');
       let second = prompt("Во сколько обойдется", '');
       let regexNum = /\d/g;

       if (typeof (first) === 'string' && first != null && first !="" && first.match(regexNum) == null
           && typeof (second) === 'string' && second != null && second.match(regexNum) != null){
          appData.expenses[first] = second;
       }else {
          alert("Error");
       }
    }
 }
 chooseExpenses();

 appData.moneyPerDay = (appData.budget / 30).toFixed();

 alert("Money per day: " + appData.moneyPerDay);

 function checkSavings() {
   if (appData.savings == true){
      let save = +prompt("Яка сума накоплення?"),
          percent = +prompt("Під який відсоток?");
      appData.monthIncom = save/100/12*percent;
      alert("Доход в місяць з депозиту: " + appData.monthIncom);
   }
}
checkSavings();

 console.log(appData);