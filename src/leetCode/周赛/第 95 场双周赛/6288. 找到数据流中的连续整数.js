/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
  this.data = [];
  this.value = value;
  this.k = k;
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
  this.data.push(num);
  const curDataLen = this.data.length;
  if (curDataLen < this.k) {
    return false;
  }
  for (let i = curDataLen - this.k; i < curDataLen; i++) {
    if (this.data[i] != this.value) {
      return false;
    }
  }
  return true;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */

var obj = new DataStream(4, 3);
console.log(obj.consec(4));
console.log(obj.consec(4));
console.log(obj.consec(4));
console.log(obj.consec(3));

