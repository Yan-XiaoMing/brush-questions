var obj = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      console.log(target, propKey, receiver);
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(target, propKey, value, receiver);
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);

obj.count = 1;
++obj.count;
