'use strict';
function solveEquation(a, b, c) {
  let arr = [], d;
  d = Math.pow(b,2)-4*a*c;
  if (d==0){
    arr[0] = -b/(2*a);
  } else if (d>0){
    arr[0]=(-b + Math.sqrt(d) )/(2*a);
    arr[1]=(-b - Math.sqrt(d) )/(2*a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount, bodyCredit, creditTerm, today;
  percent = parseInt(percent) / 100; //процент
  contribution = parseInt(contribution); //первоначальный взнос
  amount =  parseInt(amount); //сумма кредита
  if (typeof percent !== Number){
    return percent = 'Параметр "Процентная ставка" содержит неправильное значение "${percent}"'
  }
  if (typeof contribution !== Number){
    return contribution = 'Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"'
  }
  if (typeof amount !== Number){
    return amount = 'Параметр "Сумма кредита" содержит неправильное значение "${amount}"'
  }
  bodyCredit = amount - contribution;
  today = new Date();
  creditTerm = date.getFullYear-today.getFullYear

  return totalAmount;
}
