function validBraces(braces) {
  let result = [];
  let map = new Map();
  map.set("[", "]");
  map.set("(", ")");
  map.set("{", "}");
  for (let i of braces) {
    if (map.has(i)) {
      result.push(i);
    } else {
      if (result.length && map.get(result[result.length - 1]) === i) {
        result.pop();
      } else {
        return false;
      }
    }
  }
  if (!result.length) {
    return true;
  } else {
    return false;
  }
}
