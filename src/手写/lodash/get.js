// 范例
const object = { a: [{ b: { c: 3 } }] };

function get(object, path, defaultValue) {
  if (!object) {
    return defaultValue;
  }
  let count = 0;

  const pathArr = Array.isArray(path) ? path : path.split(".");
  const length = pathArr.length;

  while (object != null && count < length) {
    object = object[String(pathArr[count])];
    count++;
  }

  const result = count && count === length ? object : defaultValue;
  return result;
}

//=> 3
get(object, "a[0].b.c");

//=> 3
get(object, 'a[0]["b"]["c"]');

//=> 'default'
get(object, "a[100].b.c", "default");
