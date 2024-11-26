Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        const res = await promiseFn();
        resolve(res);
      } catch (e) {
        if (!times) reject(e);
      }
    }
  });
};
