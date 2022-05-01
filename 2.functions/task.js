// Задание 1
function getArrayParams(arr) {
  let min = 100, max = -100, sum = 0, avg;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] <= min) {
      min = arr[i];
    }
    if (arr[i] >= max) {
      max = arr[i];
    }
    sum+=arr[i];
  }
  
  avg = parseFloat((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum+=arr[i]
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  
  for (let i = 1; i < arrOfArr.length; i++){
    if (func(arrOfArr[i])>max){
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0], dif;
  for (let i = 0; i < arr.length; i++){
    if (arr[i]< min){
      min = arr[i];
    }
    if (arr[i]>max){
      max = arr[i];
    }
  }
  dif = Math.abs(max - min);
  return dif;
}
