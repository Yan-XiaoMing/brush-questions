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

function transformKey(key) {
  const keyArr = key.split("_");
}
