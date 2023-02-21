import { useRef, useState } from "react";
import checkPassword from "./CheckPassword";
import checkUser from "./CheckUser";
import './Form.css'

const Form = ({ object, objectUser }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const resultPassword = checkPassword(password.current.value, object);
    const resultUser = checkUser(user.current.value, objectUser);
    if (resultPassword == false) {
      alert("Password must contain ...");
    }
    if (resultUser[0] == false && resultUser.length == 1) {
      alert("user must contain ...");
    }
    if (resultUser[0] == false && resultUser.length == 2) {
      alert(`The word ${resultUser[1]} is not allowed`);
    }
    if (resultUser[0] && resultPassword) {
      alert("Submit succeded");
    }
  };
  const password = useRef(null);
  const user = useRef(null);
  const [see, setSee] = useState(false);
  return (
    <form
      onSubmit={(ev) => {
        handleSubmit(ev);
      }}
    >
      <input
        type="text"
        ref={user}
        placeholder={"User"}
        className="inputUser"
      />
      <div className="inputPassword">
        <input
          type={see ? "text" : "password"}
          ref={password}
          placeholder={"Password"}
        />
        <button
          onClick={(ev) => {
            ev.preventDefault();
            setSee(!see);
          }}
        >
          <img src={see ? "../notsee.png" : "../see.png"} alt="see button" />
        </button>
      </div>
      <button type="submit" className="submitButton">
        submit
      </button>
    </form>
  );
};
export default Form;
