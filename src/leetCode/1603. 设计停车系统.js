/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  switch (carType) {
    case 1:
      if (this.big) {
        this.big--;
        return true;
      } else {
        return false;
      }
    case 2:
      if (this.medium) {
        this.medium--;
        return true;
      } else {
        return false;
      }
    case 3:
      if (this.small) {
        this.small--;
        return true;
      } else {
        return false;
      }
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
