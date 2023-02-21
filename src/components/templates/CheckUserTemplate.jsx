const CheckUserTemplate = () => {
  return `
  //Function to check the user. Needs as arg the value of the input and te object 'user'
    const checkUser = (value, object) => {
        const spaces = new RegExp("\\s", "g");
        const lowerCase = new RegExp("[a-z]", "g");
        const upperCase = new RegExp("[A-Z]", "g");
        const number = new RegExp("\\d", "g");
        const symbol = new RegExp("\\W", "g");
        if (
          checkRegEx(value, spaces, object.spaces) &&
          checkRegEx(value, lowerCase, object.lowerCase) &&
          checkRegEx(value, upperCase, object.upperCase) &&
          checkRegEx(value, number, object.number) &&
          checkSymbols(value, symbol, object.symbol)
        ) {
          return checkForbidden(value, object.forbidden);
        } else {
          return false;
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
        return list.length == 0 ? true : [false, list[0]];
      };
      export default checkUser;
    `;
};
export default CheckUserTemplate