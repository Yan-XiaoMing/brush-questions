function sleepPromise(second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second);
  });
}

function sleep(second, callback) {
  setTimeout(callback, second);
}


function asyncSleep(second){
  return new Promise(resolve => setTimeout(resolve,second))
}

async function init(){
  await sleep(2000);
  console.log('end')
}
init()
