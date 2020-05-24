"use strict"

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату, yyyy-mm-dd", "");
let nameExpenses = prompt("Введите обязательную статью расходов", "");
let moneyExpenses = prompt("Во сколько обойдется?", "");


let expenses ={
   nameExpenses :  moneyExpenses,
};

expenses[nameExpenses] = moneyExpenses;

let optionalExpenses ={};

var appdata = {
   money : money,
   timedata : time,      
   income :  [],
   savings : false,
};

alert("Твой бюджет на один день = " + ((appdata.money-expenses[nameExpenses])/30));



