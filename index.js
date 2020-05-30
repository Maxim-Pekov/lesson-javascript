"use strict"

let btn = document.getElementById('start'),
    budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value'),
    expensesInput = document.querySelectorAll('.expenses-item'),
    btn1 = document.getElementsByTagName('button'),
    btn_expenses =btn1[0],
    btn_optional_expenses = btn1[1],
    btn_count_budget = btn1[2],
    input_optional_expenses = document.querySelectorAll('.optionalexpenses-item'),
    check_box = document.querySelector('#savings'),
    choose_percent = document.querySelector('#percent'),
    year_input = document.querySelector('.year-value'),
    month_input = document.querySelector('.month-value'),
    day_input = document.querySelector('.day-value'),
    choose_sum = document.querySelector('#sum'),
    chooseIncome = document.querySelector(".choose-income");

let money, date;

btn.addEventListener("click", function(){
   money = +prompt("Ваш бюджет на месяц?", "");
   date = prompt("Введите дату, yyyy-mm-dd", "");

   while(isNaN(money) || money == "" || money == null){
      money = +prompt("Ваш бюджет на месяц?", "");
   }
   appdata.money = money;
   appdata.timedata = date;
   budget.textContent = money.toFixed();
   year_input.value = new Date(Date.parse(date)).getFullYear();
   month_input.value = new Date(Date.parse(date)).getMonth()+1;
   day_input.value = new Date(Date.parse(date)).getDate();
});

btn_expenses.addEventListener("click", function(event){
   if ( appdata.money == undefined){
      event.preventDefault;                             // делает кнопку неактивной если не нажата кнопка начать расчет
   } else {
      let sum = 0;
      for ( let i = 0; i < expensesInput.length; i++ ){
         let a = expensesInput[i].value,
            b = expensesInput[++i].value;
   
         if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 10 ) {
            appdata.expenses[a] = b;
            console.log('done');
            sum += +b;
            expenses.textContent = sum;
            appdata.expensesSum = sum;
         }else{
            i--;
            continue;      
         }
      };
   }
   
});

btn_optional_expenses.addEventListener("click", function(){
   if ( appdata.money == undefined){
      event.preventDefault;                             // делает кнопку неактивной если не нажата кнопка начать расчет
   } else {
      for( let i = 0; i < input_optional_expenses.length; i++){
         let opt = input_optional_expenses[i].value;
         appdata.optionalExpenses[i] = opt;  
         optionalexpenses.textContent += appdata.optionalExpenses[i] + ", "
      };
   };   
});

btn_count_budget.addEventListener('click', function(){
   if ( appdata.money == undefined){
      event.preventDefault;                             // делает кнопку неактивной если не нажата кнопка начать расчет
   } else {
      if ( appdata.money != undefined){
         appdata.perDay = ((appdata.money - appdata.expensesSum)/30).toFixed();          // toFixed() округляет до запятой
         daybudget.textContent = appdata.perDay;

         if(appdata.perDay < 100){
            level.textContent = "минимальный уровень достатка";
         } else if (appdata.perDay > 100 && appdata.perDay < 2000){
            level.textContent = "Средний уровень достатка";
         } else if (appdata.perDay > 2000){
            level.textContent = "Высокий уровень достатка";
         } else {
            level.textContent = "Произошла ошибка";
         }        
      } else {
         daybudget.textContent = "Произошла ошибка";
      }   
   } 
});

chooseIncome.addEventListener('input', function(){
   let items = chooseIncome.value;     
   appdata.income = items.split(", ");
   income.textContent = appdata.income;
});

check_box.addEventListener("click", function(){
   if ( appdata.savings == false){
      appdata.savings = true;
   } else {
      appdata.savings = false;
   }
});

choose_sum.addEventListener("input", function(){
   if (appdata.savings == true){
      let save = +choose_sum.value,
          percent = +choose_percent.value;

      appdata.monthIncome = save/100/12*percent;
      appdata.yearIncome = save/100*percent;

      monthsavings.textContent = appdata.monthIncome.toFixed(1);
      yearsavings.textContent = appdata.yearIncome.toFixed(1);
   }
});

choose_percent.addEventListener("input", function(){
   if (appdata.savings == true){
      let save = +choose_sum.value,
          percent = +choose_percent.value;

      appdata.monthIncome = save/100/12*percent;
      appdata.yearIncome = save/100*percent;

      monthsavings.textContent = appdata.monthIncome.toFixed(1);
      yearsavings.textContent = appdata.yearIncome.toFixed(1);
   }
});


let appdata = {
   money : money,
   timedata : date,  
   expenses :  {},    
   optionalExpenses: {},
   income :  [],
   savings : false,
};

for ( let key in appdata){
   console.log("Наша программа включает в себя - " + key);
}







