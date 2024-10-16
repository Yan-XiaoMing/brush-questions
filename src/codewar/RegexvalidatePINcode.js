function validatePIN(pin = "") {
  if (!(pin.length === 4 || pin.length === 6)) {
    return false;
  }
  for (let item of pin) {
    if (item >= "0" && item <= "9") {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
