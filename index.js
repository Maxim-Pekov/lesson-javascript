"use strict"

let money = +prompt("Ваш бюджет на месяц?", "");
let date = prompt("Введите дату, yyyy-mm-dd", "");

let appdata = {
   money : money,
   timedata : date,  
   expenses :  {},    
   optionalExpenses: {},
   income :  [],
   savings : false,
};

// for ( let i = 0; i < 2; i++ ){
//    let a = prompt("Введите обязательную статью расходов", ""),
//        b = prompt("Во сколько обойдется?", "");

//    if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 10 ) {
//       appdata.expenses[a] = b;
//       console.log('done');
//    }else{
//       i--;
//       continue;      
//    }
// };
// var i = 0;
// do {
   
//    let a = prompt("Введите обязательную статью расходов", ""),
//        b = prompt("Во сколько обойдется?", "");

//    if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 10 ) {
//       appdata.expenses[a] = b;
//       console.log('done');
//       i++;
//    }else{      
//       continue;      
//    }
// } while ( i < 2);

let i = 0;
while ( i < 2){
   let a = prompt("Введите обязательную статью расходов", ""),
        b = prompt("Во сколько обойдется?", "");

    if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 10 ) {
       appdata.expenses[a] = b;
       console.log('done');
       i++;
    }else{      
       continue;      
    }
}



appdata.perDay = appdata.money/30;
alert("Твой бюджет на один день = " + (appdata.perDay/30));

