import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as actions from "../reducers/user";
import { profileType } from "../constants";

const UserNameEditForm = ({ _id, currentName }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (currentName === name) return;

    dispatch(actions.editProfileRequest({ type: profileType.name, name, _id }));

  };

  return (
    <>
      <span>{currentName}</span>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="name"
          id="name"
          onChange={({ target }) => setName(target.value)}
        />
        <button type="submit" >Edit Name</button>
      </form>
    </>
  );
};

export default UserNameEditForm;
