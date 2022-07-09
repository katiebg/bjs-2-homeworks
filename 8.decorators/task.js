
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(","); // получаем правильный хэш
    let idx = cache.findIndex((item, idx) => item[idx].hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1) { // если элемент  найден
      console.log("Из кэша: " + cache[idx].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({ hash: hash, result: result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(f, ms) {
  let timeout;
  f(...args);
  let flag = true;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!flag) {
        f.apply(this, args);
        flag = true;
      }
    }, ms);
  };
}


function debounceDecorator2(func) {
  let count = 0;
  function wrapper(...args) {
    count++;
    debounceDecoratorNew.call(this, ...args);
  }
  return wrapper;
}
