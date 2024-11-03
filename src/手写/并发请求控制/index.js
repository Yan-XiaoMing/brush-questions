// const runtimePool = new Set();
// const waitListQueue = [];

// const MAX_REQUEST_LIMIT = 5;

// const limitRequest = (reqFn) => {
//   return new Promise((resolve, reject) => {
//     const isMax = runtimePool.size >= MAX_REQUEST_LIMIT;
//     const request = () => {
//       return reqFn()
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           reject(err);
//         })
//         .finally(() => {
//           runtimePool.delete(request);
//           if (waitListQueue.length) {
//             const next = waitListQueue.shift();
//             runtimePool.add(next);
//             next();
//           }
//         });
//     };
//     if (isMax) {
//       waitListQueue.push(reqFn);
//     } else {
//       runtimePool.add(request);
//       request();
//     }
//   });
// };

// const createSetTimeoutFunction = (index) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(index, "index");
//       resolve(resolve);
//     }, Math.random() * 1000);
//   });
// };

// const requestArr = new Array(100)
//   .fill(1)
//   .map((item, index) => createSetTimeoutFunction(index))
//   .forEach(async (reqFn) => {
//     console.log(reqFn);
//     const res = await limitRequest(reqFn);
//     console.log(res, "res");
//   });

class RequestQueue {
  constructor(maxConcurrent) {
    this.maxConcurrent = maxConcurrent;
    this.currentRunning = 0;
    this.taskQueue = [];
  }

  enqueue(url) {
    return new Promise((resolve, reject) => {
      const task = () => {
        this.currentRunning++;
        sendRequest(url)
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.currentRunning--;
            this.dequeue();
          });
      };
      this.taskQueue.push(task);
      this.dequeue();
    });
  }
  dequeue() {
    if (this.currentRunning < this.maxConcurrent && this.taskQueue.length) {
      const task = this.taskQueue.shift();
      task();
    }
  }
}

function sendRequest(url) {
  console.log(`Sending request to ${url}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Response received from ${url}`);
      resolve(`Result from ${url}`);
    }, Math.random() * 2000); // 随机延时以模拟请求处理时间
  });
}

const requestQueue = new RequestQueue(3); // 假设我们限制最大并发数为3

// 模拟批量请求
const urls = ["url1", "url2", "url3", "url4", "url5", "url6"];
urls.forEach((url) => {
  requestQueue.enqueue(url).then((result) => {
    console.log(result);
  });
});
