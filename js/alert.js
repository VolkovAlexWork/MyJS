let money = prompt("Ваш бюджет на месяц?", ''),
   time = prompt("Введите дату в формате YYYY-MM-DD", '');

 let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
 // Loop 1
 /*let w =0;
 let regexNum = /\d/g;
 do {
    let first = prompt("Введите обязательную статью расходов в этом месяце", '');
    let second = prompt("Во сколько обойдется", '');
    if (typeof (first) === 'string' && first != null && first !="" && first.match(regexNum) == null
        && typeof (second) === 'string' && second != null && second.match(regexNum) != null){
       appData.expenses[first] = second;
    }else {
       alert("Error");
    }
    w++;
 }while (w<2)*/
 //Loop2
/*let regexNum = /\d/g;
 let  q = 0;
 while (q <2){
   console.log(q);
   let first = prompt("Введите обязательную статью расходов в этом месяце", '');
   let second = prompt("Во сколько обойдется", '');
    if (typeof (first) === 'string' && first != null && first !="" && first.match(regexNum) == null
        && typeof (second) === 'string' && second != null && second.match(regexNum) != null){
       appData.expenses[first] = second;
    }else {
       alert("Error");
    }
   q++;
}*/
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
appData.moneyPerDay = appData.budget / 30;
alert("Money per day: " + appData.moneyPerDay);
console.log(appData);