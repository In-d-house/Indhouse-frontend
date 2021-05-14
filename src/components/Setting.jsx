import React from "react";

import Title from "./shared/Title";
import Profile from "./Profile";
import LogoutButton from "./buttons/LogoutButton";

import { title } from "../constants";

const Setting = () => {
  return (
    <>
      <Title title={title.setting} />
      <Profile />
      <LogoutButton />
    </>
  );
};

export default Setting;
