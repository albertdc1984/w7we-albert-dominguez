import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUserThunk } from "../../redux/thunks/usersThunk";
import Button from "../Button/Button";

const NewUser = () => {
  const emptyDataForm = {
    name: "",
    username: "",
    password: "",
    image: "",
  };

  const [formData, setFormData] = useState(emptyDataForm);

  const handleForm = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(emptyDataForm);
  };

  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    const newFormData = new FormData();
    newFormData.append("image", formData.image);
    newFormData.append("name", formData.name);
    newFormData.append("username", formData.username);
    newFormData.append("password", formData.password);
    dispatch(newUserThunk(newFormData));
    jumpToUserList();
    resetForm();
  };

  const navigate = useNavigate();

  const jumpToUserList = () => {
    navigate(`/userlist`);
  };

  return (
    <form className="classname" onSubmit={formSubmit} autoComplete="off">
      <label htmlFor="image">Show your face</label>
      <input id="image" type="file" name="image" onChange={handleForm}></input>

      <label htmlFor="name">What's your name?</label>
      <input
        id="name"
        type="text"
        onChange={handleForm}
        value={formData.name}
      ></input>
      <label htmlFor="username">Choose a user name</label>
      <input
        id="username"
        type="text"
        onChange={handleForm}
        value={formData.username}
      ></input>
      <label htmlFor="password">And a password</label>
      <input
        id="password"
        type="password"
        onChange={handleForm}
        value={formData.password}
      ></input>

      <Button classname={"signin-button"} text="Sign In" />
    </form>
  );
};

export default NewUser;
