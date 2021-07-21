//用setInterval实现setTimeout
function mySetTimeout(callback, time) {
  const timer = setInterval(() => {
    clearInterval(timer);
    callback();
  }, time);
}

function mySetInterval(callback, time) {
  (function inner() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      callback();
      inner();
    }, time);
  })();
}
