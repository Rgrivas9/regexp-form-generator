const checkUser = (value, object) => {
  if (
    checkRegEx(value, /\s/g, object.spaces) &&
    checkRegEx(value, /[a-z]/g, object.lowerCase) &&
    checkRegEx(value, /[A-Z]/g, object.upperCase) &&
    checkRegEx(value, /\d/g, object.number) &&
    checkSymbols(value, /\W/g, object.symbol)
  ) {
    return checkForbidden(value, object.forbidden);
  } else {
    return [false];
  }
};

const checkRegEx = (value, regex, n) => {
  if (value.match(regex) != null && n == 0) {
    return false;
  }
  if (value.match(regex) == null && n == 1) {
    return false;
  } else {
    return true;
  }
};
const checkSymbols = (value, regex, n) => {
    const listWOSpaces = []
  if (value.match(regex) != null) {
    value.match(regex).forEach((ex) => {
        if (ex!=' '){listWOSpaces.push(ex)}
    });
    if (listWOSpaces.length && n==0){
        return false
    }
  }
  if (value.match(regex) == null && n == 1) {
    return false;
  } else {
    return true;
  }
};
const checkForbidden = (value, forbbidenList) => {
  const list = [];
  forbbidenList.forEach((forbidden) => {
    const word = new RegExp(forbidden, "i");
    if (checkRegEx(value,word,0)==false){list.push(forbidden)}
  });
  return list.length == 0 ? [true] : [false, list[0]];
};
export default checkUser;
