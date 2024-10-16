// 模拟数据库
const database = {
  users: [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    // ...more users
  ],
  posts: [
    { id: 1, title: "Post 1", content: "Content 1", userId: 1 },
    { id: 2, title: "Post 2", content: "Content 2", userId: 2 },
    // ...more posts
  ],
};

const createORM = (tableName, primaryKey) => {
  return new Proxy(database[tableName], {
    get(target, property) {
      if (property === "findAll") {
        // 返回所有记录
        return () => target;
      }
      if (property === "findById") {
        // 根据主键查找记录
        return (id) => target.find((item) => item[primaryKey] === id);
      }

      if (property === "findBy") {
        // 根据条件查找记录
        return (condition) =>
          target.filter((item) => {
            for (const key in condition) {
              if (item[key] !== condition[key]) {
                return false;
              }
            }
            return true;
          });
      }
      return target[property];
    },
  });
};
