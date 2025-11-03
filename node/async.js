//promises
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    
    if (success) {
      resolve('Operation completed successfully');
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000);
});

myPromise
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message));

const fs = require('fs').promises;
const promise1 = Promise.resolve('First result');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));


Promise.all([promise1, promise2])
  .then(results => {
    console.log('Results:', results);
    
  })
  .catch(error => {
    console.error('Error in one of the promises:', error);
  });

  const promise11 = new Promise(resolve => setTimeout(() => resolve('First result'), 1000));
const promise22 = new Promise(resolve => setTimeout(() => resolve('Second result'), 500));

Promise.race([promise11, promise22])
  .then(result => {
    console.log('Fastest result:', result);
    
  });

  //async/await

  async function getData() {
  console.log('Starting...');
  const result = await someAsyncOperation();
  console.log(`Result: ${result}`);
  return result;
}

function someAsyncOperation() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Operation completed'), 1000);
  });
}

getData().then(data => console.log('Final data:', data));