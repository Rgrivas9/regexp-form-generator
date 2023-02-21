import { useRef } from "react";
import checkPassword from "./CheckPassword";
import checkUser from "./CheckUser";

const Form = ({object,objectUser}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const result = checkPassword(password.current.value, object);
    const resultUser = checkUser(user.current.value, objectUser)
    console.log(result,'password')
    console.log(resultUser,'user')
  };
  const password = useRef(null);
  const user = useRef(null)
  return (
    <form
      onSubmit={(ev) => {
        handleSubmit(ev);
      }}
    >
      
      <input type="text" ref={password} placeholder={'Password'}/>
      <input type="text" ref={user} placeholder={'User'}/>

      <button type="submit">submit</button>
    </form>
  );
};
export default Form;
