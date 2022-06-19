
  function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = args.join(","); // получаем правильный хэш
        let idx = cache.findIndex((item)=> item = hash ); // ищем элемент, хэш которого равен нашему хэшу
        if (idx !== -1 ) { // если элемент не найден
            console.log("Из кэша: " + cache[idx]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + cache[idx];
        }
    
        let result = func(...args); // в кэше результата нет - придётся считать
        cache.push({hash, result}) ; // добавляем элемент с правильной структурой
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
  let flag = true;
  return function (...args) 
  {        
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
  
}
