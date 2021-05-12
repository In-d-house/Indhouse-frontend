import React, { useState } from "react";

import api from "../api";

const UserNameEditForm = ({ _id, currentName, token }) => {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (currentName === name) return;

    api.editUserProfileName({ name, _id, token });
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
