const ObjecsTemplate = (object, objectUser) => {
  const objects = `
  //Objects
  //Instruccionts bellow objects
    const password={
        spaces: ${object.spaces},
        lowerCase: ${object.lowerCase},
        upperCase: ${object.upperCase},
        number: ${object.number},
        symbol: ${object.symbol},
      }
      const user={
        spaces: ${objectUser.spaces},
        lowerCase: ${objectUser.lowerCase},
        upperCase: ${objectUser.upperCase},
        number: ${objectUser.number},
        symbol: ${objectUser.symbol},
        forbidden: [${objectUser.forbidden}]
      }
      //IMPORTANT!! If forbidden has something you need to put every word inside=>" "
      //like this => ["word1","word2","word3"]
      
      /* This code was created on a type module project, 
  thas why the export command at the end of the functions.
  If you are working on the same type probably already know what to do with this.
  just need to locate the functions on a directory of your project, then import them
  from the script where you have the inputs, make the functions filter the value and do
  whatever you want with the true or false statements, like an alert or so.
  Also you can customize the functions so you can know exactly what filter failed.

  If you ar not familiarized with Javascript and have only an HTML and css file,
  this is what you are going to do.

  Create another file call app.js, you can name it as you want but usually is named like that.
  Link that file into the head of your HTML file 
  like you do with the css but with the <script> tag and add defer after the src att. !IMPORTANT
  like this=> <script src="./app.js" defer></script>
  Then copy and paste this and the two functions bellow into that file app.js and remove the export default line.
  Next recover the two inputs and the form from the HTML after asing them an Id.

  const form = document.querySelector('#yourFormId')
  const inputUser = document.querySelector('#yourUserInputId')
  const inputPassword = document.querySelector('#yourPasswordInputId')
      !IMPORTANT Keep the # when putting your Id's
  finally add an event listener to your form. If you added a button it takes the submit role by default

  
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const resultPassword = checkPassword(inputPassword.value, password);
     const resultUser = checkUser(inputUser.value, user);
    if (resultPassword == false) {
      alert("password");
  }
    if (resultUser[0] == false && resultUser.length==1) {
      alert("user");
  }
    if (resultUser[0] == false && resultUser.length==2) {
      alert(\`The word \${resultUser[1]} is not allowed\`);
  }
     if (resultUser[0] && resultPassword) {
      alert("Submit succeded");
  }
});

  */


      
      `;
  return objects;
};
 
export default ObjecsTemplate;
