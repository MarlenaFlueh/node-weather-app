const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('you need numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 6).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 55);
}).then((res) => {
  console.log('Should be a big number', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

/*
const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('it works');
    //reject('unable to fullfill promise');
  }, 2500);
});

somePromise.then((message) => {
console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
*/
