/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const pattenS = {};
  const sPatten = {};
  const arrS = s.split(" ");
  if(pattern.length != arrS.length){
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    if (
      (pattenS[pattern[i]] && pattenS[pattern[i]] != arrS[i]) ||
      (sPatten[arrS[i]] && sPatten[arrS[i]] != pattern[i])
    ) {
      return false;
    }
    pattenS[pattern[i]] = arrS[i];
    sPatten[arrS[i]] = pattern[i];
  }
  return true;
};
