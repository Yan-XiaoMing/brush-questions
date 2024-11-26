class Compose {
  constructor(middleware) {
    if (!Array.isArray(middleware)) {
      throw new TypeError("中间件必须为数组");
    }
    for (const middlewareItem of middleware) {
      if (typeof middlewareItem !== "function") {
        throw new TypeError("中间件每一项必须为函数");
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
    if (index < this.index) {
      return Promise.reject(new Error("next() called multiple times"));
    }
    let fn = this.middleware[index];
    if (index === this.middleware.length) {
      fn = this.next;
    }
    if (!fn) {
      return Promise.resolve();
    }

    try {
      return Promise.resolve(fn(this.dispatch.bind(this, index + 1)));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
