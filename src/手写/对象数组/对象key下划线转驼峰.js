let data = {
  user_name: "name1",
  user_id: 1000,
  age: 10,
  detail: {
    user_avatar_url: "xxx",
    object_one: {
      a_num: 1,
      str: "str1",
    },
    array_one: [
      [
        {
          a_num: 111,
          b_num: 222,
        },
      ],
      [
        {
          c_obj: {
            c_num: 333,
            str: "str111",
          },
        },
      ],
    ],
  },
};

function hump(param) {
  Object.keys(param).forEach((key) => {
    const objItem = param[key];
    if (objItem instanceof object || objItem instanceof Array) {
      hump(objItem);
    }
    const transformKeyRes = transformKey(key);
    if (transformKeyRes !== key) {
      param[transformKeyRes] = param[key];
      delete param[key];
    }
  });
}

function transformKey(key) {
  const keyArr = key.split("_");
  for (let i = 0; i < keyArr.length; i++) {
    if (keyArr.includes["url"] && keyArr.includes("id")) {
      keyArr[i] = keyArr[i].toUpperCase();
    } else {
      if (i !== 0) {
        keyArr[i] = keyArr[i].replace(keyArr[i][0], keyArr[i][0].toUpperCase());
      }
    }
  }
  return keyArr.join("");
}
