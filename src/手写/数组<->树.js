var list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 1 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];

function convertListToArrayTree(list = []) {
  const map = list.reduce((pre, cur) => {
    pre[cur.id] = cur;
    return pre;
  }, {});

  let resObj;
  const resArray = [];
  for (const id in map) {
    const listItem = map[id];
    if (listItem.parentId === 0) {
      resArray.push(listItem);
      resObj = listItem;
    } else {
      const parent = map[listItem.parentId];
      parent.children = parent.children || [];
      parent.children.push(listItem);
    }
  }
  return {
    resArray,
    resObj,
  };
}
console.log(convertListToArrayTree(list))
