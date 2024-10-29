class Compose {
  constructor(middleware) {
    if (!Array.isArray(middleware)) {
      throw new TypeError("middleware must be an array!");
    }
    for (const middlewareItem of middleware) {
      if (typeof middlewareItem !== "function") {
        throw new TypeError("middlewareItem must be a function!");
      }
    }
    this.middleware = middleware;
    this.index = -1;
    return (next) => {
      this.next = next;
      return this.dispatch(0);
    };
  }
  dispatch(index) {
    if (index <= this.index) {
      return Promise.reject(new Error("next() called multiple times"));
    }
    let fn = this.middleware[index];
    if (index === this.middleware.length) {
      fn = this.next;
    }
    if (!fn) return Promise.resolve();

    try {
      return Promise.resolve(fn(this.dispatch.bind(this, index + 1)));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

const middleware1 = [
  (next) => {
    console.log(1);
    next();
    console.log(2);
  },
  (next) => {
    console.log(3);
    next();
    console.log(4);
  },
  (next) => {
    console.log(5);
    next();
    console.log(6);
  },
];

const middleware2 = [
  (next) => {
    console.log("middleware1");
    return next().then((res) => {
      return res + "1";
    });
  },
  (next) => {
    console.log("middleware2");

    return next().then((res) => {
      return res + "2";
    });
  },
  (next) => {
    console.log("middleware3");

    return next().then((res) => {
      return res + "3";
    });
  },
];

const compose1 = new Compose(middleware1);

const compose2 = new Compose(middleware2);

compose1(() => {
  console.log(7);
});
compose2(() => {
  console.log(0);
  return Promise.resolve("0");
}).then((res) => {
  console.log(res);
});
