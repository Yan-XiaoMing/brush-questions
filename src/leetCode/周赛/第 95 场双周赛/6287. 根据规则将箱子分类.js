/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  const Bulky_Condition = 10000;
  const Volume_Condition = Math.pow(10, 9);
  const Heavy_Condition = 100;
  let isBulky = false;
  let isHeavy = false;
  const volume = length * width * height;
  if (
    length >= Bulky_Condition ||
    width >= Bulky_Condition ||
    height >= Bulky_Condition ||
    mass >= Bulky_Condition ||
    volume >= Volume_Condition
  ) {
    isBulky = true;
  }
  if(mass >= Heavy_Condition){
    isHeavy = true
  }
  if(isBulky && isHeavy){
    return 'Both'
  }
  if(!isBulky && !isHeavy){
    return 'Neither'
  }
  if(isBulky){
    return 'Bulky'
  }
  if(isHeavy){
    return 'Heavy'
  }
};
