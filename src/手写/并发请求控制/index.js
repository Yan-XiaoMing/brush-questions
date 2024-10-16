const runtimePool = new Set();
const waitListQueue = [];

const MAX_REQUEST_LIMIT = 5;

const limitRequest = (reqFn) => {
  return new Promise((resolve, reject) => {
    const isMax = runtimePool.size >= MAX_REQUEST_LIMIT;
    const request = () => {
      return reqFn()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          runtimePool.delete(request);
          if (waitListQueue.length) {
            const next = waitListQueue.shift();
            runtimePool.add(next);
            next();
          }
        });
    };
    if (isMax) {
      waitListQueue.push(reqFn);
    } else {
      runtimePool.add(request);
      request();
    }
  });
};

const createSetTimeoutFunction = (index) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(index, "index");
      resolve(resolve);
    }, Math.random() * 1000);
  });
};

const requestArr = new Array(100)
  .fill(0)
  .map((item, index) => createSetTimeoutFunction(index))
  .forEach(async (reqFn) => {
    console.log(reqFn);
    const res = await limitRequest(reqFn);
    console.log(res, "res");
  });
