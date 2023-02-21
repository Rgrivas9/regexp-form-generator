const CheckPasswordTemplate = () => {
  return `
  //Function to check the password. Needs as arg the value of the input and te object 'password'
    const checkPassword = (value, object) => {
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
          return true;
        } else {
          return false;
        }
      };
      const checkRegEx = (value, regex, n) => {
        if (value.match(regex) != null) {
          if (n == 0) {
            return false;
          }
          if (value.match(regex).length < n) {
            return false;
          }
        }
        if (value.match(regex) == null && n > 0) {
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
          if (listWOSpaces.length < n) {
              return false;
            }
          if (listWOSpaces.length && n==0){
              return false
          }
        }
        if (value.match(regex) == null && n > 0) {
          return false;
        } else {
          return true;
        }
      };
      export default checkPassword;
      
    `;
};
export default CheckPasswordTemplate;
