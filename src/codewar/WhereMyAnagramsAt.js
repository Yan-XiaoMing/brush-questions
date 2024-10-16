function anagrams(word, words) {
  let wordCnt = {};
  let result = [];
  for (let i of word) {
    if (wordCnt[i]) {
      wordCnt[i]++;
    } else {
      wordCnt[i] = 1;
    }
  }
  for (let item of words) {
    let flag = true;
    let itemObj = { ...wordCnt };
    for (let i of item) {
      if (itemObj[i]) {
        itemObj[i]--;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(item);
    }
  }
  return result;
}
