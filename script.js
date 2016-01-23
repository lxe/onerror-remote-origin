window.onerror = function () {
  console.log(arguments);
}

console.log('Throwing error after 1 second');
setTimeout(function () {
  throw new Error('My Error');
  console.log('Error should have been thrown');
}, 1000);