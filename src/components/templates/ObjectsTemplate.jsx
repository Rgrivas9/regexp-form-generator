const ObjecsTemplate = (object, objectUser) => {
  const objects = `
  //Objects
    password={
        spaces: ${object.spaces},
        lowerCase: ${object.lowerCase},
        upperCase: ${object.upperCase},
        number: ${object.number},
        symbol: ${object.symbol},
      }
      user={
        spaces: ${objectUser.spaces},
        lowerCase: ${objectUser.lowerCase},
        upperCase: ${objectUser.upperCase},
        number: ${objectUser.number},
        symbol: ${objectUser.symbol},
        forbidden: ${[...objectUser.forbidden]},
      }`;
  return objects;
};

export default ObjecsTemplate;
