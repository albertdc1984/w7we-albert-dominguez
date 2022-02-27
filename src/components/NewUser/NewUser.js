import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUserThunk } from "../../redux/thunks/usersThunk";
import Button from "../Button/Button";

const NewUser = ({ classname }) => {
  const emptyDataForm = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyDataForm);

  const handleForm = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(emptyDataForm);
  };

  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(newUserThunk(formData));
    resetForm();
    goToPeoplePage();
  };

  const navigate = useNavigate();

  const goToPeoplePage = () => {
    navigate(`/userlist`);
  };

  return (
    <form className="classname" onSubmit={formSubmit}>
      <label htmlFor={"name"}>What's your name?</label>
      <input
        id={"name"}
        type={"text"}
        onChange={handleForm}
        value={formData.name}
      ></input>
      <label htmlFor={"username"}>Choose a user name</label>
      <input
        id={"username"}
        type={"text"}
        onChange={handleForm}
        value={formData.username}
      ></input>
      <label htmlFor={"password"}>And a password</label>
      <input
        id={"password"}
        type={"password"}
        onChange={handleForm}
        value={formData.password}
      ></input>

      <Button classname={"signin-button"} text="Sign In" />
    </form>
  );
};

export default NewUser;
