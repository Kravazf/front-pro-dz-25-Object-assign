// Створіть об'єкт з такою структурою: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } }.

// Додайте функцію convert(obj) з аргументом obj. Функція повинна повертати об'єкт з такою структурою:
// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }


const obj = {
    x: 10,
    y: 20,
    inner: {
      x: 20,
      z: 30,
    },
    foo2: {
      k: 23,
      p: 13,
    }
  };
  
  function assign(object) {
    const newObj = {};

    for (let key in object) {
      if (typeof object[key] === 'object') {
        Object.assign(newObj, assign(object[key]))
    } else {
      newObj[key] =object[key];
    }
  }

    return newObj;
  }
  
  const resultNewObj = assign(obj);
  
  console.log(resultNewObj);



 
  
  
  
  
  
  
  