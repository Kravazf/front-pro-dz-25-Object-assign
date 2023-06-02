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
  
  function convert(obj) {
    const newObj = {
      x: obj.inner.x,
      y: obj.y,
      z: obj.inner.z,
      k: obj.foo2.k,
      p: obj.foo2.p
    };
  
    return newObj;
  }
  
  const newObj = convert(obj);
  console.log(newObj);


 
  
  
  
  
  
  
  