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
   chooseExpenses: function() {
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
   },
   detectDayBudget: function() {
      appdata.perDay = (appdata.money/30).toFixed();

      alert("Твой бюджет на один день = " + (appdata.perDay/30));
   },
   detectLevel: function() {
      if(appdata.perDay < 100){
         console.log("минимальный уровень достатка");
      } else if (appdata.perDay > 100 && appdata.perDay < 2000){
         console.log("Средний уровень достатка");
      } else if (appdata.perDay > 2000){
         console.log("Высокий уровень достатка");
      } else {
         console.log("Произошла ошибка");
      }
   },
   checkSavings: function() {
      if (appdata.savings){
         let save = +prompt("Какова ваша сумма накоплений?", ""),
             percent = +prompt("Под какой процент , накопления", "");
   
             appdata.monthIncome = save/100/12*percent;
             alert("Доход в месяц с вашего депозита = " + appdata.monthIncome);
      }
   },
   chooseOptExpenses: function() {
      let money = prompt("Статья необязательных расходов", "");
      for( let i = 1; i < 4; i++){
      let spend = prompt("Статья необязательных расходов", "");

      appdata.optionalExpenses[i] = spend;
      }
   },
   chooseIncome: function() {
      let items = prompt("Что принесет дополнительный доход ( Укажите через запятую )", "");
      while ( items == "" || items == null){
         items = prompt("Что принесет дополнительный доход ( Укажите через запятую )", "");
      }
      this.income = items.split(", ");
      this.income.push( prompt("Может что то еще принесет доп доход?", ""));
      this.income.sort();
      appdata.income.forEach(function (item, i, marr) {
            console.log("Способы доп. зароботка: " + (i+1) + " " + item );
      });    
   }
};

for ( let key in appdata){
   console.log("Наша программа включает в себя - " + key);
}







