console.log('Starting');

setTimeout(() => {
  console.log('inside the callback');
}, 2000);

setTimeout(() => {
  console.log('zero timeout');
}, 0);

console.log('Finishing');
