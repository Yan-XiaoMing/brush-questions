// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function _curry(...args) {
    const cleanerArgs = args.slice(0, fn.length);
    const hasPlaceholder = cleanerArgs.some(
      (argsItem) => argsItem === curry.placeholder
    );
    if (!hasPlaceholder && cleanerArgs.length === fn.length) {
      return fn.apply(this, cleanerArgs);
    }
    return function next(...nextArgs) {
      return _curry.apply(this, mergeArgs(cleanerArgs, nextArgs));
    };
  };
}

function mergeArgs(args, nextArgs) {
  const result = [];
  args.forEach((argsItem) => {
    if (argsItem === curry.placeholder) {
      result.push(nextArgs.shift());
    } else {
      result.push(argsItem);
    }
  });
  return [...result, ...nextArgs];
}

curry.placeholder = Symbol();

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const _ = curry.placeholder;

curriedJoin(1,2)(3,4)


