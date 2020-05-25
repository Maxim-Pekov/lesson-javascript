"use strict"
let money, date;
function start(){
   money = +prompt("Ваш бюджет на месяц?", "");
   date = prompt("Введите дату, yyyy-mm-dd", "");

   while(isNaN(money) || money == "" || money == null){
      money = +prompt("Ваш бюджет на месяц?", "");
   }
}
start();

let appdata = {
   money : money,
   timedata : date,  
   expenses :  {},    
   optionalExpenses: {},
   income :  [],
   savings : true,
};

function chooseExpenses() {
   for ( let i = 0; i < 2; i++ ){
      let a = prompt("Введите обязательную статью расходов", ""),
          b = prompt("Во сколько обойдется?", "");
  
      if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 10 ) {
         appdata.expenses[a] = b;
         console.log('done');
      }else{
         i--;
         continue;      
      }
   };
}
chooseExpenses();

function detectDayBudget() {
   appdata.perDay = (appdata.money/30).toFixed();

   alert("Твой бюджет на один день = " + (appdata.perDay/30));
}
detectDayBudget();

function detectLevel(){
   if(appdata.perDay < 100){
      console.log("минимальный уровень достатка");
   } else if (appdata.perDay > 100 && appdata.perDay < 2000){
      console.log("Средний уровень достатка");
   } else if (appdata.perDay > 2000){
      console.log("Высокий уровень достатка");
   } else {
      console.log("Произошла ошибка");
   }
}
detectLevel();


function checkSavings() {
   if (appdata.savings){
      let save = +prompt("Какова ваша сумма накоплений?", ""),
          percent = +prompt("Под какой процент , накопления", "");

          appdata.monthIncome = save/100/12*percent;
          alert("Доход в месяц с вашего депозита = " + appdata.monthIncome);
   }
}
checkSavings();

function chooseOptExpenses() {
   let money = prompt("Статья необязательных расходов", "");
   for( let i = 1; i < 4; i++){
      let spend = prompt("Статья необязательных расходов", "");

      appdata.optionalExpenses[i] = spend;
   }
}
chooseOptExpenses();


