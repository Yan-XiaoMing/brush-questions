class LazyMan {
  constructor(name) {
    this.tasks = [];
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.tasks.push(task);
    setTimeout(() => {
      // 把 this.next() 放到调用栈清空之后执行
      this.next();
    }, 0);

    return this;
  }
  next() {
    const curTask = this.tasks.shift();
    curTask && curTask();
    return this;
  }

  eat(name) {
    const task = () => {
      console.log(`Eat ${name}~`);
      this.next();
    };
    this.tasks.push(task);
  }

  sleep(time) {
    this.sleepWrapper(time, false);
    return this;
  }

  sleepFirst(time) {
    this.sleepWrapper(time, true);
    return this;
  }

  sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after sleeping ${time} seconds`);
        this.next();
      }, time * 1000);
    };
    if (first) {
      this.tasks.unshift(task);
    } else {
      this.tasks.push(task);
    }
  }
}

// new LazyMan("Hank").sleep(5).eat("dinner");

new LazyMan("Hank").sleepFirst(5).eat("supper")
